# Proposta Interna vs Proposta Comercial · Quando usar cada uma

A skill `criador-de-propostas` produz DOIS tipos de deck no padrão Cluster Design System:

1. **Proposta Comercial** (default · 95% dos casos) — pra cliente B2B fechar contrato
2. **Apresentação Interna** (5% dos casos) — pra alinhar metas/processos com o time da Rugido

Ambos usam o mesmo CSS, mesma estética visual, mesma estrutura de slides básica. **Mas o tom, o conteúdo e alguns elementos visuais mudam.**

**Calibrado em mai/2026 após o "Plano Comercial Maio 2026" criado pra alinhar o time.**

---

## Diferenças críticas

| Elemento | Proposta Comercial | Apresentação Interna |
|---|---|---|
| **Eyebrow** | "Engenharia de Receita · {Cliente}" | "Time Comercial · Plano {Mês} {Ano}" ou "Operação Interna · {Tema}" |
| **Headline** | Tese da venda | Meta do mês · objetivo do time |
| **Bottom-left** | "Proposta Confidencial" | "Confidencial · Time Interno" |
| **Slide de Investimento** | Sempre presente · 3 componentes (setup + parcela + total) | **REMOVIDO** · não é venda |
| **Slide bege final** | "Próximos Passos" pra fechar contrato (3 cards: Assinatura · Kickoff · Primeira entrega 7 dias) · headline "Da decisão à primeira entrega · 7 dias corridos." | "Próximas {N} semanas" · cards com responsáveis e entregáveis · headline ajustada (ex: "O que cada frente entrega nas 4 semanas de maio.") |
| **CTA clicável** (`.cta-pill-dark`) | Pode aparecer | **REMOVIDO** · não é proposta de venda |
| **Vocabulário técnico** (Spiced, MQL, BDR, ICP) | EVITAR (cliente não conhece) | LIVRE (time conhece e usa) |
| **Tom** | Vendedor · convencer | Direto · alinhar |
| **Citações** | Do cliente · da R1 | Internas · do líder · de mentores |
| **Slide de Visão Geral** | "{N} entregas que [resolvem dor]" | "{N} frentes do plano" ou "{N} pilares operacionais" |
| **Investimento numérico** | Setup R$X · 12× R$Y | Pode mostrar metas (faturamento, conversão, custo) mas SEM cobrar |
| **Slide bege final · CTA** | "Avançar com a proposta" (clicável) | Sem CTA · só lista de entregáveis e responsáveis |

---

## Estrutura de slides · Apresentação Interna

Mesma base da proposta comercial, com 2 ajustes:

**12 slides padrão (00-11):**

00 · Capa · "{Tema} · {Mês} {Ano}" · meta do mês · hero badges com KPIs internos
01 · Cenário · "Onde estamos" (built · diagnóstico) vs "Onde queremos chegar" (next)
02 · Ponto A → B · 5 dimensões (estado atual vs estado-alvo do mês)
03 · Visão Geral · 6 cards (frentes do plano · 1 featured como "maior alavanca")
04 · Detalhamento da frente 1 (geralmente metodologia/processo)
05 · Detalhamento da frente 2 (geralmente o foco principal · red tag)
06 · Detalhamento da frente 3
07 · Detalhamento da frente 4 (opcional)
08 · Matemática do funil / KPIs (cascata: investimento → MQL → reunião → venda)
09 · Cronograma Gantt (curto · 4-12 semanas)
10 · ❌ NÃO TEM Investimento (REMOVIDO · pasta interno)
11 · Slide bege final · "Próximas N semanas · O que cada frente entrega"

**Resultado: 11 slides (não 12).**

---

## Como adaptar o CSS pra Apresentação Interna

CSS é o MESMO (copia verbatim do template-base.html). 3 ajustes pequenos no slide bege:

**1. Remover `.next-cta-wrap` e `.cta-pill-dark`** do HTML do último slide. Não é proposta de venda · não tem botão clicável.

**2. Headline do slide bege** muda:
- Comercial: "Da decisão à primeira entrega · 7 dias corridos."
- Interno: "O que cada frente entrega nas próximas {N} semanas."

**3. Bottom-left do slide bege:**
- Comercial: `Próximos passos · {Cliente}`
- Interno: `Confidencial · Time Interno · {Tema} {Mês} {Ano}`

---

## Como adaptar a estrutura

### Cenário (slide 01)

Comercial:
- Built: o que CLIENTE construiu
- Next: onde a Rugido entra como solução

Interno:
- Built: o que A RUGIDO construiu até aqui
- Next: o que ainda trava o resultado · o que precisa ser executado

### Visão Geral (slide 03)

