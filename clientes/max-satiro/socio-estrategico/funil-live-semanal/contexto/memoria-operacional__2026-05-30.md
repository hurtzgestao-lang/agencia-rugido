# Memoria Operacional - Funil Live Semanal Max Satiro

Atualizado em: 2026-05-30  
Projeto: Max Satiro / Socio Estrategico / Live Semanal  
Pagina de destino: `https://www.socioestrategico.com/live-semanal-v2`

Este documento registra o que foi feito no projeto do Max depois do handoff inicial: paginas, anuncios, transcricoes, tentativa de subida via Meta API, copies aprovadas ou recusadas e proximos passos. Nao colocar tokens reais aqui.

## Estado Atual

- O funil e para capturar leads para a pagina da live semanal.
- Nao e campanha de WhatsApp.
- Objetivo de midia: leads para site/pagina.
- Orcamento informado: R$50/dia.
- Estrutura desejada: uma campanha, anuncios pausados para revisao.
- Publico atual: Ad+ com indicacao de publico de envolvimento. Nao tratar como campanha fria.
- URL final: `https://www.socioestrategico.com/live-semanal-v2`.

## Identificadores Nao Secretos

- BM: `974152875276288`
- Conta de anuncio: `act_822181580904755`
- Pagina: `948489798358833`
- Instagram informado: `17841400419788429`

Tokens reais ficam apenas em `.env.socio-estrategico` ou no gerenciador de credenciais local. Nunca versionar ou colar token em documento do projeto.

## Paginas

Pasta de paginas:

`clientes/max-satiro/socio-estrategico/funil-live-semanal/paginas/`

Versoes existentes:

- `socio-estrategico__pagina-live-semanal__v01.html` - base original importada.
- `socio-estrategico__pagina-live-semanal__v02.html` - variacao "Descubra onde sua empresa esta travando o proximo salto".
- `socio-estrategico__pagina-live-semanal__v03.html` - iteracao da variacao anterior.
- `socio-estrategico__pagina-live-semanal__v04.html` - variacao mais enxuta: "Como destravar o proximo salto da sua empresa".
- `socio-estrategico__pagina-live-semanal__p01.html` - versao visual mais trabalhada: "Aula ao vivo: como crescer sem depender tanto do dono".
- `socio-estrategico__pagina-live-semanal__p02.html` - variacao "Descubra onde sua empresa trava".
- `socio-estrategico__pagina-live-semanal__p03.html` - variacao "Sua empresa cresceu. Agora ficou pesada demais pra depender de voce".
- `socio-estrategico__pagina-live-semanal__p04.html` - versao mais recente criada em 2026-05-30: "Aula ao vivo: como crescer sem depender do seu tempo".

Previews ficam em:

`clientes/max-satiro/socio-estrategico/funil-live-semanal/entregaveis/`

Previews recentes relevantes:

- `preview-desktop-p04.png`
- `preview-mobile-p04.png`
- `preview-bio-p04.png`
- `referencia-rugido-jornada-v1-desktop.png`
- `referencia-rugido-jornada-v1-bio.png`

Direcao visual: a pagina pode usar o design system escuro da Socio Estrategico, mas isso nao significa aplicar fundo preto em todos os canais. Para e-mail, o usuario rejeitou fundo preto e verde fora da paleta percebida do Max. Sempre conferir canal, paleta e exemplos antes de reaproveitar estilo.

## Anuncios Baixados E Transcritos

Os anuncios do Drive foram baixados para:

`clientes/max-satiro/socio-estrategico/funil-live-semanal/referencias/anuncios/ads-max__2026-05-25/`

Arquivos:

- `V1.mp4`
- `V2.mp4`
- `V3.mp4`
- `V4.mp4`
- `V5.mp4`
- `V6.mp4`
- `V7.mp4`
- `V8.mp4`
- `V9.mp4`

Transcricoes:

