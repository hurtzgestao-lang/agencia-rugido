#!/usr/bin/env node
// Extrai insights de tráfego do Meta Ads — Rugido.
// Saídas:
//   - Google Sheets: aba única, granularidade nível ANÚNCIO, colunas em inglês (formato dashboard padrão)
//   - JSON local em dados/ — mantém os 4 níveis (account/campaign/adset/ad) pra análise programática
//
// Uso:
//   node scripts/meta-ads-insights.js --since 2026-05-01 --new-sheet  — cria planilha + JSON
//   node scripts/meta-ads-insights.js --update SHEET_ID --since ...   — atualiza planilha + JSON
//   node scripts/meta-ads-insights.js --since 2026-05-01              — só JSON local
//   node scripts/meta-ads-insights.js --debug --since 2026-05-22      — só mostra, não grava
//   node scripts/meta-ads-insights.js --account act_123 --since ...   — conta específica
//
// Flags:
//   --since YYYY-MM-DD   data inicial (obrigatória se não usar --date-preset)
//   --until YYYY-MM-DD   data final (default: hoje)
//   --date-preset NAME   alternativa a --since/--until (last_7d, last_30d, this_month, ...)
//   --account act_ID     uma conta específica (pode repetir). Default: META_ADS_RUGIDO_01/02
//   --new-sheet          cria planilha nova
//   --update SHEET_ID    atualiza planilha existente (dedup por data+ad_id)
//   --debug              mostra resumo sem gravar nada

const path = require('path');
const fs   = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { google } = require('googleapis');

const TOKEN     = process.env.META_PAGE_TOKEN;
const API_VER   = 'v21.0';
const DADOS_DIR = path.resolve(__dirname, '../dados');

const MONTHS_PT    = ['janeiro','fevereiro','marco','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const MONTHS_LABEL = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

const SHEET_TAB_NAME = 'Anúncios';

const SHEET_HEADERS = [
  'Date',
  'Ad Name',
  'Adset Name',
  'Campaign Name',
  'Spend (Cost, Amount Spent)',
  'Action Leads',
  'Action Link Clicks',
  'Action Landing Page View',
  'Impressions',
  'Action 3s Video Views',
  'Video 50 Percent Watched Actions',
  'Video 75 Percent Watched Actions',
  'Video 95 Percent Watched Actions',
  'Instagram Permalink URL',
  'Action FB Pixel Purchase (Offsite Conversion)',
  'Action FB Pixel Initiate Checkout (Offsite Conversion)',
  'Thumbnail URL 02',
];

const INSIGHTS_FIELDS_AD = [
  'date_start','date_stop',
  'account_id','account_name',
  'campaign_id','campaign_name',
  'adset_id','adset_name',
  'ad_id','ad_name',
  'spend','impressions','clicks','reach','frequency',
  'ctr','cpc','cpm',
  'actions','action_values','cost_per_action_type',
  'video_p50_watched_actions','video_p75_watched_actions','video_p95_watched_actions',
];

const INSIGHTS_FIELDS_SIMPLE = [
  'date_start','date_stop','account_id','account_name',
  'spend','impressions','clicks','reach','frequency','ctr','cpc','cpm',
  'actions','cost_per_action_type',
];

const FIELDS_BY_LEVEL = {
  account:  INSIGHTS_FIELDS_SIMPLE,
  campaign: [...INSIGHTS_FIELDS_SIMPLE, 'campaign_id','campaign_name','objective'],
  adset:    [...INSIGHTS_FIELDS_SIMPLE, 'campaign_id','campaign_name','adset_id','adset_name'],
  ad:       INSIGHTS_FIELDS_AD,
};

const LEVELS = ['account','campaign','adset','ad'];

const LEAD_ACTIONS         = new Set(['lead','offsite_complete_registration_add_meta_leads','onsite_conversion.lead_grouped']);
const WPP_ACTIONS          = new Set(['onsite_conversion.total_messaging_connection','onsite_conversion.messaging_first_reply']);
const LINK_CLICK_ACTIONS   = new Set(['link_click']);
const LANDING_PAGE_ACTIONS = new Set(['landing_page_view']);
const VIDEO_VIEW_ACTIONS   = new Set(['video_view']);
const PURCHASE_ACTIONS     = new Set(['offsite_conversion.fb_pixel_purchase']);
const CHECKOUT_ACTIONS     = new Set(['offsite_conversion.fb_pixel_initiate_checkout']);

// ---------- helpers ----------

function parseArgs() {
  const a = process.argv.slice(2);
  const get = (flag) => { const i = a.indexOf(flag); return i >= 0 ? a[i + 1] : null; };
  const has = (flag) => a.includes(flag);
  const accounts = [];
  for (let i = 0; i < a.length; i++) if (a[i] === '--account') accounts.push(a[i + 1]);
  return {
    since:    get('--since'),
    until:    get('--until'),
    preset:   get('--date-preset'),
    update:   get('--update'),
    accounts,
    newSheet: has('--new-sheet'),
    debug:    has('--debug'),
  };
}

function defaultAccounts() {
  const out = [];
  if (process.env.META_ADS_RUGIDO_01) out.push(process.env.META_ADS_RUGIDO_01);
  if (process.env.META_ADS_RUGIDO_02) out.push(process.env.META_ADS_RUGIDO_02);
  return out.map(id => id.startsWith('act_') ? id : `act_${id}`);
}

function getMonthLabel(date = new Date()) {
  return `${MONTHS_LABEL[date.getMonth()]} ${date.getFullYear()}`;
}

function getLocalFilename(since) {
  if (!since) return path.join(DADOS_DIR, 'ads-insights-todos.json');
  const d = new Date(since + 'T12:00:00');
  return path.join(DADOS_DIR, `ads-insights-${MONTHS_PT[d.getMonth()]}-${d.getFullYear()}.json`);
}

function num(v) { return v ? Number(v) : 0; }
function fmtBR(n, dec = 2) { return Number(n).toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec }); }

