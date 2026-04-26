---
name: google-docs
description: >
  Interage com Google Docs API. Lê documentos, converte para markdown (.md),
  copia documentos, lista arquivos, navega entre tabs/guias, usa como contexto/base.
  Use quando o usuário mencionar "Google Docs", "documento", "copiar doc",
  "exportar doc", "ler doc", "contexto do doc" ou algo em um Google Doc.
---

# /google-docs — Integração Google Docs

## Dependências

- **Credenciais Google:** Variáveis de ambiente no `.env` (GOOGLE_CREDENTIALS)
- **Google OAuth 2.0:** Configurado com scopes necessários

---

## Escopes Necessários

Adicionar ao OAuth 2.0:
- `https://www.googleapis.com/auth/drive` — acessar e gerenciar arquivos
- `https://www.googleapis.com/auth/drive.readonly` — leitura (só se for só leitura)

---

## Funcionalidades

### 1. Ler documento e converter para Markdown

**Comando:** "Ler o doc [ID ou URL]" / "Exportar doc para markdown"

**Fluxo:**
1. Extrair `documentId` da URL ou usar ID fornecido
2. Chamar `GET https://docs.googleapis.com/v1/documents/{documentId}`
3. Parsear estrutura (`body.content[]` → `paragraph` → `elements[]` → `textRun.content`)
4. Converter para markdown mantendo:
   - Headings (via `paragraphStyle.namedStyleType`)
   - Listas (via `bullet`)
   - Negrito/itálico (via `textStyle`)
   - Links (via `textStyle.link`)
5. Salvar em `dados/docs/[nome-do-doc].md`

**Endpoint de exportação alternativa:**
```
GET https://www.googleapis.com/drive/v3/files/{fileId}/export?mimeType=text/markdown
```

---

### 2. Copiar documento

**Comando:** "Copiar o doc [ID]" / "Duplicar doc"

**Fluxo:**
1. Chamar `POST https://www.googleapis.com/drive/v3/files/{fileId}/copy`
2. Body opcional: `{ "name": "Novo nome", "parents": ["folderId"] }`
3. Retornar novo ID e URL

---

### 3. Listar documentos

**Comando:** "Listar docs" / "Meus Google Docs"

**Fluxo:**
1. Chamar `GET https://www.googleapis.com/drive/v3/files?q=mimeType='application/vnd.google-apps.document'`
2. Retornar: ID, nome, URL, última modificação

---

### 4. Navegar entre tabs/guias

**Comando:** "Listar tabs do doc [ID]" / "Conteúdo da tab [tabId]"

**Estrutura do Docs:**
- `document.tabs[]` — array de tabs
- Cada tab tem `tabId`, `title`, `documentTab.body.content[]`

**Fluxo:**
1. `GET /documents/{documentId}` retorna `tabs[]`
2. Para cada tab: mostrar `tabId`, `title`
3. Para ler conteúdo específico: parsear `documentTab.body.content[]`

---

### 5. Usar como contexto/base

**Comando:** "Usa esse doc como base pra [tarefa]" / "Contexto do doc [ID]"

**Fluxo:**
1. Ler e converter doc para markdown (funcionalidade 1)
2. Ler o arquivo `.md` gerado
3. Usar como referência para a tarefa solicitada

---

## Estrutura de Resposta do Docs API

```json
{
  "documentId": "string",
  "title": "string",
  "body": {
    "content": [
      {
        "paragraph": {
          "elements": [
            {
              "textRun": {
                "content": "Texto aqui",
                "textStyle": {
                  "bold": true,
                  "italic": false,
                  "link": { "url": "https://..." }
                }
              }
            }
          ]
        }
      }
    ]
  },
  "tabs": [
    {
      "tabId": "string",
      "title": "Nome da Tab",
      "documentTab": {
        "body": { ... }
      }
    }
  ]
}
```

---

## Regras

- **Exportar sempre para markdown** quando possível (MIME: `text/markdown`)
- **Parsear estrutura corretamente** — headings, listas, negrito, itálico, links
- **Informar ID e URL** após cada operação de cópia/criação
- **Usar .env** para credenciais (GOOGLE_CREDENTIALS em formato JSON)
- **Erro sem credenciais:** "Configura GOOGLE_CREDENTIALS no .env com credenciais de service account"

---

## Exemplos de Uso

| Comando do usuário | Ação |
|-------------------|-------|
| "Lê esse doc: https://docs.google.com/document/d/123/edit" | Ler, converter pra markdown, salvar em `dados/docs/` |
| "Copia o doc 456 pra nova pasta" | Copiar via Drive API, retornar novo ID |
| "Lista todos meus docs" | Buscar via Drive API com filtro de MIME type |
| "Quais tabs tem nesse doc?" | Ler `tabs[]` e listar `tabId` + `title` |
| "Usa o doc ABC como base pra proposta" | Exportar pra markdown, ler, usar como contexto |

---

## Observações

- Limite de exportação: 10MB por arquivo (via Drive API)
- Para docs grandes, usar Docs API (`GET /documents/{id}`) e parsear
- Tabs são relativamente novas no Docs — verificar se o doc tem `tabs[]`
- Drive API necessária para cópia/listagem — Docs API é só leitura/edição de conteúdo
