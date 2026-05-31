#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('dotenv').config({ path: path.resolve(__dirname, '../.env.socio-estrategico'), override: true });

const ROOT = path.resolve(__dirname, '..');
const ADS_DIR = path.resolve(
  ROOT,
  'clientes/max-satiro/socio-estrategico/funil-live-semanal/referencias/anuncios/ads-max__2026-05-25'
);
const MANIFEST_PATH = path.join(ADS_DIR, 'meta-ads__live-semanal-v2__2026-05-30.json');
const VIDEO_UPLOADS_PATH = path.join(ADS_DIR, 'meta-video-uploads__2026-05-30.json');
const OUT_DIR = path.join(ADS_DIR, 'meta-api');

const API_VERSION = process.env.META_SOCIO_ESTRATEGICO_GRAPH_VERSION || 'v21.0';
const GRAPH_BASE = `https://graph.facebook.com/${API_VERSION}`;
const TOKEN = process.env.META_SOCIO_ESTRATEGICO_ACCESS_TOKEN;
const PAGE_ACCESS_TOKEN_FROM_ENV = process.env.META_SOCIO_ESTRATEGICO_PAGE_ACCESS_TOKEN;
const AD_ACCOUNT_ID = stripAct(process.env.META_SOCIO_ESTRATEGICO_AD_ACCOUNT_ID || '');
const AD_ACCOUNT = `act_${AD_ACCOUNT_ID}`;
const BUSINESS_ID = process.env.META_SOCIO_ESTRATEGICO_BUSINESS_ID;
const PAGE_ID = process.env.META_SOCIO_ESTRATEGICO_PAGE_ID;
const USE_INSTAGRAM = !process.argv.includes('--no-instagram');
const INSTAGRAM_ID = USE_INSTAGRAM ? process.env.META_SOCIO_ESTRATEGICO_INSTAGRAM_ID : '';
const LANDING_URL = process.env.META_SOCIO_ESTRATEGICO_LANDING_URL;
const DAILY_BUDGET_CENTS = Number(process.env.META_SOCIO_ESTRATEGICO_DAILY_BUDGET_CENTS || 5000);
const PIXEL_ID_FROM_ENV = process.env.META_SOCIO_ESTRATEGICO_PIXEL_ID;

const REQUIRED_SCOPES = [
  'ads_management',
  'business_management',
  'pages_show_list',
  'pages_read_engagement',
  'pages_manage_ads',
];
const INSTAGRAM_REQUIRED_SCOPES = ['instagram_basic'];

const command = process.argv[2] || 'validate';
const shouldCreate = command === 'create';

main().catch(error => {
  const clean = cleanError(error);
  console.error(JSON.stringify(clean, null, 2));
  process.exit(1);
});

async function main() {
  ensureConfig();
  ensureDir(OUT_DIR);

  const manifest = readJson(MANIFEST_PATH);
  const uploads = readJson(VIDEO_UPLOADS_PATH);
  const ads = manifest.ads.map(ad => {
    const upload = uploads.videos.find(item => item.file === ad.video);
    if (!upload?.video_id) throw new Error(`Video sem upload_id no manifesto: ${ad.video}`);
    return {
      ...ad,
      video_id: upload.video_id,
      thumbnail_image_hash: upload.thumbnail_image_hash || upload.image_hash || null,
    };
  });

  const validation = await validateSetup(ads);
  const validationPath = writeReport('validacao', validation);
  console.log(`VALIDATION_REPORT=${validationPath}`);

  if (!validation.ready_to_create) {
    throw new Error(validation.blockers.join(' | '));
  }

  if (!shouldCreate) {
    console.log('READY_TO_CREATE=true');
    return;
  }

  const creation = await createPausedStructure(ads, validation);
  const creationPath = writeReport('criacao', creation);
  console.log(`CREATION_REPORT=${creationPath}`);
  console.log(JSON.stringify({
    campaign_id: creation.campaign_id,
    adset_ids: creation.adset_ids,
    creative_ids: creation.creative_ids,
    ad_ids: creation.ad_ids,
    status: creation.status,
    page_id: creation.page_id_final,
    links_finais: creation.links_finais,
  }, null, 2));
}