function sumActions(arr, set) {
  if (!arr) return 0;
  return arr.filter(a => set.has(a.action_type)).reduce((s, a) => s + num(a.value), 0);
}

function costPerAction(arr, set) {
  if (!arr) return 0;
  const found = arr.find(a => set.has(a.action_type));
  return found ? num(found.value) : 0;
}

// ---------- Meta API ----------

async function fetchAccountMeta(accountId) {
  const url = `https://graph.facebook.com/${API_VER}/${accountId}?fields=id,name,currency,timezone_name&access_token=${TOKEN}`;
  const r = await fetch(url);
  const d = await r.json();
  if (d.error) throw new Error(`Conta ${accountId}: ${d.error.message}`);
  return d;
}

async function fetchInsights(accountId, level, { since, until, preset }) {
  const fields = FIELDS_BY_LEVEL[level].join(',');
  const params = new URLSearchParams({
    level, fields, time_increment: '1', limit: '500', access_token: TOKEN,
  });
  if (since) params.set('time_range', JSON.stringify({ since, until: until || new Date().toISOString().slice(0, 10) }));
  else if (preset) params.set('date_preset', preset);

  let url = `https://graph.facebook.com/${API_VER}/${accountId}/insights?${params}`;
  const rows = [];
  while (url) {
    const r = await fetch(url);
    const d = await r.json();
    if (d.error) throw new Error(`Insights ${accountId}/${level}: ${d.error.message}`);
    rows.push(...(d.data || []));
    url = d.paging?.next ?? null;
  }
  return rows;
}

async function fetchCreativesBatch(adIds) {
  const map = {};
  if (!adIds.length) return map;
  const fields = 'creative{thumbnail_url,image_url,instagram_permalink_url,effective_object_story_id,object_story_spec}';
  const chunks = [];
  for (let i = 0; i < adIds.length; i += 50) chunks.push(adIds.slice(i, i + 50));

  for (const chunk of chunks) {
    const url = `https://graph.facebook.com/${API_VER}/?ids=${chunk.join(',')}&fields=${encodeURIComponent(fields)}&access_token=${TOKEN}`;
    const r = await fetch(url);
    const d = await r.json();
    if (d.error) {
      console.error(`  Aviso creative batch: ${d.error.message}`);
      continue;
    }
    for (const id of chunk) {
      const creative = d[id]?.creative;
      if (creative) {
        map[id] = {
          thumbnail_url: creative.thumbnail_url || creative.image_url || '',
          instagram_permalink_url: creative.instagram_permalink_url || '',
        };
      }
    }
  }
  return map;
}

