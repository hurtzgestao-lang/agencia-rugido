---
name: fathom
description: Acessa reuniões gravadas no Fathom via API. Lista reuniões, lê transcrições e resumos. Usa FATHOM_API_KEY do .env.
type: implementation
---

# Fathom — Transcrições de Reuniões

Acessa o Fathom (gravador de reuniões) via REST API usando `FATHOM_API_KEY` do `.env`.

## Quando usar

- Usuário pede pra ver/analisar reuniões gravadas
- Precisa de transcrição de uma reunião específica
- Quer atualizar o contexto da operação com o que foi discutido em reunião
- Quer identificar padrões de objeção, micro-pactos, ou aplicação do SPICED
- Precisa do resumo automático de uma call de ER ou qualificação

## Pré-requisitos

- `FATHOM_API_KEY_1` e `FATHOM_API_KEY_2` no `.env` (duas contas — sempre usar as duas)
- Conta 1: klebson@rugido.com | Conta 2: klebsoncostano@gmail.com
- **Sempre iterar nas duas contas** e agregar os resultados

## Regra: sempre usar as duas contas

```bash
source .env
for KEY in "$FATHOM_API_KEY_1" "$FATHOM_API_KEY_2"; do
  # executa a operação com $KEY
done
```

---

## Operação 1 — Listar reuniões recentes (ambas as contas)

```bash
source .env

for LABEL in "Conta1:$FATHOM_API_KEY_1" "Conta2:$FATHOM_API_KEY_2"; do
  NOME="${LABEL%%:*}"
  KEY="${LABEL##*:}"
  echo "=== $NOME ==="
  curl -s "https://api.fathom.ai/external/v1/meetings" \
    -H "X-Api-Key: $KEY" \
  | python3 -c "
import sys, json
data = json.load(sys.stdin)
for m in data.get('items', []):
    print(f\"ID: {m['recording_id']} | {m.get('created_at','')[:10]} | {m.get('title','(sem título)')}\")
print(f\"\\nNext cursor: {data.get('next_cursor', 'fim')}\")
"
```

### Filtrar por período

```bash
source .env

# Reuniões dos últimos 7 dias
DATA_INICIO=$(date -u -v-7d +"%Y-%m-%dT%H:%M:%SZ" 2>/dev/null || date -u -d '7 days ago' +"%Y-%m-%dT%H:%M:%SZ")

curl -s "https://api.fathom.ai/external/v1/meetings?created_after=$DATA_INICIO" \
  -H "X-Api-Key: $FATHOM_API_KEY" \
  | python3 -c "
import sys, json
data = json.load(sys.stdin)
items = data.get('items', [])
print(f'{len(items)} reuniões encontradas:\n')
for m in items:
    print(f\"  {m['recording_id']} | {m.get('created_at','')[:10]} | {m.get('title','(sem título)')}\")
"
```

### Listar com transcrição e resumo incluídos

```bash
source .env

curl -s "https://api.fathom.ai/external/v1/meetings?include_summary=true&include_transcript=true" \
  -H "X-Api-Key: $FATHOM_API_KEY" \
  | python3 -m json.tool
```

### Paginar (próxima página)

```bash
source .env
CURSOR="cursor_retornado_pelo_next_cursor"

curl -s "https://api.fathom.ai/external/v1/meetings?cursor=$CURSOR" \
  -H "X-Api-Key: $FATHOM_API_KEY" \
  | python3 -m json.tool
```

---

## Operação 2 — Ler transcrição de uma reunião

```bash
source .env
RECORDING_ID=123456789  # substitua pelo ID real

curl -s "https://api.fathom.ai/external/v1/recordings/$RECORDING_ID/transcript" \
  -H "X-Api-Key: $FATHOM_API_KEY" \
  | python3 -c "
import sys, json
data = json.load(sys.stdin)
for trecho in data.get('transcript', []):
    speaker = trecho.get('speaker', {}).get('display_name', 'Desconhecido')
    ts = trecho.get('timestamp', '')
    text = trecho.get('text', '')
    print(f'[{ts}] {speaker}: {text}')
"
```