- Brutas: `transcricoes/V*.txt`, `transcricoes/V*.md`, `transcricoes/V*.json`, `transcricoes/V*.srt`
- Revisadas: `transcricoes/V1.revisado.txt` ate `transcricoes/V9.revisado.txt`
- Consolidadas: `transcricoes/transcricoes__consolidado.md` e `transcricoes/transcricoes__revisado.md`

Regra combinada para novos videos: transcrever da melhor forma disponivel localmente, revisar quando for material de copy/anuncio e manter arquivos revisados por video. Nao usar transcricao crua como copy final sem lapidar.

## Materiais De Meta Ads Criados

Manifesto dos anuncios:

- `referencias/anuncios/ads-max__2026-05-25/meta-ads__live-semanal-v2__2026-05-30.json`
- `referencias/anuncios/ads-max__2026-05-25/meta-ads__live-semanal-v2__2026-05-30.md`

Importante: o manifesto/markdown antigo tem textos especificos por video e alguns em terceira pessoa. Depois, o usuario mudou a direcao: usar apenas 4 textos reutilizaveis em todos os anuncios, com Max falando em primeira pessoa e abertura chamando o ICP. Para configuracao manual hoje, usar o bloco "Copy Atual Para Subida Manual" deste documento como referencia mais recente.

Videos subidos como assets na conta de anuncios:

| Video | Meta video ID |
|---|---|
| V1.mp4 | `846333488071252` |
| V2.mp4 | `1484702955957689` |
| V3.mp4 | `868386832966948` |
| V4.mp4 | `937435685954230` |
| V5.mp4 | `1718805619474570` |
| V6.mp4 | `1504262648062180` |
| V7.mp4 | `1261933539083641` |
| V8.mp4 | `986007237469057` |
| V9.mp4 | `1310196187324443` |

Arquivo de mapeamento:

`referencias/anuncios/ads-max__2026-05-25/meta-video-uploads__2026-05-30.json`

Thumbnails:

- Extraidas localmente em `referencias/anuncios/ads-max__2026-05-25/meta-api/thumbnails/`
- Subidas em `/act_{ad_account_id}/adimages`
- Relatorio: `referencias/anuncios/ads-max__2026-05-25/meta-api/thumbnail-image-uploads__2026-05-30.json`

Imagem criada para o app da Meta:

`referencias/anuncios/ads-max__2026-05-25/meta-api/app-assets/meta-app-icon__socio-estrategico__1024.png`

## Script De Meta API

Script criado:

`scripts/meta-socio-estrategico-live-leads.js`

Variaveis de ambiente documentadas em `.env.example`:

- `META_SOCIO_ESTRATEGICO_ACCESS_TOKEN`
- `META_SOCIO_ESTRATEGICO_PAGE_ACCESS_TOKEN`
- `META_SOCIO_ESTRATEGICO_AD_ACCOUNT_ID`
- `META_SOCIO_ESTRATEGICO_BUSINESS_ID`
- `META_SOCIO_ESTRATEGICO_PAGE_ID`
- `META_SOCIO_ESTRATEGICO_INSTAGRAM_ID`
- `META_SOCIO_ESTRATEGICO_PIXEL_ID`
- `META_SOCIO_ESTRATEGICO_LANDING_URL`
- `META_SOCIO_ESTRATEGICO_DAILY_BUDGET_CENTS`
- `META_SOCIO_ESTRATEGICO_GRAPH_VERSION`

Comandos:

```bash
node scripts/meta-socio-estrategico-live-leads.js validate
node scripts/meta-socio-estrategico-live-leads.js validate --no-instagram
node scripts/meta-socio-estrategico-live-leads.js create
```

Regras do script:

- Validar `/me` e `/debug_token`.
- Validar permissoes.
- Listar contas acessiveis.
- Validar conta de anuncio.
- Validar BM.
- Validar Pagina.
- Validar pixel/dataset quando for objetivo de lead/site.
- Validar videos e thumbnails.
- Criar campanha/conjunto/anuncios apenas como `PAUSED`.
- Nao expor tokens em relatorio.

