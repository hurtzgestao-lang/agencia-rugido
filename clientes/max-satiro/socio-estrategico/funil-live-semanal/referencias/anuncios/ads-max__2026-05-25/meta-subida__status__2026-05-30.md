# Status - Subida Meta Ads

Conta de anuncios: `act_822181580904755` - Socio Estrategico

Destino: `https://www.socioestrategico.com/live-semanal-v2`

Pagina informada: `948489798358833`

Instagram ID informado: `17841400419788429`

## Feito

- 9 videos baixados do Drive.
- 9 videos transcritos.
- 9 textos de anuncio criados.
- Manifest de anuncios criado em `meta-ads__live-semanal-v2__2026-05-30.json`.
- 9 videos enviados como assets para a conta de anuncios.
- Thumbnails extraidas e subidas em `/adimages`.
- Script de validacao/criacao pausada criado em `scripts/meta-socio-estrategico-live-leads.js`.
- Publico planejado inicialmente: aberto, Brasil, 18-65, todos os generos, sem interesses.
- Direcao mais recente do usuario: Ad+ com indicacao de publico de envolvimento, nao frio.
- CTA planejado: `SIGN_UP` / Cadastrar-se.
- Objetivo mais recente: leads para site/pagina.
- Orcamento informado: R$50/dia.
- Nao e campanha de WhatsApp.

## Assets De Video No Meta

| Arquivo | Video ID |
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

## Bloqueio Atual

A criacao do criativo de anuncio via API foi bloqueada pelo Meta:

`O post do criativo dos anúncios foi criado por um app que está em modo de desenvolvimento. Ele deve estar em modo público para criar este anúncio.`

Impacto: os videos ja estao na conta, mas os anuncios/criativos finais ainda nao foram criados.

Para concluir via API, precisa de uma destas duas coisas:

- trocar o app Meta usado pelo token para modo publico/live; ou
- fornecer um token de Marketing API gerado por um app em modo publico com permissao de criar anuncios para a pagina `948489798358833`.

Observacao: o Instagram ID `17841400419788429` foi recusado pela API como `instagram_actor_id`. A criacao com `page_id` sozinho avancou ate o bloqueio do app em modo desenvolvimento.

## Decisao Para Hoje

Como a Meta pediu verificacao/publicacao do app e isso nao da para fazer agora, a subida para rodar hoje deve ser feita manualmente pelo Ads Manager usando os assets e copies ja organizados.

## UTM Atual

```text
utm_campaign={{campaign.name}}&utm_source={{site_source_name}}_{{placement}}&utm_medium=FB_ADPLUS_ENVOLVIMENTO&utm_content={{ad.name}}&utm_term={{adset.name}}
```

## Copy Atual Para Configuracao Manual

Usar os 4 textos reaproveitaveis documentados em:

`../../../contexto/memoria-operacional__2026-05-30.md`
