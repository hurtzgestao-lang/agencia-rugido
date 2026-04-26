---
name: evolution-api
description: Dispara mensagens WhatsApp via Evolution API do Rugido
---

# Evolution API — Disparo de Mensagens

**Configuração (variáveis de ambiente em .env):**
- `EVOLUTION_API_URL`
- `EVOLUTION_API_KEY`
- `EVOLUTION_INSTANCE`

---

## Quando usar

Quando o usuário pedir para:
- Enviar mensagem/aviso pelo WhatsApp
- Disparar comunicação para alguém
- Enviar texto ou mídia via API

---

## Fluxo de trabalho

### 1. Enviar mensagem de texto

**Endpoint:** `POST /message/sendText/{EVOLUTION_INSTANCE}`

**Executar via JavaScript (ctx_execute):**
```javascript
const response = await fetch(`${process.env.EVOLUTION_API_URL}/message/sendText/${process.env.EVOLUTION_INSTANCE}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'apikey': process.env.EVOLUTION_API_KEY
  },
  body: JSON.stringify({
    number: '5594988082290',
    text: 'Sua mensagem',
    delay: 1000,
    linkPreview: false
  })
});
const data = await response.json();
console.log(JSON.stringify(data, null, 2));
console.log('Status:', response.status);
```

### 2. Verificar status da instância

**Executar via JavaScript:**
```javascript
const response = await fetch(`${process.env.EVOLUTION_API_URL}/instance/connectionState/${process.env.EVOLUTION_INSTANCE}`, {
  headers: {
    'apikey': process.env.EVOLUTION_API_KEY
  }
});
const data = await response.json();
console.log(JSON.stringify(data, null, 2));
```

---

## Regras

- Número sempre com código do país (55) e DDD, sem caracteres especiais
- Texto direto, sem HTML
- Delay mínimo 1000ms entre mensagens para evitar bloqueio
- Confirmar envio mostrando o status da resposta
- **Instância é case-sensitive** — use `EVOLUTION_INSTANCE` exatamente como no .env, sem `.toLowerCase()` ou `.toUpperCase()`

---

## Resposta ao usuário

Apos enviar, resumir em uma linha:
```
Enviado para [número]: [resumo da mensagem]
Status: [PENDING/ERROR]
```

Se erro, mostrar o motivo.
