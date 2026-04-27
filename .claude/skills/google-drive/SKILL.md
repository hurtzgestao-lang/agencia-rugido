---
name: google-drive
description: >
  Controla o Google Drive via API v3 REST usando credenciais OAuth do .env.
  Lista, busca, lê, baixa, exporta, sobe, copia, move, renomeia, organiza pastas,
  compartilha e gerencia permissões de arquivos. Use quando o usuário mencionar
  "Google Drive", "Drive", "arquivo no Drive", "pasta do Drive", "subir pro Drive",
  "baixar do Drive", "compartilhar arquivo", "organizar Drive" ou similares.
---

# /google-drive — Integração Google Drive

## Dependências

- **Credenciais OAuth no `.env`:** `GOOGLE_REFRESH_TOKEN`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` (ou `GOOGLE_CREDENTIALS` de service account como fallback)
- **Helper:** `.claude/skills/google-drive/drive-api.sh` cuida de auth + funções

## Escopos OAuth necessários

- `https://www.googleapis.com/auth/drive` — leitura/escrita completa
- `https://www.googleapis.com/auth/drive.readonly` — só leitura (alternativa)
- `https://www.googleapis.com/auth/drive.file` — só arquivos criados pelo app

> Se o token atual só tem escopo de Calendar/Docs, gerar um novo refresh token incluindo `drive`.

---

## Como usar o helper

Toda operação parte de carregar o helper:

```bash
source .claude/skills/google-drive/drive-api.sh
```

Depois é só chamar a função correspondente. Resposta sempre vem em JSON cru — usar `jq` pra parsear.

---

## Funcionalidades

### 1. Listar / buscar arquivos

```bash
# Listar 50 itens recentes
drive_list "" | jq '.files'

# Buscar por nome
drive_list "name contains 'proposta'"

# Listar pastas
drive_list "mimeType='application/vnd.google-apps.folder'"

# Arquivos em uma pasta específica
drive_list "'FOLDER_ID' in parents and trashed=false"

# Apenas Google Docs
drive_list "mimeType='application/vnd.google-apps.document'"

# Apenas Sheets
drive_list "mimeType='application/vnd.google-apps.spreadsheet'"

# Modificados depois de uma data
drive_list "modifiedTime > '2026-01-01T00:00:00'"
```

**Operadores Drive Query:** `=`, `!=`, `contains`, `in parents`, `and`, `or`, `not`, `trashed`, `starred`, `sharedWithMe`.

### 2. Ler metadados de arquivo

```bash
drive_get "FILE_ID"
drive_get "FILE_ID" "id,name,size,parents,permissions"
```

### 3. Baixar arquivo binário

```bash
drive_download "FILE_ID" "dados/arquivo.pdf"
```

### 4. Exportar Google Docs/Sheets/Slides

Arquivos do Workspace **não** podem ser baixados — precisam ser exportados pra um MIME válido.

| Tipo Google | MIME para exportar |
|------------|-------------------|
| Doc | `application/pdf`, `text/markdown`, `text/plain`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |
| Sheet | `text/csv`, `application/pdf`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` |
| Slides | `application/pdf`, `application/vnd.openxmlformats-officedocument.presentationml.presentation` |

```bash
drive_export "DOC_ID" "text/markdown" "dados/doc.md"
drive_export "SHEET_ID" "text/csv" "dados/planilha.csv"
drive_export "SLIDES_ID" "application/pdf" "dados/apresentacao.pdf"
```

### 5. Subir arquivo

```bash
drive_upload "caminho/local/arquivo.pdf" "PARENT_FOLDER_ID"
drive_upload "imagem.png" "" "novo-nome.png" "image/png"
```

### 6. Criar pasta

```bash
drive_create_folder "Nome da Pasta" "PARENT_ID"
drive_create_folder "Pasta na raiz"
```

### 7. Copiar arquivo

```bash
drive_copy "FILE_ID" "Cópia - Proposta Gran Arte" "DEST_FOLDER_ID"
```

### 8. Mover arquivo

```bash
# Pegar o parent atual primeiro
drive_get "FILE_ID" "parents" | jq -r '.parents[0]'
# Mover
drive_move "FILE_ID" "NEW_PARENT_ID" "OLD_PARENT_ID"
```

### 9. Renomear / atualizar metadata

```bash
drive_update_metadata "FILE_ID" '{"name":"Novo nome.pdf"}'
drive_update_metadata "FILE_ID" '{"starred":true}'
drive_update_metadata "FILE_ID" '{"description":"Versão revisada"}'
```

### 10. Apagar (lixeira ou permanente)

```bash
drive_trash "FILE_ID"     # manda pra lixeira (recuperável)
drive_delete "FILE_ID"    # apaga permanentemente
```

### 11. Compartilhar / permissões

```bash
# Compartilhar com pessoa
drive_share "FILE_ID" "fulano@empresa.com" "writer"   # reader|commenter|writer
drive_share "FILE_ID" "cliente@email.com" "reader"

# Tornar público (qualquer um com link)
drive_share "FILE_ID" "" "reader" "anyone"

