#!/bin/bash

cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
source .claude/skills/google-calendar/calendar-api.sh

TOKEN=$(get_access_token)
CALENDAR_ID="c_9a3433de71bd395794ed25137d3ec7dbab2322c94b6f4e07ff0a9bfa2461b482@group.calendar.google.com"

echo "Criando eventos no calendário Agência - Pré-vendas (SDR)..."

# Daily SDR - Segunda a Sexta 8h, 15min
curl -s -X POST "https://www.googleapis.com/calendar/v3/calendars/$CALENDAR_ID/events" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "summary": "Daily SDR Agência",
    "description": "Alinhamento rápido do time de SDR — agendamentos, meta do dia, impedimentos.\n\nAgenda:\n- Cada SDR em 1 min: agendamentos de ontem, meta do dia, impedimento\n- Gestor SDR destaca foco do dia (2 min)\n\nRegras: Máximo 15 min, sem resolução de problemas individuais.",
    "start": {"dateTime": "2026-04-27T08:00:00-03:00", "timeZone": "America/Sao_Paulo"},
    "end": {"dateTime": "2026-04-27T08:15:00-03:00", "timeZone": "America/Sao_Paulo"},
    "recurrence": ["RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR"],
    "colorId": "10"
  }' | jq -r '"✓ Daily SDR: " + .summary + " (" + .id + ")"'

# Weekly Comercial Agência - Segunda 9h15, 90min
curl -s -X POST "https://www.googleapis.com/calendar/v3/calendars/$CALENDAR_ID/events" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "summary": "Weekly Comercial Agência",
    "description": "Sincronizar os três motores do comercial da Agência: mídia, qualificação e fechamento.\n\nAgenda:\n- Bloco Marketing (30 min): investimento e resultado por funil, CPL/CPMQL, criativos top e bottom, ajustes da semana\n- Bloco Pré-vendas (30 min): MQLs, taxa de agendamento, no-shows, feedback sobre qualidade de lead, metas da semana\n- Bloco Closers (30 min): reuniões realizadas, vendas, ticket médio, negociações em aberto, plano tático\n\nRegras: Cada bloco tem 30 minutos rígidos. Todos ficam a reunião inteira.",
    "start": {"dateTime": "2026-04-27T09:15:00-03:00", "timeZone": "America/Sao_Paulo"},
    "end": {"dateTime": "2026-04-27T10:45:00-03:00", "timeZone": "America/Sao_Paulo"},
    "recurrence": ["RRULE:FREQ=WEEKLY;BYDAY=MO"],
    "colorId": "9"
  }' | jq -r '"✓ Weekly Comercial: " + .summary + " (" + .id + ")"'

# Review de Ligações Gravadas - Sexta 17h, 60min
curl -s -X POST "https://www.googleapis.com/calendar/v3/calendars/$CALENDAR_ID/events" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "summary": "Review de Ligações Gravadas",
    "description": "Escutar ligações reais, dar feedback coletivo e espalhar boas práticas.\n\nAgenda:\n1. 2-3 ligações pré-selecionadas (1 boa, 1 ruim, 1 média) (2 min)\n2. Escuta e feedback de cada ligação (45 min)\n3. 3 aprendizados pra aplicar (10 min)\n4. Compromisso individual de ajuste (3 min)\n\nRegras: Feedback constrói, nunca humilha. Começar pelos pontos fortes.\n\nConvidado recorrente: Líder Closers Agência (1x por mês).",
    "start": {"dateTime": "2026-05-01T17:00:00-03:00", "timeZone": "America/Sao_Paulo"},
    "end": {"dateTime": "2026-05-01T18:00:00-03:00", "timeZone": "America/Sao_Paulo"},
    "recurrence": ["RRULE:FREQ=WEEKLY;BYDAY=FR"],
    "colorId": "6"
  }' | jq -r '"✓ Review Ligações: " + .summary + " (" + .id + ")"'

