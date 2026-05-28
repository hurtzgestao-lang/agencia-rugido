---
name: cloudflare-pages
description: Publica páginas estáticas, HTML, propostas, landing pages e links públicos via Cloudflare Pages usando o repositório GitHub da Hurtz Consórcio.
type: implementation
---

# Cloudflare Pages — Publicação De Páginas

Use quando o usuário pedir para publicar, subir, colocar no ar, criar link público, fazer deploy ou compartilhar uma página HTML.

## Configuração

- Projeto Cloudflare: `hurtz-publicacoes`
- Repo GitHub: `hurtzgestao-lang/hurtz-publicacoes`
- URL principal: `https://pages.hurtzcompany.com.br`
- Deploy: automático via push no Git
- Repositório local neste Mac: `/Users/klebsoncosta/Hurtz Company/KVault/raw/operacoes/Hurtz_Consorcio/repositorio-publicacoes`

## Como Funciona

Cada pasta no repositório vira um slug público:

```text
repositorio-publicacoes/
  proposta-cliente-x/
    index.html
```

URL final:

```text
https://pages.hurtzcompany.com.br/proposta-cliente-x/
```

Regras:

- Cada pasta = um slug.
- O arquivo principal deve se chamar `index.html`.
- Use slug curto, sem espaço e sem acento.
- A URL final deve ter barra no fim.
- Antes de publicar, rode `git status --short` no repositório de publicações e preserve mudanças que não forem suas.

## Fluxo

1. Criar uma pasta em `repositorio-publicacoes/[slug]/`.
2. Colocar o HTML como `index.html`.
3. Copiar assets necessários para a mesma pasta ou subpastas locais.
4. Conferir no navegador local se o HTML abre corretamente.
5. Rodar `git status --short`.
6. Fazer commit e push no repositório de publicações.
7. Retornar o link público.

## Comandos Base

```bash
cd "/Users/klebsoncosta/Hurtz Company/KVault/raw/operacoes/Hurtz_Consorcio/repositorio-publicacoes"
mkdir -p nome-do-slug
# colocar index.html dentro da pasta
git status --short
git add nome-do-slug
git commit -m "Publica nome-do-slug"
git push
```

## Resposta Ao Usuário

Após publicar, responder curto:

```text
Publicado: https://pages.hurtzcompany.com.br/[slug]/
Deploy automático em andamento.
```

Se der erro, explicar o motivo e o próximo passo.