# Listar quem tem acesso
drive_list_permissions "FILE_ID" | jq '.permissions'

# Remover acesso
drive_unshare "FILE_ID" "PERMISSION_ID"
```

### 12. Info da conta

```bash
drive_about | jq '{user, quota: .storageQuota}'
```

---

## Padrões de uso comuns no Rugido

### Subir uma proposta pra pasta do cliente

```bash
source .claude/skills/google-drive/drive-api.sh

# 1. Achar a pasta do cliente
FOLDER=$(drive_list "name='Gran Arte' and mimeType='application/vnd.google-apps.folder'" | jq -r '.files[0].id')

# 2. Criar subpasta "Propostas" se não existir
SUB=$(drive_list "'$FOLDER' in parents and name='Propostas'" | jq -r '.files[0].id // empty')
[ -z "$SUB" ] && SUB=$(drive_create_folder "Propostas" "$FOLDER" | jq -r '.id')

# 3. Subir o PDF
drive_upload "propostas/gran-arte/Proposta_GranArte.pdf" "$SUB"
```

### Exportar todos os Docs de uma pasta como markdown

```bash
DOCS=$(drive_list "'FOLDER_ID' in parents and mimeType='application/vnd.google-apps.document'" | jq -r '.files[] | "\(.id)|\(.name)"')
while IFS='|' read -r id name; do
    drive_export "$id" "text/markdown" "dados/docs/${name}.md"
done <<< "$DOCS"
```

### Backup de uma pasta inteira

```bash
mkdir -p dados/backup
drive_list "'FOLDER_ID' in parents" | jq -r '.files[] | "\(.id)|\(.name)|\(.mimeType)"' | \
while IFS='|' read -r id name mime; do
    case "$mime" in
        application/vnd.google-apps.document)    drive_export "$id" "text/markdown" "dados/backup/${name}.md" ;;
        application/vnd.google-apps.spreadsheet) drive_export "$id" "text/csv" "dados/backup/${name}.csv" ;;
        application/vnd.google-apps.*)           drive_export "$id" "application/pdf" "dados/backup/${name}.pdf" ;;
        *)                                       drive_download "$id" "dados/backup/$name" ;;
    esac
done
```

---

## MIME types comuns

| MIME | Tipo |
|------|------|
| `application/vnd.google-apps.folder` | Pasta |
| `application/vnd.google-apps.document` | Google Doc |
| `application/vnd.google-apps.spreadsheet` | Google Sheet |
| `application/vnd.google-apps.presentation` | Google Slides |
| `application/vnd.google-apps.form` | Google Form |
| `application/pdf` | PDF |
| `image/png` `image/jpeg` | Imagens |
| `text/csv` `text/plain` `text/markdown` | Texto |

---

## Regras

- **Sempre `supportsAllDrives=true`** nas chamadas (já incluso no helper) — funciona com Shared Drives
- **Salvar downloads em `dados/`** por padrão; arquivos de cliente em `clientes/<nome>/`
- **Compartilhar sem notificar:** helper já passa `sendNotificationEmail=false` — bom pra automação, ruim quando o usuário quer avisar (avisar em separado se for o caso)
- **Não apagar com `drive_delete` sem confirmar** — preferir `drive_trash` pra ações reversíveis
- **Erro de auth:** se voltar `401` ou `invalid_grant`, o refresh token precisa ser regerado com escopo de Drive
- **Paginação:** `drive_list` traz só 50 por padrão; pra listas maiores, usar `nextPageToken` (chamar `drive_call GET "files?pageToken=..."`)

---

## Exemplos de comando do usuário

| Comando | Ação |
|---------|------|
| "Lista os arquivos da pasta X do Drive" | `drive_list "'X_ID' in parents"` |
| "Busca no Drive a proposta da Gran Arte" | `drive_list "name contains 'Gran Arte'"` |
| "Baixa esse PDF: <URL>" | extrair ID da URL → `drive_download` |
| "Exporta esse Doc pra markdown" | `drive_export ID text/markdown` |
| "Sobe esse arquivo pra pasta de propostas" | achar pasta → `drive_upload` |
| "Cria uma pasta 'Cliente Y' no Drive" | `drive_create_folder "Cliente Y"` |
| "Compartilha o arquivo com fulano@x.com como leitor" | `drive_share` |
| "Renomeia esse arquivo pra Z" | `drive_update_metadata` |
| "Move esse arquivo pra pasta Y" | `drive_move` |
| "Quem tem acesso a esse arquivo?" | `drive_list_permissions` |
| "Quanto espaço sobrou no Drive?" | `drive_about` |

---

## Extrair ID de URL

URLs do Drive tipicamente têm o ID nesses formatos:
- `https://drive.google.com/file/d/<ID>/view`
- `https://drive.google.com/drive/folders/<ID>`
- `https://docs.google.com/document/d/<ID>/edit`
- `https://docs.google.com/spreadsheets/d/<ID>/edit`
- `?id=<ID>` em open URLs

Regex genérico: `[-\w]{25,}`