# Treinamento Pré-Vendas Full Sales (opcional) - Terça 16h
curl -s -X POST "https://www.googleapis.com/calendar/v3/calendars/$CALENDAR_ID/events" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "summary": "Treinamento Pré-Vendas Full Sales (opcional)",
    "description": "Treinamento externo ministrado por Gabriel Hian (Full Sales). Complementa a capacitação interna.\n\nComo tratar: Marcado como opcional, não bloqueia disponibilidade. SDR decide se participa.",
    "start": {"dateTime": "2026-04-28T16:00:00-03:00", "timeZone": "America/Sao_Paulo"},
    "end": {"dateTime": "2026-04-28T17:00:00-03:00", "timeZone": "America/Sao_Paulo"},
    "recurrence": ["RRULE:FREQ=WEEKLY;BYDAY=TU"],
    "transparency": "transparent",
    "colorId": "8"
  }' | jq -r '"✓ Treinamento Full Sales: " + .summary + " (" + .id + ")"'

# Abertura Comercial Conjunta - 1ª sexta 9h-9h30, 30min (RITUAL CONJUNTO SDR + Closers)
curl -s -X POST "https://www.googleapis.com/calendar/v3/calendars/$CALENDAR_ID/events" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "summary": "🤝 Abertura Comercial Conjunta",
    "description": "Abertura mensal do motor comercial inteiro (SDR + Closers + Liderança Comercial). Reforçar que é um único funil, mostrar resultado consolidado, fazer reconhecimento cruzado e dar foco estratégico antes dos kickoffs táticos individuais.\n\nParticipantes: Liderança Comercial + Gestor SDR + Líder Closers + Time SDR + Time de Closers\n\nAgenda:\n1. Funil comercial consolidado do mês — leads → MQL → reunião → venda (10 min)\n2. Reconhecimento cruzado — melhor SDR, melhor Closer, melhor parceria SDR↔Closer (10 min)\n3. Foco estratégico do mês para o motor comercial (ICP, oferta, mensagem) (10 min)\n\nRegras:\n- Sem dados individuais sensíveis (bônus, comissão, repreensão) — esses ficam nos kickoffs separados\n- CEO e Liderança aparecem só nessa abertura, não precisam ficar nos kickoffs táticos\n- Reconhecimento cruzado é obrigatório — quebra a guerra lead ruim vs Closer ruim\n\nIMPORTANTE: Adicionar manualmente os Closers como convidados no evento (não assinam o calendário SDR).",
    "start": {"dateTime": "2026-05-01T09:00:00-03:00", "timeZone": "America/Sao_Paulo"},
    "end": {"dateTime": "2026-05-01T09:30:00-03:00", "timeZone": "America/Sao_Paulo"},
    "recurrence": ["RRULE:FREQ=MONTHLY;BYSETPOS=1;BYDAY=FR"],
    "colorId": "5"
  }' | jq -r '"✓ Abertura Comercial Conjunta: " + .summary + " (" + .id + ")"'

# Kickoff Mensal SDR - 1ª sexta 9h30-10h30, 60min (após Abertura Conjunta)
curl -s -X POST "https://www.googleapis.com/calendar/v3/calendars/$CALENDAR_ID/events" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "summary": "Kickoff Mensal SDR Agência",
    "description": "Fechar mês anterior, reconhecer destaques, apresentar bônus e alinhar metas individuais para novo mês.\n\nPré-requisito: Acontece logo após a Abertura Comercial Conjunta (9h–9h30).\n\nAgenda:\n1. Ranking do mês — agendamentos, shows, vendas geradas (15 min)\n2. Reconhecimento público do destaque interno do time (5 min)\n3. Bônus pagos por SDR (10 min)\n4. Metas individuais do mês novo (20 min)\n5. Foco tático do mês — objeções, scripts, abordagens (10 min)",
    "start": {"dateTime": "2026-05-01T09:30:00-03:00", "timeZone": "America/Sao_Paulo"},
    "end": {"dateTime": "2026-05-01T10:30:00-03:00", "timeZone": "America/Sao_Paulo"},
    "recurrence": ["RRULE:FREQ=MONTHLY;BYSETPOS=1;BYDAY=FR"],
    "colorId": "11"
  }' | jq -r '"✓ Kickoff Mensal SDR: " + .summary + " (" + .id + ")"'

echo ""
echo "Todos os eventos foram criados!"