async function validateSetup(ads) {
  const blockers = [];
  const warnings = [];

  const me = await graphGet('/me', { fields: 'id,name' });
  const debug = await graphGet('/debug_token', {
    input_token: TOKEN,
    access_token: TOKEN,
  }, { skipToken: true });

  const scopes = new Set(debug?.data?.scopes || []);
  const requiredScopes = INSTAGRAM_ID
    ? [...REQUIRED_SCOPES, ...INSTAGRAM_REQUIRED_SCOPES]
    : REQUIRED_SCOPES;
  const missingScopes = requiredScopes.filter(scope => !scopes.has(scope));
  if (!debug?.data?.is_valid) blockers.push('Token invalido no /debug_token.');
  if (missingScopes.length) blockers.push(`Permissoes ausentes no token: ${missingScopes.join(', ')}`);

  const accounts = await graphGet('/me/adaccounts', {
    fields: 'id,account_id,name,account_status,currency,timezone_name,business{id,name}',
    limit: 200,
  });
  const accessibleAccounts = collectData(accounts);
  const chosenAccountInList = accessibleAccounts.some(account => stripAct(account.id) === AD_ACCOUNT_ID);
  if (!chosenAccountInList) blockers.push(`Conta ${AD_ACCOUNT} nao apareceu em /me/adaccounts.`);

  const adAccount = await graphGet(`/${AD_ACCOUNT}`, {
    fields: 'id,account_id,name,account_status,currency,timezone_name,disable_reason,business{id,name},capabilities',
  });
  if (String(adAccount.account_status) !== '1') {
    blockers.push(`Conta ${AD_ACCOUNT} nao esta ativa. account_status=${adAccount.account_status}`);
  }
  if (BUSINESS_ID && adAccount.business?.id && adAccount.business.id !== BUSINESS_ID) {
    blockers.push(`Conta pertence ao BM ${adAccount.business.id}, diferente do BM informado ${BUSINESS_ID}.`);
  }

  let business = null;
  if (BUSINESS_ID) {
    business = await graphGet(`/${BUSINESS_ID}`, { fields: 'id,name' });
  }

  const pages = await graphGet('/me/accounts', {
    fields: 'id,name,access_token,tasks,instagram_business_account{id,username},connected_instagram_account{id,username}',
    limit: 200,
  });
  const accessiblePages = collectData(pages);
  const pageFromList = accessiblePages.find(page => page.id === PAGE_ID);
  if (!pageFromList) blockers.push(`Pagina ${PAGE_ID} nao apareceu em /me/accounts.`);

  const page = await graphGet(`/${PAGE_ID}`, {
    fields: 'id,name,link,is_published,can_post,instagram_business_account{id,username},connected_instagram_account{id,username}',
  });
  if (page.is_published === false) blockers.push(`Pagina ${PAGE_ID} nao esta publicada.`);

  const pageAccessToken = PAGE_ACCESS_TOKEN_FROM_ENV || pageFromList?.access_token || null;
  let pageAccessTokenDebug = null;
  if (pageAccessToken) {
    pageAccessTokenDebug = await graphGet('/debug_token', {
      input_token: pageAccessToken,
      access_token: TOKEN,
    }, { skipToken: true });
  }
  let pageViaPageToken = null;
  if (pageAccessToken) {
    pageViaPageToken = await graphGet(`/${PAGE_ID}`, {
      fields: 'id,name,instagram_business_account{id,username},connected_instagram_account{id,username}',
    }, { accessToken: pageAccessToken });
  }

  const instagram = await validateInstagram({
    page,
    pageFromList,
    pageViaPageToken,
    scopes,
    blockers,
    warnings,
  });

  const pixelsResponse = await graphGet(`/${AD_ACCOUNT}/adspixels`, {
    fields: 'id,name,last_fired_time,is_created_by_business',
    limit: 100,
  });
  const pixels = collectData(pixelsResponse);
  const pixel = choosePixel(pixels);
  if (!pixel?.id) {
    blockers.push('Nenhum pixel/dataset acessivel na conta para objetivo de lead no site.');
  }

  const videos = [];
  for (const ad of ads) {
    const video = await graphGet(`/${ad.video_id}`, {
      fields: 'id,title,status,created_time,thumbnails.limit(5){uri,is_preferred}',
    });
    const thumbnails = collectData(video.thumbnails || {});
    const thumbnail = pickThumbnail(thumbnails);
    if (!thumbnail?.uri) blockers.push(`Video ${ad.video} sem thumbnail acessivel para criativo.`);
    if (!ad.thumbnail_image_hash) {
      blockers.push(`Video ${ad.video} sem thumbnail_image_hash propria. Extraia uma imagem local, suba em /${AD_ACCOUNT}/adimages e use image_hash em video_data.`);
    }
    videos.push({
      file: ad.video,
      video_id: ad.video_id,
      status: video.status,
      thumbnail_uri: thumbnail?.uri || null,
      thumbnail_image_hash: ad.thumbnail_image_hash,
    });
  }

  let creativeValidation = null;
  if (!blockers.length) {
    creativeValidation = await validateCreative(ads[0]);
    if (!creativeValidation.ok) blockers.push(creativeValidation.error.message);
  }

  return {
    generated_at: new Date().toISOString(),
    api_version: API_VERSION,
    config: {
      ad_account_id: AD_ACCOUNT,
      business_id: BUSINESS_ID,
      page_id: PAGE_ID,
      instagram_id: INSTAGRAM_ID,
      landing_url: LANDING_URL,
      daily_budget_cents: DAILY_BUDGET_CENTS,
      objective: 'OUTCOME_LEADS',
      optimization_goal: 'OFFSITE_CONVERSIONS',
      billing_event: 'IMPRESSIONS',
      status_planejado: 'PAUSED',
      publico: 'BR aberto, 18-65, todos os generos, sem interesses',
    },
    checks: {
      me,
      debug_token: {
        app_id: debug?.data?.app_id,
        type: debug?.data?.type,
        application: debug?.data?.application,
        data_access_expires_at: debug?.data?.data_access_expires_at,
        expires_at: debug?.data?.expires_at,
        is_valid: debug?.data?.is_valid,
        scopes: debug?.data?.scopes || [],
        missing_scopes: missingScopes,
      },
      business,
      accessible_accounts: accessibleAccounts,
      chosen_account: adAccount,
      accessible_pages: accessiblePages,
      chosen_page: page,
      page_access_token_debug: pageAccessTokenDebug ? {
        app_id: pageAccessTokenDebug?.data?.app_id,
        type: pageAccessTokenDebug?.data?.type,
        application: pageAccessTokenDebug?.data?.application,
        data_access_expires_at: pageAccessTokenDebug?.data?.data_access_expires_at,
        expires_at: pageAccessTokenDebug?.data?.expires_at,
        is_valid: pageAccessTokenDebug?.data?.is_valid,
        scopes: pageAccessTokenDebug?.data?.scopes || [],
      } : null,
      chosen_page_via_page_token: pageViaPageToken,
      instagram,
      pixels,
      selected_pixel: pixel || null,
      videos,
      creative_validation: creativeValidation,
    },
    blockers,
    warnings,
    ready_to_create: blockers.length === 0,
  };
}

