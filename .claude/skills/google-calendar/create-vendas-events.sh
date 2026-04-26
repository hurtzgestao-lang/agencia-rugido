#!/bin/bash

cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
source .claude/skills/google-calendar/calendar-api.sh

TOKEN=$(get_access_token)
CALENDAR_ID="c_43df3002da5b7e8565777716ff160cd7c014f7eec563cc2046ac8758243c4329@group.calendar.google.com"

echo "Criando eventos no calendário Agência - Vendas (Closers)..."

# Daily Closers - Segunda a Sexta 8h, 15min
curl -s -X POST "https://www.googleapis.com/calendar/v3/calendars/$CALENDAR_ID/events" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "summary": "Daily Closers Agência",
    "description": "Preparar o dia — reuniões agendadas, preparação por lead, bloqueios.\n\nAgenda:\n- Cada Closer em 2 min: reuniões de ontem (resultado), reuniões de hoje (SPICED), impedimento\n- Líder Closers destaca foco do dia (3 min)",
    "start": {"dateTime": "2026-04-28T08:00:00-03:00", "timeZone": "America/Sao_Paulo"},
    "end": {"dateTime": "2026-04-28T08:15:00-03:00", "timeZone": "America/Sao_Paulo"},
    "recurrence": ["RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR"],
    "colorId": "10"
  }' | jq -r '"✓ Daily Closers: " + .summary + " (" + .id + ")"'

# Review de Apresentação ER - Quinta 18h, 90min
curl -s -X POST "https://www.googleapis.com/calendar/v3/calendars/$CALENDAR_ID/events" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "summary": "Review de Apresentação ER Gravada",
    "description": "Assistir 1 reunião gravada da semana e analisar coletivamente — micro-pactos, ancoragem, reversão de objeções e fechamento.\n\nAgenda:\n1. Apresentação da reunião escolhida (5 min)\n2. Assistir bloco a bloco com pausas (60 min)\n3. 3 aprendizados coletivos (15 min)\n4. Compromisso individual de ajuste (10 min)",
    "start": {"dateTime": "2026-04-30T18:00:00-03:00", "timeZone": "America/Sao_Paulo"},
    "end": {"dateTime": "2026-04-30T19:30:00-03:00", "timeZone": "America/Sao_Paulo"},
    "recurrence": ["RRULE:FREQ=WEEKLY;BYDAY=TH"],
    "colorId": "6"
  }' | jq -r '"✓ Review Apresentação ER: " + .summary + " (" + .id + ")"'

# Role-play - Segunda 10h45, 60min (quinzenal)
curl -s -X POST "https://www.googleapis.com/calendar/v3/calendars/$CALENDAR_ID/events" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "summary": "Role-play de Apresentação / Objeções",
    "description": "Treinar abordagens e reversão de objeções através de simulações realistas.\n\nRodízio de cenários:\n- Objeção de preço\n- Objeção de timing\n- Objeção de sócio\n- Desconto agressivo\n- \"Já conheço o método\"\n- Outras objeções recorrentes",
    "start": {"dateTime": "2026-05-05T10:45:00-03:00", "timeZone": "America/Sao_Paulo"},
    "end": {"dateTime": "2026-05-05T11:45:00-03:00", "timeZone": "America/Sao_Paulo"},
    "recurrence": ["RRULE:FREQ=WEEKLY;BYDAY=MO;INTERVAL=2"],
    "colorId": "3"
  }' | jq -r '"✓ Role-play: " + .summary + " (" + .id + ")"'

# Kickoff Mensal - 1ª sexta 16h, 60min
curl -s -X POST "https://www.googleapis.com/calendar/v3/calendars/$CALENDAR_ID/events" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "summary": "Kickoff Mensal Closers Agência",
    "description": "Fechar mês anterior, reconhecer destaques, apresentar comissões e alinhar metas individuais para novo mês.\n\nAgenda:\n1. Ranking do mês — vendas, faturamento, ticket médio (15 min)\n2. Reconhecimento do destaque (5 min)\n3. Comissão por Closer (10 min)\n4. Metas individuais do mês novo (20 min)\n5. Foco estratégico do mês (10 min)",
    "start": {"dateTime": "2026-05-02T16:00:00-03:00", "timeZone": "America/Sao_Paulo"},
    "end": {"dateTime": "2026-05-02T17:00:00-03:00", "timeZone": "America/Sao_Paulo"},
    "recurrence": ["RRULE:FREQ=MONTHLY;BYSETPOS=1;BYDAY=FR"],
    "colorId": "11"
  }' | jq -r '"✓ Kickoff Mensal: " + .summary + " (" + .id + ")"'

echo ""
echo "Todos os eventos foram criados!"
