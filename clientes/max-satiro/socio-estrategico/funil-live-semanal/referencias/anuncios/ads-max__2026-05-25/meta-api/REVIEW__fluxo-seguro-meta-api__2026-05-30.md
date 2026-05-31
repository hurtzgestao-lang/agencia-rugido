# Review — fluxo seguro Meta Marketing API

## Diagnostico

- O token atual passa nas permissoes de anuncios, mas nao tem `instagram_basic`.
- A Meta exige `instagram_basic` para ler `instagram_business_account` da Pagina.
- A Pagina `948489798358833` nao retornou `instagram_business_account` nem `connected_instagram_account` com User Token ou Page Token.
- As edges do BM/conta de anuncio tambem nao retornaram conta Instagram atribuida.
- O campo correto no `object_story_spec` atual e `instagram_user_id`, nao `instagram_actor_id`.
- Criativo de video precisa de thumbnail. A Meta exige `image_hash` ou `image_url` em `video_data`.
- A documentacao da Meta recomenda nao usar URL de imagem do CDN do Facebook como `image_url`; o fluxo seguro e extrair thumbnail local, subir em `/act_{ad_account_id}/adimages` e usar o `image_hash`.

## Fluxo seguro antes de criar

1. Gerar token com:
   - `ads_management`
   - `business_management`
   - `pages_show_list`
   - `pages_read_engagement`
   - `pages_manage_ads`
   - `instagram_basic`, se for usar Instagram
2. Validar `/me` e `/debug_token`.
3. Validar conta, BM, Pagina e Pixel.
4. Buscar Page Access Token por `/me/accounts`.
5. Validar Instagram pelo campo `instagram_business_account` da Pagina.
6. Confirmar que o ID informado bate com o Instagram retornado pela Pagina.
7. Extrair thumbnails dos videos localmente.
8. Subir thumbnails em `/act_{ad_account_id}/adimages`.
9. Criar criativos com `video_data.image_hash`.
10. Rodar `adcreatives` com `execution_options=["validate_only"]`.
11. So depois criar campanha, conjunto, criativos e anuncios como `PAUSED`.

## Guardrails

- Nunca ativar campanha, conjunto ou anuncio sem confirmacao explicita.
- Nao persistir Page Access Token em arquivo.
- Nao mostrar token em log ou relatorio.
- Evitar tentativa/erro repetido: a Meta usa taxa de erro e volume de chamadas como criterio de acesso.
- Se o app estiver em modo desenvolvimento e a Meta bloquear criativo/anuncio, parar e pedir app em modo publicado/permissoes revisadas.

## Fontes oficiais

- https://developers.facebook.com/docs/instagram-api/reference/page/
- https://developers.facebook.com/docs/marketing-api/reference/ad-creative-object-story-spec/
- https://developers.facebook.com/docs/marketing-api/reference/ad-creative-video-data/
- https://developers.facebook.com/docs/development/build-and-test/app-modes/
- https://developers.facebook.com/docs/marketing-api/access/
