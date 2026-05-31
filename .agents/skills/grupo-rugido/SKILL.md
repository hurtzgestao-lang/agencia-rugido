---
name: grupo-rugido
description: Roteia tarefas da Rugido para contexto, clientes, skills, scripts, campanhas, propostas, paginas, rituais e aprendizados do repo. Use para qualquer pedido sobre Grupo Rugido, Engenharia de Receita, Max Satiro, Socio Estrategico, funil de live, Meta Ads, Google APIs, WhatsApp, propostas, paginas e operacao comercial.
---

# Grupo Rugido — Skill ponte para OpenClaw

Use esta skill em qualquer demanda relacionada ao Grupo Rugido ou aos clientes/projetos dentro deste repo.

## Fluxo obrigatorio

1. Leia `AGENTS.md`.
2. Leia `CLAUDE.md`.
3. Leia a base minima:
   - `_contexto/empresa.md`
   - `_contexto/preferencias.md`
   - `_contexto/estrategia.md`
4. Leia `tarefas.md`.
5. Se o usuario mencionar um cliente/projeto, busque em `clientes/` antes de responder.
6. Se existir skill em `.claude/skills/` para a tarefa, leia o `SKILL.md` correspondente antes de agir.

## Roteador rapido

| Pedido | Fonte canonica |
|---|---|
| Proposta comercial | `.claude/skills/criador-de-propostas/SKILL.md` |
| Publicar pagina | `.claude/skills/cloudflare-pages/SKILL.md` |
| WhatsApp | `.claude/skills/evolution-api/SKILL.md` |
| Google Calendar | `.claude/skills/google-calendar/SKILL.md` |
| Google Sheets | `.claude/skills/google-sheets/SKILL.md` |
| Google Docs | `.claude/skills/google-docs/SKILL.md` |
| Google Drive | `.claude/skills/google-drive/SKILL.md` |
| Fathom | `.claude/skills/fathom/SKILL.md` |
| Imagem | `.claude/skills/generate-image/SKILL.md` |
| Meta Ads insights | `.claude/skills/meta-ads-insights/SKILL.md` |
| Meta Ads Socio Estrategico | `scripts/meta-socio-estrategico-live-leads.js` + memoria do Max |

## Max Satiro / Socio Estrategico

Quando o pedido envolver Max Satiro, Socio Estrategico, live semanal, pagina de captura ou anuncios:

1. Leia `clientes/max-satiro/socio-estrategico/funil-live-semanal/README.md`.
2. Leia `clientes/max-satiro/socio-estrategico/funil-live-semanal/contexto/memoria-operacional__2026-05-30.md`.
3. Leia `clientes/max-satiro/socio-estrategico/funil-live-semanal/contexto/contexto-geral__funil-live-semanal-max-satiro.md`.
4. Para pagina, leia a versao citada ou a mais recente `paginas/socio-estrategico__pagina-live-semanal__p04.html`.
5. Para anuncios, use as transcricoes e manifestos em `referencias/anuncios/ads-max__2026-05-25/`.

Nao usar videos brutos como fonte primaria quando houver transcricao revisada.

## Onde salvar

- Contexto duradouro da empresa: `_contexto/`.
- Cliente/projeto: `clientes/{cliente}/`.
- Pagina: pasta do cliente em `paginas/`.
- Previews e entregaveis visuais: pasta do cliente em `entregaveis/`.
- Referencias, transcricoes e manifestos: pasta do cliente em `referencias/`.
- Scripts: `scripts/`.
- Tarefas correntes: `tarefas.md` ou checklist do projeto.

## Regras

- Responda em portugues BR.
- Seja direto.
- Nao invente dado.
- Nao exponha tokens.
- Nao versione `.env`.
- Nao commite videos brutos.
- Antes de alterar campanha, publicacao, mensagem ou verba, confirme se a intencao nao estiver explicita.