// ---------- transform ----------

function toLineObject(raw, level) {
  const base = {
    data:        raw.date_start,
    account_id:  raw.account_id,
    account_name: raw.account_name,
    spend:       num(raw.spend),
    impressions: num(raw.impressions),
    clicks:      num(raw.clicks),
    reach:       num(raw.reach),
    frequency:   num(raw.frequency),
    ctr:         num(raw.ctr),
    cpc:         num(raw.cpc),
    cpm:         num(raw.cpm),
    leads:               sumActions(raw.actions, LEAD_ACTIONS),
    conversas_whatsapp:  sumActions(raw.actions, WPP_ACTIONS),
    link_clicks:         sumActions(raw.actions, LINK_CLICK_ACTIONS),
    landing_page_views:  sumActions(raw.actions, LANDING_PAGE_ACTIONS),
    video_views_3s:      sumActions(raw.actions, VIDEO_VIEW_ACTIONS),
    purchases:           sumActions(raw.actions, PURCHASE_ACTIONS),
    initiate_checkouts:  sumActions(raw.actions, CHECKOUT_ACTIONS),
    custo_por_lead:      costPerAction(raw.cost_per_action_type, LEAD_ACTIONS),
  };
  if (level === 'campaign' || level === 'adset' || level === 'ad') {
    base.campaign_id = raw.campaign_id; base.campaign_name = raw.campaign_name;
  }
  if (level === 'campaign') base.objective = raw.objective;
  if (level === 'adset' || level === 'ad') {
    base.adset_id = raw.adset_id; base.adset_name = raw.adset_name;
  }
  if (level === 'ad') {
    base.ad_id = raw.ad_id; base.ad_name = raw.ad_name;
    base.video_p50_watched = sumActions(raw.video_p50_watched_actions, new Set(['video_view']));
    base.video_p75_watched = sumActions(raw.video_p75_watched_actions, new Set(['video_view']));
    base.video_p95_watched = sumActions(raw.video_p95_watched_actions, new Set(['video_view']));
  }
  return base;
}

function toSheetRow(line, creativeMap) {
  const cr = creativeMap[line.ad_id] || {};
  return [
    line.data,
    line.ad_name || '',
    line.adset_name || '',
    line.campaign_name || '',
    fmtBR(line.spend),
    line.leads,
    line.link_clicks,
    line.landing_page_views,
    line.impressions,
    line.video_views_3s,
    line.video_p50_watched || 0,
    line.video_p75_watched || 0,
    line.video_p95_watched || 0,
    cr.instagram_permalink_url || '',
    line.purchases,
    line.initiate_checkouts,
    cr.thumbnail_url || '',
  ];
}

// ---------- local JSON ----------

function saveLocalJson(byLevel, since, accounts) {
  const filepath = getLocalFilename(since);
  const sinceDate = since ? new Date(since + 'T12:00:00') : null;

  let existing = { account: [], campaign: [], adset: [], ad: [] };
  if (fs.existsSync(filepath)) {
    try { existing = { ...existing, ...(JSON.parse(fs.readFileSync(filepath, 'utf8')).linhas || {}) }; } catch {}
  }

  const idKey = { account: 'account_id', campaign: 'campaign_id', adset: 'adset_id', ad: 'ad_id' };
  const merged = {};
  let totalNovos = 0;
  for (const lv of LEVELS) {
    const k = idKey[lv];
    const seen = new Set(existing[lv].map(r => `${r.data}|${r[k]}`));
    const novos = (byLevel[lv] || []).filter(r => !seen.has(`${r.data}|${r[k]}`));
    merged[lv] = [...existing[lv], ...novos];
    totalNovos += novos.length;
  }

  const totais = (merged.account || []).reduce((acc, l) => ({
    spend: acc.spend + l.spend,
    impressions: acc.impressions + l.impressions,
    clicks: acc.clicks + l.clicks,
    leads: acc.leads + l.leads,
    conversas_whatsapp: acc.conversas_whatsapp + l.conversas_whatsapp,
  }), { spend: 0, impressions: 0, clicks: 0, leads: 0, conversas_whatsapp: 0 });

  const output = {
    meta: {
      periodo:       sinceDate ? getMonthLabel(sinceDate) : 'Todos',
      atualizado_em: new Date().toISOString().slice(0, 19).replace('T', ' '),
      contas:        accounts,
      totais,
    },
    linhas: merged,
  };

  fs.writeFileSync(filepath, JSON.stringify(output, null, 2), 'utf8');
  return { filepath, totalNovos, totais };
}