## Resultado Da Validacao Meta API

Conta acessivel confirmada:

- `act_822181580904755` - Socio Estrategico - ativa - BRL - BM Socio Estrategico

Permissoes confirmadas no token testado:

- `ads_management`
- `ads_read`
- `business_management`
- `pages_show_list`
- `pages_read_engagement`
- `pages_manage_ads`
- `public_profile`

Problemas encontrados:

- `instagram_basic` nao estava disponivel/valido no fluxo usado.
- A Pagina nao retornou `instagram_business_account` de forma suficiente para validar Instagram.
- O ID de Instagram informado nao deve ser usado como `instagram_actor_id`; o fluxo correto atual usa `instagram_user_id`, quando disponivel.
- O app usado estava em modo desenvolvimento.
- A Meta bloqueou a criacao/validacao de criativo com a mensagem de que o post do criativo foi criado por app em modo desenvolvimento e precisa de app publico.

Conclusao operacional:

- Via API oficial, com o app atual, nao da para concluir hoje sem publicar/verificar o app ou usar token de outro app publico com permissao para a Pagina/conta.
- Como a Meta pediu verificacao da empresa e isso nao da para fazer agora, o caminho para subir hoje e Ads Manager manual/assistido, com os videos e copies ja organizados.
- Nao insistir com tentativas repetidas via API enquanto o bloqueio for app em desenvolvimento. Isso aumenta taxa de erro sem resolver o motivo real.

## MCP Meta E OAuth

Foi tentado configurar o MCP `meta-ads-official` para operar a Marketing API por ferramenta, mas o login falhou com erro de dynamic registration indisponivel. Resultado pratico: nao existe MCP Meta funcional neste workspace ate este registro.

A listagem de contas de anuncio foi feita pela Marketing API diretamente, nao pelo MCP.

Tambem houve tentativa de gerar token pelo dialog OAuth do app. Problemas vistos:

- erro de dominio/URL de redirecionamento nao incluida nos dominios do app;
- necessidade de configurar URI exata em OAuth;
- `instagram_basic` apareceu como escopo invalido no fluxo usado;
- publicar o app exigiu verificacao da empresa, que nao estava disponivel para resolver no mesmo dia.

Conclusao: para urgencia, usar Ads Manager manual. Para voltar ao fluxo API/MCP, primeiro resolver app publico/verificado, permissoes e token correto.

## Copy Atual Para Subida Manual

O usuario pediu apenas 4 textos reutilizaveis para todos os anuncios. A comunicacao deve rodar no perfil do Max; portanto, nao falar de Max em terceira pessoa. Abrir chamando o ICP.

### Texto 01

Texto principal:

> Atenção, empresário de serviço: se sua empresa já vende, já tem time e mesmo assim continua dependendo de você para tudo, o problema talvez não seja vender mais. Pode ser gestão, margem, modelo e decisão. Na Mesa com o Sócio, eu vou te mostrar toda semana como empresários estão destravando crescimento sem virar reféns da própria operação.

Titulo:

> Sua empresa cresceu, mas travou?

Descricao:

> Cadastre-se para a live semanal.

### Texto 02

Texto principal:

> Empresário, existe uma diferença enorme entre faturar mais e construir uma empresa melhor. Se a operação cresce, a complexidade aumenta e o lucro não acompanha, está na hora de olhar para as decisões certas. Na Mesa com o Sócio, eu abro bastidores reais sobre crescimento, margem, time e gestão.

Titulo:

> Fatura mais e sobra menos?

Descricao:

> Entre no grupo e receba o convite.

### Texto 03

Texto principal:

> Exclusivo para empresários que já passaram da fase de começar e agora querem escalar com direção. Toda quinta-feira, ao meio-dia, eu faço a Mesa com o Sócio: uma live para discutir os gargalos reais de empresas de serviço que querem crescer com mais estratégia, gestão e operação.

Titulo:

> Participe da Mesa com o Sócio

Descricao:

> Toda quinta-feira, meio-dia.

### Texto 04

Texto principal:

> Você, empresário, já percebeu que às vezes o concorrente cresce mais não porque é melhor, mas porque toma decisões melhores? Na Mesa com o Sócio, eu compartilho toda semana os bastidores, estratégias e ajustes que fazem uma empresa sair do platô e crescer com mais clareza.

Titulo:

> O problema pode não ser venda

Descricao:

> Cadastre-se para receber o convite.

## Nomes Curtos Dos Anuncios

Usar formato com numero:

- `[01] - Empresa Travada`
- `[02] - Fatura Mais, Sobra Menos`
- `[03] - Mesa com o Sócio`
- `[04] - Crescer com Direção`
- `[05] - Dono Preso na Operação`
- `[06] - Gargalo Não é Venda`
- `[07] - Escala com Gestão`
- `[08] - Concorrente Crescendo Mais`
- `[09] - Toda Quinta, Meio-dia`

## UTM Atual

O usuario corrigiu que nao e frio; e Ad+ com indicacao de publico de envolvimento.

Parametro para anexar na URL:

```text
utm_campaign={{campaign.name}}&utm_source={{site_source_name}}_{{placement}}&utm_medium=FB_ADPLUS_ENVOLVIMENTO&utm_content={{ad.name}}&utm_term={{adset.name}}
```

URL final com UTM:

```text
https://www.socioestrategico.com/live-semanal-v2?utm_campaign={{campaign.name}}&utm_source={{site_source_name}}_{{placement}}&utm_medium=FB_ADPLUS_ENVOLVIMENTO&utm_content={{ad.name}}&utm_term={{adset.name}}
```

## Email ActiveCampaign

Objetivo: enviar para a pessoa o link do grupo depois do cadastro.

Estado da conversa:

- Foi pedido um e-mail com cores/formatacao.
- Primeira direcao ficou desalinhada com a paleta/comunicacao do Max.
- Usuario rejeitou fundo preto.
- Usuario rejeitou verde que nao parecia ser o verde correto do Max.
- Usuario pediu HTML, mas o HTML anterior nao deve ser tratado como final.

Regra para refazer:

- Fundo branco.
- Tom direto, de Max para empresario.
- Nao usar comunicacao institucional demais.
- Nao aplicar automaticamente a estetica escura da landing no e-mail.
- Confirmar ou extrair cor correta do Max antes de definir CTA.
- Evitar terceira pessoa.

## Direcao De Linguagem

Para ads, e-mail e pagina do Max:

- Falar com empresario de servico.
- Abrir identificando ICP quando for anuncio.
- Evitar "Max Satiro mostra..." se o anuncio roda no perfil do Max. Preferir "eu vou mostrar", "eu compartilho", "eu faço".
- Tom: direto, adulto, estrategico, sem hype.
- Evitar parecer infoprodutor ou guru.
- Manter os eixos: receita, estrategia, gestao, operacao, margem, decisao, dependencia do dono.

## Pendencias Reais

- Definir/confirmar link final do grupo para o e-mail ActiveCampaign.
- Refazer HTML do e-mail com fundo branco e paleta correta.
- Subir campanha manualmente no Ads Manager se for para rodar hoje.
- Se voltar para API: usar app publico/verificado ou token de app publico com permissoes corretas.
- Validar pixel/dataset usado para objetivo de lead/site.
- Confirmar evento de otimizacao.
- Confirmar se `p04` e a pagina final ou se sera apenas referencia.
- Conferir se a pagina publicada em `/live-semanal-v2` bate com a versao local mais recente.

## Guardrails

- Nunca ativar campanha, conjunto ou anuncio sem confirmacao explicita.
- Criar tudo pausado quando for via API.
- Nao versionar tokens.
- Nao colar tokens em markdown.
- Nao insistir em chamadas que a Meta ja recusou por app em desenvolvimento.
- Nao migrar comunicacao visual da Rugido para o Max sem conferir identidade do cliente.
