#!/bin/bash
# Atualiza a planilha Meta Ads do mês corrente.
# Roda via cron a cada 1h — lê o SHEET_ID do .env automaticamente.
# Log em: logs/sync-ads.log

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$REPO_DIR/.env"
LOG_FILE="$REPO_DIR/logs/sync-ads.log"

# Primeiro dia do mês corrente
SINCE="$(date +%Y-%m-01)"

# Nome da variável da planilha do mês (ex: META_ADS_SHEET_MAIO_2026)
MESES_EN=(janeiro fevereiro marco abril maio junho julho agosto setembro outubro novembro dezembro)
MES_IDX=$(date +%-m)
MES_NOME="${MESES_EN[$((MES_IDX - 1))]}"
ANO="$(date +%Y)"
MES_UPPER=$(echo "$MES_NOME" | tr '[:lower:]' '[:upper:]')
ENV_VAR="META_ADS_SHEET_${MES_UPPER}_${ANO}"

# Lê o SHEET_ID do .env
SHEET_ID=$(grep "^${ENV_VAR}=" "$ENV_FILE" | cut -d= -f2 | tr -d '"' | tr -d "'")

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

if [ -z "$SHEET_ID" ]; then
  log "ERRO: $ENV_VAR não encontrada no .env. Crie a planilha do mês com --new-sheet primeiro."
  exit 1
fi

log "Iniciando sync — conta: $ENV_VAR — planilha: $SHEET_ID — desde: $SINCE"

cd "$REPO_DIR/scripts" || exit 1

# Até 3 tentativas com 30s de espera entre elas (API do Meta pode retornar 503 pontual)
MAX_TRIES=3
WAIT_SECS=30
EXIT_CODE=1

for TRY in $(seq 1 $MAX_TRIES); do
  node meta-ads-insights.js --update "$SHEET_ID" --since "$SINCE" >> "$LOG_FILE" 2>&1
  EXIT_CODE=$?
  [ $EXIT_CODE -eq 0 ] && break
  if [ $TRY -lt $MAX_TRIES ]; then
    log "Tentativa $TRY falhou. Aguardando ${WAIT_SECS}s antes de tentar novamente..."
    sleep $WAIT_SECS
  fi
done

if [ $EXIT_CODE -eq 0 ]; then
  log "Sync concluído com sucesso."
else
  log "ERRO no sync após $MAX_TRIES tentativas (exit code $EXIT_CODE)."
fi