// ---------- Google Sheets ----------

function getAuth() {
  const auth = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  return auth;
}

async function createSheet(title) {
  const sheets = google.sheets({ version: 'v4', auth: getAuth() });
  const res = await sheets.spreadsheets.create({
    requestBody: {
      properties: { title },
      sheets: [{ properties: { title: SHEET_TAB_NAME, gridProperties: { frozenRowCount: 1 } } }],
    },
  });
  const sheet = res.data.sheets[0];
  return { spreadsheetId: res.data.spreadsheetId, sheetId: sheet.properties.sheetId, url: res.data.spreadsheetUrl };
}

async function writeFresh(spreadsheetId, sheetId, rows) {
  const sheets = google.sheets({ version: 'v4', auth: getAuth() });
  await sheets.spreadsheets.values.update({
    spreadsheetId, range: `${SHEET_TAB_NAME}!A1`, valueInputOption: 'USER_ENTERED',
    requestBody: { values: [SHEET_HEADERS, ...rows] },
  });
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          repeatCell: {
            range: { sheetId, startRowIndex: 0, endRowIndex: 1 },
            cell: { userEnteredFormat: {
              backgroundColor: { red: 0.122, green: 0.122, blue: 0.122 },
              textFormat: { bold: true, foregroundColor: { red: 1, green: 0.671, blue: 0.224 } },
              horizontalAlignment: 'CENTER',
            }},
            fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
          },
        },
        { autoResizeDimensions: { dimensions: { sheetId, dimension: 'COLUMNS', startIndex: 0, endIndex: SHEET_HEADERS.length } } },
      ],
    },
  });
}

async function readExistingKeys(spreadsheetId) {
  const sheets = google.sheets({ version: 'v4', auth: getAuth() });
  const tryTabs = [SHEET_TAB_NAME];
  try {
    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    for (const s of meta.data.sheets) {
      const t = s.properties.title;
      if (!tryTabs.includes(t)) tryTabs.push(t);
    }
  } catch {}

  for (const tab of tryTabs) {
    try {
      const res = await sheets.spreadsheets.values.get({ spreadsheetId, range: `${tab}!A2:B` });
      const keys = new Set();
      for (const r of res.data.values || []) {
        if (r[0] && r[1]) keys.add(`${r[0]}|${r[1]}`);
      }
      return { keys, tab };
    } catch {}
  }
  return { keys: new Set(), tab: SHEET_TAB_NAME };
}

async function appendRows(spreadsheetId, tab, rows) {
  if (!rows.length) return;
  const sheets = google.sheets({ version: 'v4', auth: getAuth() });
  await sheets.spreadsheets.values.append({
    spreadsheetId, range: `${tab}!A1`, valueInputOption: 'USER_ENTERED',
    requestBody: { values: rows },
  });
}

// ---------- main ----------