async function validateInstagram({ page, pageFromList, pageViaPageToken, scopes, blockers, warnings }) {
  const pageIg = pageViaPageToken?.instagram_business_account ||
    pageViaPageToken?.connected_instagram_account ||
    page?.instagram_business_account ||
    page?.connected_instagram_account ||
    pageFromList?.instagram_business_account ||
    pageFromList?.connected_instagram_account ||
    null;

  if (!INSTAGRAM_ID) {
    warnings.push('Nenhum Instagram ID informado; criativos serao page-backed.');
    return {
      informed_id: null,
      page_connected_instagram: pageIg,
      page_access_token_available: Boolean(pageFromList?.access_token),
      usable: false,
    };
  }

  if (!scopes.has('instagram_basic')) {
    blockers.push('Token sem instagram_basic; a Meta exige essa permissao para ler instagram_business_account da Pagina.');
  }

  if (!pageIg?.id) {
    blockers.push('A Pagina nao retornou instagram_business_account/connected_instagram_account. Corrigir vinculo do Instagram na Pagina/BM ou gerar token com instagram_basic.');
    return {
      informed_id: INSTAGRAM_ID,
      page_connected_instagram: null,
      page_access_token_available: Boolean(pageFromList?.access_token),
      direct_lookup: null,
      usable: false,
    };
  }

  let direct = null;
  try {
    direct = await graphGet(`/${pageIg.id}`, { fields: 'id,username' });
  } catch (error) {
    warnings.push(`Lookup direto do Instagram falhou, mas a Pagina retornou o ID: ${cleanError(error).message}`);
  }

  if (pageIg.id !== INSTAGRAM_ID) {
    blockers.push(`Instagram informado ${INSTAGRAM_ID} difere do Instagram conectado na Pagina ${pageIg.id}.`);
  }

  return {
    informed_id: INSTAGRAM_ID,
    page_connected_instagram: pageIg,
    page_access_token_available: Boolean(pageFromList?.access_token),
    direct_lookup: direct,
    usable: pageIg.id === INSTAGRAM_ID,
  };
}