---

## Operação 3 — Ler resumo de uma reunião

```bash
source .env
RECORDING_ID=123456789

curl -s "https://api.fathom.ai/external/v1/recordings/$RECORDING_ID/summary" \
  -H "X-Api-Key: $FATHOM_API_KEY" \
  | python3 -c "
import sys, json
data = json.load(sys.stdin)
summary = data.get('summary', {})
print(f\"Template: {summary.get('template_name', '')}\")
print()
print(summary.get('markdown_formatted', '(sem resumo)'))
"
```

---

## Operação 4 — Ingerir reunião como contexto da operação

Fluxo completo: listar → identificar a reunião → pegar transcrição + resumo → salvar.

```bash
source .env
RECORDING_ID=123456789
TITULO_REUNIAO="nome-da-reuniao"  # slug pra nome do arquivo
DATA_REUNIAO=$(date +%Y-%m-%d)

# 1. Busca resumo
RESUMO=$(curl -s "https://api.fathom.ai/external/v1/recordings/$RECORDING_ID/summary" \
  -H "X-Api-Key: $FATHOM_API_KEY" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('summary',{}).get('markdown_formatted',''))")

# 2. Busca transcrição
TRANSCRICAO=$(curl -s "https://api.fathom.ai/external/v1/recordings/$RECORDING_ID/transcript" \
  -H "X-Api-Key: $FATHOM_API_KEY" \
  | python3 -c "
import sys, json
data = json.load(sys.stdin)
lines = []
for t in data.get('transcript', []):
    sp = t.get('speaker',{}).get('display_name','?')
    lines.append(f\"[{t.get('timestamp','')}] {sp}: {t.get('text','')}\")
print('\n'.join(lines))
")

# 3. Salva — ajuste destino conforme tipo de reunião (ver tabela abaixo)
cat > "briefings/$DATA_REUNIAO-$TITULO_REUNIAO.md" << EOF
# Reunião: $TITULO_REUNIAO
**Data:** $DATA_REUNIAO
**Recording ID:** $RECORDING_ID

## Resumo (Fathom)

$RESUMO

## Transcrição completa

$TRANSCRICAO
EOF

echo "Salvo em briefings/$DATA_REUNIAO-$TITULO_REUNIAO.md"
```

---

## Onde salvar as reuniões por tipo (Rugido)

| Tipo de reunião | Destino |
|---|---|
| Apresentação ER com prospect | `clientes/{slug}/historico.md` (append) + `briefings/YYYY-MM-DD-{slug}-er.md` |
| Reunião de qualificação SDR | `briefings/YYYY-MM-DD-{slug}-qualificacao.md` |
| Daily Closers / Daily SDR | Não salva — apenas lê pra contexto da sessão |
| Weekly Comercial | `operacoes/reunioes/YYYY-MM-DD-weekly-comercial.md` |
| Kickoff Mensal | `operacoes/reunioes/YYYY-MM-DD-kickoff.md` |
| Reunião estratégica (CEO + liderança) | `lideranca/YYYY-MM-DD-estrategia.md` |
| Review de métricas | `dados/YYYY-MM-DD-review-metricas.md` |

---

## Padrões a identificar na transcrição (Rugido)

Ao ler transcrições de apresentações ER, verificar presença de:
- **SPICED**: Situation, Pain, Impact, Critical Event, Decision
- **Micro-pactos (MP1-MP4)**: se o Closer fechou cada micro-compromisso
- **Ancoragem**: bloco de valor empilhado antes do preço
- **Objeções**: preço, timing, sócio — e como foi a reversão
- **P3 (Fala-Fecha)**: SDR usou os 3 horários?
- **Restrição Ativa**: foi mencionada a limitação de vagas?

---

## Notas

- A API retorna até 20 reuniões por página; usar `next_cursor` pra paginar
- `recording_id` é inteiro — aparece na listagem
- Transcrição e resumo são síncronos (sem `destination_url`) — retornam direto
- Rate limit: 60 chamadas / 60 segundos
- `FATHOM_API_KEY` precisa estar configurada no `.env` desta operação