async function main() {
  const args = parseArgs();
  if (!TOKEN) { console.error('META_PAGE_TOKEN não encontrado no .env'); process.exit(1); }
  if (!args.since && !args.preset) { console.error('Informe --since YYYY-MM-DD ou --date-preset NAME'); process.exit(1); }

  const accounts = args.accounts.length ? args.accounts.map(id => id.startsWith('act_') ? id : `act_${id}`) : defaultAccounts();
  if (!accounts.length) { console.error('Nenhuma conta. Defina META_ADS_RUGIDO_01 no .env ou use --account act_ID'); process.exit(1); }

  const periodLabel = args.since ? `${args.since} → ${args.until || 'hoje'}` : args.preset;
  console.log(`Buscando insights — ${periodLabel} — ${accounts.length} conta(s)`);

  const accountMeta = {};
  for (const acc of accounts) {
    try {
      const m = await fetchAccountMeta(acc);
      accountMeta[acc.replace('act_', '')] = m;
    } catch (e) {
      console.error(`✗ ${acc}: ${e.message}`);
    }
  }

  const byLevel = { account: [], campaign: [], adset: [], ad: [] };
  for (const acc of accounts) {
    const accLabel = accountMeta[acc.replace('act_', '')]?.name || acc;
    for (const lv of LEVELS) {
      const raw = await fetchInsights(acc, lv, args);
      const lines = raw.map(r => toLineObject(r, lv));
      byLevel[lv].push(...lines);
      console.log(`  ${accLabel} / ${lv}: ${lines.length} linha(s)`);
    }
  }

  if (!byLevel.ad.length) { console.log('\nSem dados de anúncios no período.'); return; }

  const uniqueAdIds = [...new Set(byLevel.ad.map(l => l.ad_id))];
  console.log(`\nBuscando creative de ${uniqueAdIds.length} anúncio(s) único(s)...`);
  const creativeMap = await fetchCreativesBatch(uniqueAdIds);
  console.log(`  ${Object.keys(creativeMap).length} creative(s) recuperado(s)`);

  const totals = (byLevel.account || []).reduce((a, l) => ({
    spend: a.spend + l.spend,
    impressions: a.impressions + l.impressions,
    clicks: a.clicks + l.clicks,
    leads: a.leads + l.leads,
  }), { spend: 0, impressions: 0, clicks: 0, leads: 0 });
  if (byLevel.account.length) {
    console.log(`\nTotais (período): R$ ${fmtBR(totals.spend)} | ${totals.impressions} impressões | ${totals.clicks} cliques | ${totals.leads} leads`);
  }

  if (args.debug) {
    console.log('\nDebug — primeiras 3 linhas da planilha (nível ad):');
    byLevel.ad.slice(0, 3).forEach(l => console.log(toSheetRow(l, creativeMap).join(' | ')));
    return;
  }

  const local = saveLocalJson(byLevel, args.since, accounts);
  const localRel = path.relative(path.resolve(__dirname, '..'), local.filepath);
  console.log(`\nLocal: ${localRel} (+${local.totalNovos} linha(s) nova(s))`);

  const adRows = byLevel.ad.map(l => toSheetRow(l, creativeMap));

  if (args.update) {
    console.log('\nLendo chaves existentes na planilha...');
    const { keys, tab } = await readExistingKeys(args.update);
    const novos = adRows.filter(r => !keys.has(`${r[0]}|${r[1]}`));
    await appendRows(args.update, tab, novos);
    console.log(`✓ ${novos.length} linha(s) nova(s) adicionada(s) (${adRows.length - novos.length} já existiam)`);
    console.log(`Planilha: https://docs.google.com/spreadsheets/d/${args.update}/edit`);
    return;
  }

  if (args.newSheet) {
    const sinceDate = args.since ? new Date(args.since + 'T12:00:00') : new Date();
    const title = `Tráfego | Meta Ads | Rugido | ${getMonthLabel(sinceDate)}`;
    console.log(`\nCriando planilha "${title}"...`);
    const { spreadsheetId, sheetId, url } = await createSheet(title);
    await writeFresh(spreadsheetId, sheetId, adRows);
    console.log(`✓ ${adRows.length} linha(s) gravada(s) em "${SHEET_TAB_NAME}"`);
    console.log(`Planilha: ${url}`);
    console.log(`Salve no .env:  META_ADS_SHEET_${MONTHS_PT[sinceDate.getMonth()].toUpperCase()}_${sinceDate.getFullYear()}=${spreadsheetId}`);
    return;
  }
}

main().catch(err => { console.error('Erro:', err.message); process.exit(1); });