async function validateCreative(ad) {
  try {
    const result = await graphPost(`/${AD_ACCOUNT}/adcreatives`, {
      name: `[VALIDATE] ${ad.ad_name}`,
      object_story_spec: buildObjectStorySpec(ad),
      execution_options: ['validate_only'],
    });
    return { ok: true, result };
  } catch (error) {
    return { ok: false, error: cleanError(error) };
  }
}

async function createPausedStructure(ads, validation) {
  const selectedPixel = validation.checks.selected_pixel;
  const videos = new Map(validation.checks.videos.map(video => [video.file, video]));
  const created = {
    generated_at: new Date().toISOString(),
    api_version: API_VERSION,
    status: 'PAUSED',
    page_id_final: PAGE_ID,
    instagram_id_final: INSTAGRAM_ID || null,
    pixel_id_final: selectedPixel.id,
    landing_url: LANDING_URL,
    campaign_id: null,
    adset_ids: [],
    creative_ids: [],
    ad_ids: [],
    links_finais: [],
    objects: {
      campaign: null,
      adsets: [],
      creatives: [],
      ads: [],
    },
  };

  const campaign = await graphPost(`/${AD_ACCOUNT}/campaigns`, {
    name: `MAX | Live Semanal V2 | Leads Site | ${today()}`,
    objective: 'OUTCOME_LEADS',
    buying_type: 'AUCTION',
    status: 'PAUSED',
    special_ad_categories: [],
  });
  created.campaign_id = campaign.id;
  created.objects.campaign = campaign;

  const adset = await graphPost(`/${AD_ACCOUNT}/adsets`, {
    name: `BR aberto | Leads site | R$50 dia | ${today()}`,
    campaign_id: campaign.id,
    daily_budget: DAILY_BUDGET_CENTS,
    billing_event: 'IMPRESSIONS',
    optimization_goal: 'OFFSITE_CONVERSIONS',
    bid_strategy: 'LOWEST_COST_WITHOUT_CAP',
    destination_type: 'WEBSITE',
    promoted_object: {
      pixel_id: selectedPixel.id,
      custom_event_type: 'LEAD',
    },
    targeting: {
      geo_locations: { countries: ['BR'] },
      age_min: 18,
      age_max: 65,
    },
    status: 'PAUSED',
  });
  created.adset_ids.push(adset.id);
  created.objects.adsets.push(adset);

  for (const ad of ads) {
    const video = videos.get(ad.video);
    const creative = await graphPost(`/${AD_ACCOUNT}/adcreatives`, {
      name: `CRIATIVO | ${ad.ad_name}`,
      object_story_spec: buildObjectStorySpec(ad),
    });
    created.creative_ids.push(creative.id);
    created.objects.creatives.push({ ...creative, source_video: ad.video, video_id: ad.video_id });

    const createdAd = await graphPost(`/${AD_ACCOUNT}/ads`, {
      name: `AD | ${ad.ad_name}`,
      adset_id: adset.id,
      creative: { creative_id: creative.id },
      status: 'PAUSED',
    });
    created.ad_ids.push(createdAd.id);
    created.objects.ads.push({ ...createdAd, source_video: ad.video });
    created.links_finais.push({ ad_name: ad.ad_name, link: LANDING_URL });
  }

  created.validation_after_create = await validateCreatedObjects(created);
  return created;
}

async function validateCreatedObjects(created) {
  const campaign = await graphGet(`/${created.campaign_id}`, {
    fields: 'id,name,objective,status,effective_status,special_ad_categories',
  });
  const adsets = [];
  for (const id of created.adset_ids) {
    adsets.push(await graphGet(`/${id}`, {
      fields: 'id,name,status,effective_status,daily_budget,billing_event,optimization_goal,destination_type,promoted_object,targeting',
    }));
  }
  const ads = [];
  for (const id of created.ad_ids) {
    ads.push(await graphGet(`/${id}`, {
      fields: 'id,name,status,effective_status,creative{id,name}',
    }));
  }
  const creatives = [];
  for (const id of created.creative_ids) {
    creatives.push(await graphGet(`/${id}`, {
      fields: 'id,name,object_story_spec',
    }));
  }
  return { campaign, adsets, ads, creatives };
}

