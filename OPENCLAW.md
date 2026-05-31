# OpenClaw — Grupo Rugido

Este repo deve funcionar como workspace direto do OpenClaw.

## Objetivo

O OpenClaw precisa carregar naturalmente:

- contexto da empresa;
- regras de tom;
- estrategia atual;
- clientes e projetos ativos;
- skills historicas em `.claude/skills/`;
- scripts operacionais em `scripts/`;
- tarefas e pendencias em `tarefas.md`.

## Ordem de leitura em novas sessoes

1. `AGENTS.md`
2. `CLAUDE.md`
3. `_contexto/empresa.md`
4. `_contexto/preferencias.md`
5. `_contexto/estrategia.md`
6. `tarefas.md`
7. Arquivos do cliente/projeto citado pelo usuario.

## Cliente/projeto em foco agora

Max Satiro / Socio Estrategico:

- pasta: `clientes/max-satiro/socio-estrategico/funil-live-semanal/`
- memoria mais recente: `contexto/memoria-operacional__2026-05-30.md`
- contexto geral: `contexto/contexto-geral__funil-live-semanal-max-satiro.md`
- pagina mais recente: `paginas/socio-estrategico__pagina-live-semanal__p04.html`
- script Meta API: `scripts/meta-socio-estrategico-live-leads.js`

Antes de mexer em pagina, trafego, copy, API, email ou publicacao do Max, leia a memoria operacional de 2026-05-30.

## Skills

As skills canonicas do projeto continuam em `.claude/skills/`.

A camada nativa para OpenClaw fica em:

` .agents/skills/grupo-rugido/SKILL.md`

Ela nao duplica as skills antigas; funciona como roteador para o OpenClaw saber o que ler e como agir.

## Git

- Nunca versionar `.env`, `.env.*`, tokens ou credenciais.
- Videos brutos (`*.mp4`, `*.mov`, `*.mkv`) ficam locais.
- Versionar contexto, transcricoes, manifestos, paginas, previews e scripts.
- Antes de push: `git status --short`, `rg "<<<<<<<|=======|>>>>>>>" .` e busca por segredos.
