# Grupo Rugido — Codex OS

## Como atuar neste workspace

Responda sempre em portugues BR, com tom direto, breve e pratico.
Este workspace e a diretoria comercial do Grupo Rugido, uma consultoria B2B em Engenharia de Receita.

Antes de executar tarefas de negocio, leia silenciosamente os arquivos de memoria quando existirem:

1. `_contexto/empresa.md` — negocio, oferta, clientes, ferramentas e operacao
2. `_contexto/preferencias.md` — tom de voz, formato e estilo
3. `_contexto/estrategia.md` — foco atual e prioridades

Para tarefas visuais como proposta, slide, carrossel, landing page ou identidade, consulte tambem `marca/design-guide.md`.

Nao liste esses arquivos na resposta final. Use o contexto naturalmente.

## Estrutura principal

- `_contexto/` — memoria do sistema. Nao apagar.
- `clientes/` — clientes ativos, briefings e propostas.
- `briefings/` — briefings de clientes novos.
- `propostas/` — propostas comerciais.
- `conteudo/` — ativos comerciais externos.
- `comercial/pre-vendas/` — operacao e rituais de SDR.
- `comercial/vendas/` — operacao e rituais de Closers.
- `marketing/` — campanhas, conteudo e midia paga.
- `entrega/` — sucesso do cliente.
- `lideranca/` — rituais e decisoes estrategicas.
- `financeiro/` — relatorios, caixa e orcamentos.
- `rh/` — processos seletivos, onboarding e documentos de equipe.
- `operacoes/` — processos internos e SOPs.
- `dados/` — arquivos para analise.
- `marca/` — identidade visual.
- `templates/` — modelos reutilizaveis.
- `scripts/` — automacoes Node/Bash.
- `tarefas.md` — tarefas correntes.

## Skills e comandos locais

Este projeto veio de um fluxo Claude Code. As instrucoes reaproveitaveis ficam em:

- `.claude/skills/`
- `.claude/commands/`

As skills tambem foram espelhadas no formato nativo do Codex em `~/.codex/skills/rugido-*`.
Em novas sessoes do Codex, prefira essas skills nativas quando elas aparecerem na lista de skills disponiveis. A pasta `.claude/skills/` fica como origem historica e referencia do projeto.

Quando o usuario pedir algo que parece coberto por uma dessas skills ou commands, use a skill nativa `rugido-*` correspondente ou leia o arquivo local em `.claude/skills/`. Nao execute nada destrutivo sem necessidade.

Skills nativas instaladas:

- `rugido-meta-ads-insights` — extrai insights de Meta Ads para JSON local e Google Sheets.
- `rugido-google-sheets` — interage com Google Sheets via credenciais do `.env`.
- `rugido-google-calendar` — gerencia calendarios Google.
- `rugido-google-drive` — lista, baixa, exporta, sobe e organiza arquivos do Drive.
- `rugido-google-docs` — le, copia e exporta documentos do Google Docs.
- `rugido-fathom` — acessa reunioes gravadas no Fathom.
- `rugido-generate-image` — referencia historica de geracao de imagem.
- `rugido-evolution-api` — dispara mensagens via WhatsApp/Evolution API.
- `rugido-criador-de-propostas` — gera propostas comerciais HTML da Rugido.

## Scripts

Instale dependencias dos scripts com:

```bash
cd scripts && npm install
```

Comandos uteis:

```bash
cd scripts
npm run meta:debug
npm run meta -- --since 2026-05-01
npm run meta -- --since 2026-05-01 --new-sheet
npm run sync:ads
```

O script principal e `scripts/meta-ads-insights.js`.
Ele le variaveis do `.env` na raiz do projeto e salva JSON em `dados/`.

## Variaveis de ambiente

Use `.env.example` como referencia. Nunca mostre, copie ou versione valores reais do `.env`.

Principais variaveis:

- `META_PAGE_TOKEN`
- `META_ADS_RUGIDO_01`
- `META_ADS_SHEET_MAIO_2026`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `OPENROUTER_API_KEY`
- `EVOLUTION_API_URL`
- `EVOLUTION_API_KEY`
- `EVOLUTION_INSTANCE`
- `FATHOM_API_KEY_1`

## Regras de trabalho

- Preserve o tom do projeto: curto, punchy, sem rodeios.
- Nao reescreva documentos inteiros se uma edicao pontual resolve.
- Nao apague arquivos de memoria ou conteudo operacional.
- Antes de criar ativos comerciais, procure templates em `templates/`.
- Antes de mexer em dados, veja `dados/README.md`.
- Se o usuario corrigir algo que parece regra permanente, pergunte se deve salvar em `_contexto/`.
- Ao concluir algo repetivel, pergunte se faz sentido transformar em skill local.

## Git

- O `.env` deve permanecer ignorado.
- Antes de commits, confira `git status --short`.
- Nao reverta mudancas que voce nao fez.
- Nao use comandos destrutivos como `git reset --hard` sem pedido explicito.