function buildObjectStorySpec(ad) {
  const spec = {
    page_id: PAGE_ID,
    video_data: {
      video_id: ad.video_id,
      image_hash: ad.thumbnail_image_hash,
      message: ad.primary_text,
      title: ad.headline,
      link_description: ad.description,
      call_to_action: {
        type: ad.cta_type || 'SIGN_UP',
        value: { link: LANDING_URL },
      },
    },
  };

  if (INSTAGRAM_ID) spec.instagram_user_id = INSTAGRAM_ID;
  return spec;
}

async function graphGet(edge, params = {}, options = {}) {
  return graphRequest('GET', edge, params, options);
}

async function graphPost(edge, params = {}) {
  return graphRequest('POST', edge, params);
}

async function graphRequest(method, edge, params = {}, options = {}) {
  const url = new URL(`${GRAPH_BASE}${edge}`);
  const body = new URLSearchParams();
  const addParam = (target, key, value) => {
    if (value === undefined || value === null) return;
    if (typeof value === 'object') target.append(key, JSON.stringify(value));
    else target.append(key, String(value));
  };

  if (method === 'GET') {
    for (const [key, value] of Object.entries(params)) addParam(url.searchParams, key, value);
    if (!options.skipToken) url.searchParams.set('access_token', options.accessToken || TOKEN);
  } else {
    for (const [key, value] of Object.entries(params)) addParam(body, key, value);
    body.set('access_token', options.accessToken || TOKEN);
  }

  const response = await fetch(url, method === 'GET' ? { method } : { method, body });
  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }

  if (!response.ok || data.error) {
    const error = new Error(data?.error?.message || `Graph API HTTP ${response.status}`);
    error.graph = data.error || data;
    error.status = response.status;
    error.edge = edge;
    throw error;
  }

  return data;
}

function choosePixel(pixels) {
  if (!pixels.length) return null;
  if (PIXEL_ID_FROM_ENV) return pixels.find(pixel => pixel.id === PIXEL_ID_FROM_ENV) || null;
  const known = pixels.find(pixel => pixel.id === '1523046889398200');
  if (known) return known;
  const fired = pixels
    .filter(pixel => pixel.last_fired_time)
    .sort((a, b) => String(b.last_fired_time).localeCompare(String(a.last_fired_time)));
  return fired[0] || pixels[0];
}

function pickThumbnail(thumbnails) {
  return thumbnails.find(item => item.is_preferred) || thumbnails[0] || null;
}

function collectData(response) {
  return Array.isArray(response?.data) ? response.data : [];
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeReport(kind, data) {
  const file = path.join(OUT_DIR, `meta-${kind}__live-semanal-v2__${timestamp()}.json`);
  fs.writeFileSync(file, `${JSON.stringify(redact(data), null, 2)}\n`);
  return file;
}

function ensureConfig() {
  const missing = [];
  for (const [key, value] of Object.entries({
    META_SOCIO_ESTRATEGICO_ACCESS_TOKEN: TOKEN,
    META_SOCIO_ESTRATEGICO_AD_ACCOUNT_ID: AD_ACCOUNT_ID,
    META_SOCIO_ESTRATEGICO_BUSINESS_ID: BUSINESS_ID,
    META_SOCIO_ESTRATEGICO_PAGE_ID: PAGE_ID,
    META_SOCIO_ESTRATEGICO_LANDING_URL: LANDING_URL,
  })) {
    if (!value) missing.push(key);
  }
  if (missing.length) throw new Error(`Variaveis ausentes no .env: ${missing.join(', ')}`);
  if (!Number.isFinite(DAILY_BUDGET_CENTS) || DAILY_BUDGET_CENTS <= 0) {
    throw new Error('META_SOCIO_ESTRATEGICO_DAILY_BUDGET_CENTS invalido.');
  }
}

function stripAct(value) {
  return String(value || '').replace(/^act_/, '').trim();
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function redact(value) {
  if (Array.isArray(value)) return value.map(redact);
  if (!value || typeof value !== 'object') return value;
  const out = {};
  for (const [key, item] of Object.entries(value)) {
    const normalized = key.toLowerCase();
    if (
      normalized === 'token' ||
      normalized === 'access_token' ||
      normalized.endsWith('_access_token') ||
      normalized.includes('secret')
    ) {
      out[key] = '[REDACTED]';
    }
    else out[key] = redact(item);
  }
  return out;
}

function cleanError(error) {
  const graph = error.graph || {};
  const message = [
    error.message,
    graph.error_user_title,
    graph.error_user_msg,
  ].filter(Boolean).join(' — ');

  return redact({
    message,
    status: error.status,
    edge: error.edge,
    graph_error: graph,
  });
}
