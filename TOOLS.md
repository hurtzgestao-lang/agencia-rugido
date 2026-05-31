# TOOLS.md — Ferramentas do projeto

Use as ferramentas disponiveis na sessao. Este arquivo orienta a operacao, nao substitui permissoes reais.

## Shell

Comandos uteis:

```bash
git status --short --branch
rg "termo" .
find .claude/skills -maxdepth 2 -name SKILL.md -print
node scripts/meta-socio-estrategico-live-leads.js validate
```

## Variaveis de ambiente

- Use `.env.example` como referencia.
- Valores reais ficam em `.env` ou `.env.socio-estrategico`.
- Nunca mostre nem versione tokens.

## Meta Ads — Socio Estrategico

Script:

`scripts/meta-socio-estrategico-live-leads.js`

Comandos:

```bash
node scripts/meta-socio-estrategico-live-leads.js validate
node scripts/meta-socio-estrategico-live-leads.js validate --no-instagram
node scripts/meta-socio-estrategico-live-leads.js create
```

Regra: criar estrutura apenas pausada (`PAUSED`) e registrar relatorios sem token.

## Antes de commit/push

```bash
git status --short
rg "<<<<<<<|=======|>>>>>>>" .
rg "API_KEY|TOKEN|SECRET|PASSWORD|REFRESH_TOKEN|ACCESS_TOKEN|CLIENT_SECRET|Bearer " .
```
