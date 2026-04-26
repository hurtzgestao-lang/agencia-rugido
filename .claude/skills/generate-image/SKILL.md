---
name: generate-image
description: Gera imagens com OpenRouter otimizando custos e modelos. Roteia automaticamente: texto→GPT-2, pura visual→GPT-5.4 Image 2, edição→modelo barato. Suporta reutilização com IA mais barata.
type: local
---

# Gerador de Imagens Otimizado - OpenRouter

## Quando usar
- Usuário pedir para "criar imagem", "gerar imagem", "desenhar", "fazer ilustração"
- Usuário pedir algo visual: logo, banner, ícone, ilustração
- Usuário pedir para "criar arte", "fazer design visual"
- Usuário pedir para editar imagem existente

## Lógica de Roteamento de Modelos

### 1. Análise do Request
Determinar tipo de request:
- **Com texto na imagem** (legendas, títulos, palavras): usar `openai/gpt-4o` ou modelo de texto
- **Puramente visual** (logo, ícone, arte abstrata): usar `openai/gpt-5.4-image-2`
- **Edição de imagem existente**: usar modelo mais barato (`openai/gpt-5-image-mini`)

### 2. Estratégia de Economia

**Scenario A: Imagem com texto**
```
Modelo: openai/gpt-4o (ou similar com good text rendering)
Motivo: GPT-4o e superiores tem excelente renderização de texto
```

**Scenario B: Pura visual - nova criação**
```
Modelo: openai/gpt-5.4-image-2
Motivo: Mais novo, melhor qualidade visual
```

**Scenario C: Edição de imagem existente**
```
Modelo: openai/gpt-5-image-mini (ou google/gemini-3.1-flash-image-preview)
Motivo: Edição exige menos poder, modelo barato resolve
```

**Scenario D: Recorrência + Reutilização**
```
1. Usar GPT-2 ou modelo barato para gerar versão base
2. Salvar como referência
3. Em request futuro: anexar imagem base + prompt de edição
4. Usar IA mais barata: "Altere essa imagem seguindo X"

Benefício: Economia ~80% em requests recorrentes
```

## Como funciona

### 1. Lê token do .env
```javascript
const fs = require('fs');
const env = fs.readFileSync('.env', 'utf8');
const match = env.match(/OPENROUTER_API_KEY=([^\s]+)/);
const token = match ? match[1] : null;
```

### 2. Determina modelo baseado no tipo de request
```javascript
const hasText = /texto|texto|palavra|legenda|título|escreva/i.test(userPrompt);
const isEdit = /edite|altere|modifique|mude|atualize/i.test(userPrompt) || referenceImage;

let model;
if (isEdit && referenceImage) {
  model = 'openai/gpt-5-image-mini'; // Mais barato pra edição
} else if (hasText) {
  model = 'openai/gpt-4o'; // Bom com texto
} else {
  model = 'openai/gpt-5.4-image-2'; // Topo visual
}
```

### 3. Faz request para OpenRouter
```
POST https://openrouter.ai/api/v1/chat/completions
Authorization: Bearer <token>
Content-Type: application/json

{
  "model": "<modelo selecionado>",
  "messages": [{"role": "user", "content": "<prompt>"}]
}
```

### 4. Extrai imagem base64 da resposta
```javascript
const imageBase64 = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
const base64Data = imageBase64.split(',')[1];
```

### 5. Salva imagem em arquivo
```javascript
const filename = `imagem_${Date.now()}.png`;
const path = `./${filename}`;
fs.writeFileSync(path, base64Data, 'base64');
```

### 6. Mostra imagem para usuário
Use Read tool para ler e exibir a imagem.

## Prompt Otimizado

**Template de edição com referência:**
```
{
  "role": "user",
  "content": [
    {
      "type": "image_url",
      "image_url": {
        "url": "data:image/png;base64,<base64_da_referencia>"
      }
    },
    {
      "type": "text",
      "text": "Altere essa imagem: <o que quer mudar>. Mantenha o estilo original."
    }
  ]
}
```

## Nome do arquivo
Use formato: `imagem_<timestamp>.png`
Exemplo: `imagem_1777142363.png`

## Localização
Salvar na raiz do workspace atual.

## Cache de Prompts Validados

Prompts que funcionam bem (adicionar conforme descobrir):

- **Logo abstrata Grupo Rugido:** "Create modern abstract logo - organic curves, pastel gradient (pink→turquoise→lilac), dark background #000000, one green-yellow accent, minimalista"
- **Slide final CTA:** "Create modern CTA button - soft pastel gradient background, dark text, subtle glass effect, clean design"

## Erros
- Token não encontrado: pedir para verificar .env
- Request falhou: mostrar status e mensagem
- Resposta sem imagem: informar usuário
- Timeout em modelo alto: tentar modelo alternativo (mini ou flash)

## Métricas de Economia

Sempre informar custo ao usuário:
```
Tokens usados: <tokens>
Custo: $<custo>
Modelo usado: <modelo>
Razão: <texto|visual|edição>
```
