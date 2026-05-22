---
name: meta-ads-insights
description: Extrai dados de tráfego do Meta Ads (gasto, impressões, cliques, leads, vídeo, conversões pixel) por dia × anúncio. Salva em aba única no Google Sheets pra alimentar dashboards e mantém JSON local nos 4 níveis hierárquicos.
---

# Meta Ads Insights — Extração de Dados de Tráfego (Rugido)

Script: `scripts/meta-ads-insights.js`

**Variáveis de ambiente (.env):**
- `META_PAGE_TOKEN` — User token com `ads_management` + `business_management`
- `META_ADS_RUGIDO_01` — ID da conta de anúncio principal (sem o prefixo `act_`)
- `META_ADS_RUGIDO_02` — ID da segunda conta (opcional — descomente no `.env` se existir)
- `META_ADS_SHEET_MES_ANO` — planilha mensal corrente (atualize ao criar nova)

> **Setup inicial:** preencha `META_PAGE_TOKEN` e `META_ADS_RUGIDO_01` no `.env` antes de usar.
> Token: acesse developers.facebook.com/tools/explorer → gere com `ads_management` + `business_management`.
> ID da conta: acesse business.facebook.com/adsmanager → a URL contém o número da conta.

Por padrão a skill consulta as contas definidas em `META_ADS_RUGIDO_01/02`. Outras contas podem ser passadas via `--account act_ID`.

---

## Quando usar

Quando o usuário pedir para:
- Ver gasto / investimento em Meta Ads
- Comparar performance de anúncios
- Calcular CPL, CTR, taxa de view de vídeo, conversões pixel
- Atualizar dashboard de tráfego
- Ver quanto custou X leads
- Snapshot mensal de performance

---

## Interpretação do pedido

| O usuário diz | Comando |
|---|---|
| "puxa o tráfego de maio" | `--since 2026-05-01 --new-sheet` |
| "atualiza o dashboard de tráfego" | `--update $META_ADS_SHEET_MAIO_2026 --since 2026-05-01` |
| "quanto investimos essa semana" | `--date-preset last_7d --debug` |
| "performance dos últimos 30 dias" | `--date-preset last_30d --debug` |
| "qual anúncio gerou mais lead em maio" | `--since 2026-05-01 --debug` (depois ler o JSON em `dados/`) |

Sempre calcular as datas com base em `currentDate` do contexto.

---

## Date presets aceitos

`today`, `yesterday`, `this_week_mon_today`, `last_7d`, `last_14d`, `last_28d`, `last_30d`, `last_90d`, `this_month`, `last_month`, `maximum`. Use `--date-preset NOME` em vez de `--since/--until`.

---

## Layout da planilha (aba única)

Uma planilha por mês: `Tráfego | Meta Ads | Rugido | [Mês] [Ano]` — aba `Anúncios` com granularidade dia × anúncio.

**Colunas (na ordem):**
1. Date
2. Ad Name
3. Adset Name
4. Campaign Name
5. Spend (Cost, Amount Spent)
6. Action Leads
7. Action Link Clicks
8. Action Landing Page View
9. Impressions
10. Action 3s Video Views
11. Video 50 Percent Watched Actions
12. Video 75 Percent Watched Actions
13. Video 95 Percent Watched Actions
14. Instagram Permalink URL
15. Action FB Pixel Purchase (Offsite Conversion)
16. Action FB Pixel Initiate Checkout (Offsite Conversion)
17. Thumbnail URL 02

Cabeçalho formatado (fundo escuro, texto laranja, negrito), linha 1 congelada, colunas auto-ajustadas.

---

## Fluxo de execução

### 1. Snapshot mensal (planilha nova)

```bash
node scripts/meta-ads-insights.js --since 2026-05-01 --new-sheet
```

Cria planilha `Tráfego | Meta Ads | Rugido | [Mês] [Ano]`. Ao final, imprime um `META_ADS_SHEET_MES_ANO=...` pra adicionar no `.env`.

### 2. Atualizar planilha existente (sem duplicar)

```bash
node scripts/meta-ads-insights.js --update SHEET_ID --since 2026-05-01
```

Lê chaves `Date + Ad Name` existentes e adiciona só linhas novas.

### 3. Só JSON local (sem Sheets)

```bash
node scripts/meta-ads-insights.js --since 2026-05-01
```

Salva em `dados/ads-insights-{mes}-{ano}.json` mantendo os 4 níveis hierárquicos.

### 4. Só visualizar (sem gravar)

```bash
node scripts/meta-ads-insights.js --since 2026-05-22 --debug
```

### 5. Conta específica

```bash
node scripts/meta-ads-insights.js --account act_ID_DA_CONTA --since 2026-05-01
```

---

## Resposta ao usuário

```
✓ [N] linhas — [período] — R$ [GASTO] / [LEADS] leads / R$ [CPL]/lead
Local: dados/ads-insights-[mes]-[ano].json
Planilha: [URL clicável]  (se houver operação de sheet)
```

Se erro de token, orientar:
> O token expirou. Gere um novo em developers.facebook.com/tools/explorer com `ads_management` + `business_management` e atualize `META_PAGE_TOKEN` no `.env`.

---

## Instalação (primeira vez)

```bash
cd scripts && npm install
```

---

## Detalhes técnicos

- API: Meta Marketing API v21.0
- Endpoint principal: `GET /{account_id}/insights?level=ad&time_increment=1&fields=...`
- `time_increment=1` traz uma linha por dia × anúncio
- Token expira em ~60 dias — se der erro 190, renovar
- Auth Google Sheets: OAuth2 via `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`