Comercial:
- Cards: V-A1, V-M1, V-E1, V-E2, etc · módulos do projeto pro cliente

Interno:
- Cards: frentes operacionais (atribuição CRM, funil cascata, SDRs, faixas de preço, daily, treinamento)
- Não usa códigos V-XX · usa nomes da operação

### Cards de detalhamento (04-07)

Mantém o padrão 3-card layout (`.card.tall` no card 02). Apenas o conteúdo muda:

**Card 01 · O que resolve** → "Por que essa frente importa"
**Card 02 · O que entregamos** (`.card.tall`) → "O que cada um faz" (responsáveis + entregáveis)
**Card 03 · O que você passa a ter** → "O que muda no dia-a-dia"

### Matemática do funil (slide 08)

Comercial: cenário projetado pro cliente
Interno: META do mês com cascata real (investimento → MQL → reunião → venda)

Bottom stats:
- Atual (ex: R$22k cash collected abril)
- Meta (ex: R$165k cash collected maio · highlight green)
- Diferencial (ex: custo por reunião realizada R$354)

### Slide bege final (slide 11)

Comercial: "Da decisão à primeira entrega · 7 dias corridos."
- Card 01 · Assinatura e marco zero
- Card 02 · Kickoff
- Card 03 · Primeira entrega em 7 dias

Interno: "O que cada frente entrega nas próximas N semanas."
- Card 01 · Semana 1 · {entregáveis + responsáveis}
- Card 02 · Semanas 2-3 · {entregáveis}
- Card 03 · Semana 4 · {entregáveis + revisão}

---

## Quando usar Apresentação Interna

✅ **Usar quando:**
- Lucas pede deck pra alinhar com o time da agência ou da escola
- Reunião all-hands trimestral · planejamento mensal
- Documento de "estado da operação" pra novos contratados
- Apresentação de meta/plano mensal pro time comercial
- Briefing pra times de squads (engenharia de receita, operação, etc.)

❌ **Não usar quando:**
- É pra cliente B2B (sempre usa proposta comercial)
- É documento técnico interno (usa Markdown · não slide HTML)
- É briefing pro closer (usa formato `briefing-closer-{slug}.md`)

---

## Anti-padrões da Apresentação Interna

❌ **Não pôr investimento** (`R$X setup · 12× R$Y`) num deck interno. Não é venda.

❌ **Não pôr "Avançar com a proposta"** como CTA. Time não compra de Lucas.

❌ **Não pôr "Cliente confidencial"** no bottom-left. Trocar por "Confidencial · Time Interno".

❌ **Não usar tom comercial** ("traga retorno", "ROI"). Usar tom de gestão ("entrega", "responsável", "deadline").

❌ **Não usar V-A1, V-M1, V-E1** como nomenclatura nos cards de visão geral · usar nomes da operação (atribuição CRM, funil cascata, SDRs, etc.).

---

## Exemplos canônicos

### Apresentação Interna

**`AGENCIA/apresentacoes/plano-comercial-mai2026.html`** (criada 1/mai/2026)

- Eyebrow: "Time Comercial · Plano Maio 2026"
- Headline: "De R$22k de cash collected em abril pra R$165k em maio · disciplina e processo."
- 12 slides (00-11) · sem investimento · sem CTA clicável
- Slide bege final: "O que cada frente entrega nas 4 semanas de maio."
- Bottom-left: "Confidencial · Time Interno"
- Vocabulário técnico LIVRE (Spiced, MQL, SDR, Critical Event)

### Proposta Comercial (referência canônica · contraste)

**`CLIENTES/propostas/2026-04-30/proposta-cleide-mercado-livre-energia-abr2026.html`**

- Eyebrow: "Engenharia de Receita · Cleide · Mercado Livre Energia"
- Headline: "Lead com levantada de mão real..."
- 11-12 slides · Investimento presente · CTA "Avançar com a proposta"
- Slide bege final: "Da decisão à primeira entrega · 7 dias corridos."
- Bottom-left: "Proposta Confidencial"
- Vocabulário cliente-friendly (sem MQL · sem high ticket)

---

## Decisão rápida · qual usar

```
O destinatário é cliente B2B externo? 
  SIM → Proposta Comercial (default)
  NÃO → Apresentação Interna

A finalidade é venda/contrato?
  SIM → Proposta Comercial
  NÃO → Apresentação Interna

Tem que mostrar preço/investimento?
  SIM → Proposta Comercial
  NÃO → Apresentação Interna

Vai ter "Próximos passos pra fechar contrato"?
  SIM → Proposta Comercial
  NÃO → Apresentação Interna · "Próximas N semanas"
```

Em caso de dúvida, default é **Proposta Comercial** (cliente externo · 95% dos casos).
