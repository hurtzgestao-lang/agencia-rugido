# Estrutura dos slides · 12 tipos canônicos

Cada slide segue um layout específico com classes CSS dedicadas. Ver `template-base.html` pra ter o HTML completo de cada um.

> Nota · O slide de Onboarding 14 dias foi removido em abr/2026 — era redundante com o slide de Próximos Passos (bege) que já cobre os primeiros 7 dias. Gantt cobre o macro de 10 semanas. As classes CSS `.pos-*` permanecem no template pra retrocompatibilidade, mas não devem ser usadas em propostas novas.

---

## 00 · CAPA (hero-layout)

**Posição:** Sempre slide 0
**Classe principal:** `.hero-layout`
**Estrutura visual:** lado esquerdo texto + lado direito 4 badges

**Conteúdo:**
- `eyebrow`: "Engenharia de Receita · {Cliente}"
- `display-h`: headline principal (2 linhas, máx 60 caracteres por linha)
- `subtitle`: 2-3 frases sobre escopo + cronograma
- `hero-meta`: 3 valores grandes (números/textos curtos com label)
- `hero-badge-grid`: 4 badges 2×2 com números/textos curtos

**Headline:** É a peça mais importante do documento. Resume a proposta em 1 frase. Nunca prometer garantia.

Exemplos de headlines:
- "Transformar 22 anos de método consultivo em uma máquina de receita previsível." (Main Route)
- "Estruturar a máquina comercial da CRM7 pros 48 novos contratos do segundo semestre." (CRM7)
- "Cortar o churn de 15-20% pra abrir espaço pros R$ 300k de meta." (GR Performance)
- "Capturar o valor que vocês já entregam antes do cliente comparar preço." (Marcio Contabilidade)

**Hero meta (3 itens):** valores-âncora da proposta. Ex:
- "48" novos contratos
- "R$ 12M" meta anual
- "5" entregáveis

**Hero badges (4 cards 2×2):** dados específicos do cliente. Ex:
- "50 → 75%" conexão MQL
- "170 → 220k" ticket alvo
- "Mai-Jul" 10 semanas de setup
- "Anúncios" pra franqueadoras

---

## 01 · CENÁRIO (cenario-layout)

**Posição:** Slide 1
**Classe:** `.cenario-grid` com 2 colunas (`.cenario-col.built` + `.cenario-col.next`)

**Estrutura visual:** 2 cards lado a lado.

**Conteúdo:**
- Card esquerdo: "O que {cliente} já construiu" + lista de 4 pontos fortes (pontos positivos · não acusatório)
- Card direito: "Onde entra a engenharia de receita" + lista de 4 oportunidades (pontos da próxima fronteira · não problemas)

**Tom:** Reconhecedor, não acusatório. NUNCA listar "4 dores" do cliente — listar "Construído + Próxima Fronteira" (Opção A do briefing-DiBai).

**Specs do `.cenario-col-list li` (calibrado em 29/04/2026 · segunda iteração):**
- **Hard limit caracteres: 100** por bullet (incluindo `<strong>` + descrição)
- **Máximo 5 bullets por coluna** (5 × ~100 chars cabem confortavelmente · mais que isso quebra o layout)
- **Estrutura:** `<li><strong>Frase âncora curta</strong> · descrição complementar</li>`
- **Citação literal sustentada:** se a citação tem 80+ chars, NÃO adicione descrição complementar — ela se sustenta sozinha
- **Defesa CSS:** `.cenario-col-list` tem `overflow: hidden` (defesa contra estouro vertical · adicionado em 29/04/2026)

**Specs CSS calibradas (29/04/2026 · segunda iteração):**

| Regra | Antes | Depois |
|---|---|---|
| `.cenario-col` padding | `24px 28px` | **`20px 24px`** |
| `.cenario-col` gap | `16px` | **`12px`** |
| `.cenario-col-title` font-size | `22px` | **`19px`** |
| `.cenario-col-list` gap | `10px` | **`7px`** (+ `overflow: hidden`) |
| `.cenario-col-list li` font-size | `13px` | **`12px`** |
| `.cenario-col-list li` line-height | `1.5` | **`1.4`** |
| `.cenario-col-list li` padding-left | `18px` | **`16px`** |
| `.cenario-col-list li::before` top | `9px` | **`8px`** |
| `.cenario-col-list li::before` width | `10px` | **`8px`** |

- **Nota:** Calibrado em 29/04/2026 (segunda iteração) — só 100 chars não bastava, foi necessário reduzir font-size de 13→12px, line-height 1.5→1.4, gap 10→7px, padding 24→20px, font-size do título 22→19px. Léo confirmou que cabe corretamente após essa calibragem.

---

## 02 · PONTO A → B (ab-layout)

**Posição:** Slide 2
**Classe:** `.ab-table` (grid 3 colunas, 5-7 linhas)

**Estrutura visual:** Tabela com 3 colunas (Dimensão · Hoje · Em N semanas).

**Conteúdo:**
- 1 linha header
- 5-7 linhas de dimensões (escolher as mais relevantes pro caso)

**Dimensões típicas:**
- Aquisição
- Conexão MQL
- Ticket médio
- Conversão de funil
- Churn / LTV
- Pré-venda / Operação
- Closer / Capacidade
- Inteligência / Previsibilidade

**Regras:**
- Coluna "Antes" não acusatória — descreve estado atual sem julgar
- Coluna "Depois" não promete absoluto — usa "estruturado", "calibrado", "estabilizado", não "10× mais", "garantido"
- Máximo 7 linhas (mais quebra layout)

---

## 03 · VISÃO GERAL (ov-grid)

**Posição:** Slide 3
**Classe:** `.ov-grid` (3 colunas × 2 linhas = 6 cards)

**Estrutura visual:** 6 cards · cada um representa 1 entrega ou roadmap ou fora de escopo.

**Conteúdo dos cards:**
- 3-5 cards com módulos V-* core (1 deles destacado com `.featured`)
- 0-3 cards `.placeholder` com:
  - "ROADMAP · F2/F3/F4" (próximas fases)
  - "FORA DE ESCOPO · Já funciona" (o que cliente já tem)

**Specs do `.ov-desc` (calibrado em 28/04/2026):**
- **Limite caracteres: 140** (era 180)
- **CSS: line-clamp 6** (era 5)
- **font-size: 11.5px** (era 12)
- **line-height: 1.4** (era 1.45)
- **Nota:** Calibrado em 28/04/2026 após detectar cortes visuais. Cliente reportou texto truncado (Lucas: "tá deixando o texto cortado ainda pô"). A combinação de fonte ligeiramente menor + 1 linha extra de espaço resolve o corte sem precisar reformular layout.

**Card destacado (FOCO PRINCIPAL):**
- Classe `.ov-card.featured`
- Borda verde mais forte (`rgba(53,193,46,0.45)`)
- Glow verde no topo
- Tag de estágio em verde
- Código do módulo escrito como "V-XX · Foco principal"

**Card placeholder:**
- Classe `.ov-card.placeholder`
- Background mais escuro (`var(--brown)`)
- Borda dashed cinza
- Texto em opacidade reduzida

---

## 04, 05, 06... · ENTREGAS (entregavel-grid)

**Posição:** Slides 4 a N-3 (depois da Visão Geral, antes da Matemática do Funil)
**Classe:** `.entregavel-grid` (2 colunas × 2 linhas)

**PADRÃO ATUALIZADO ABR/2026 — 3 CARDS · COLUNA DIREITA INTEIRA PRO "O QUE ENTREGAMOS"**

Decisão Lucas · 28/04/2026: card "O que entregamos" sempre vinha cortado por ter mais texto. Solução estrutural:
- **Eliminar o card 04 · Quando entra** (info já está no Gantt)
- Card 02 · "O que entregamos" passa a ocupar a **coluna direita inteira** (vertical) com `class="card tall"` → `grid-row: span 2`
- Liberdade pra escrever 5-7 bullets sem cortar

**Layout visual:**
```
┌────────────────────┬────────────────────┐
│ 01 · O que resolve │                    │
│ (texto corrido)    │ 02 · O que         │
├────────────────────┤ entregamos         │
│ 03 · O que você    │ (lista 5-7 bullets │
│ passa a ter        │ · ocupa lateral    │
│ (3 bullets)        │ direita inteira)   │
└────────────────────┴────────────────────┘
```

**Header:**
- 3-4 tags coloridas (estágio, pilar, código do módulo, "Foco principal · maior alavanca" se aplicável)
- Título do módulo (h2)
- Subtítulo descritivo

**3 cards canônicos:**
| Card | HTML | Conteúdo | Estilo |
|---|---|---|---|
| `01 · O que resolve` | `<div class="card">` | Texto corrido (1 parágrafo) | Sem bullets · esquerda topo |
| `02 · O que entregamos` | `<div class="card tall">` | **Lista 7-9 bullets ricos · `**negrito**` em palavra-chave + descrição** | Bullets detalhados · LATERAL DIREITA INTEIRA |
| `03 · O que você passa a ter` | `<div class="card">` | Lista 3 bullets · resultado pro cliente | Bullets simples · esquerda baixo |

**Hard limits por card (calibrado em 29/04/2026):**

| Card | Tipo | Limite | Defesa CSS |
|---|---|---|---|
| `01 · O que resolve` | `.card` normal · texto corrido | **≤ 220 chars** (1-2 frases) | `.card .card-body` tem `-webkit-line-clamp: 12` |
| `02 · O que entregamos` | `.card.tall` · lista | **6-7 bullets · cada ≤ 110 chars** | `.card.tall .card-body` tem `line-clamp: unset` (expansão livre até span 2) |
| `03 · O que você passa a ter` | `.card` normal · lista curta | **3 bullets · cada ≤ 80 chars** | mesmo clamp do card 01 |

**Card "01 · O que resolve" — anti-padrão:**

Texto de 350+ chars estoura porque o card é a metade da altura do tall. Estratégia: 1 frase identificando o problema central + 1 frase mostrando o que a entrega resolve. Sem 3ª frase.

**Nota:** Calibrado em 29/04/2026 após cortes visuais detectados pelo Léo nas propostas Cleide. Cards "01 · O que resolve" estavam recebendo blocos de 350-498 chars e estourando.

**IMPORTANTE — calibragem do card 02 tall (validado abr/2026):**

Altura efetiva pra bullets = ~350px. Cada bullet ocupa:
- 1 linha (até ~70 chars) = ~30px
- 2 linhas (70-110 chars) = ~50px
- 3 linhas (>110 chars) = ~70px

**Regra de polegar:** **6-7 bullets, cada um até ~110 chars (1-2 linhas máximo)**.

| Bullets | Tamanho médio | Cabe? | Visual |
|---|---|---|---|
| 5 bullets curtos | <70 chars | ✅ cabe | ❌ espaço vago feio |
| **6-7 bullets médios** | **~80-110 chars** | ✅ cabe bem | ✅ preenche bonito |
| 8 bullets médios | ~80-110 chars | ⚠️ no limite | risco de cortar |
| 8+ bullets longos | >110 chars | ❌ ESTOURA | últimos cortados |

**Padrão de escrita:** cada bullet começa com `<strong>palavra-chave</strong>` seguida de `· descrição curta`.

Anti-padrões:
- ❌ 3-4 bullets curtos = card visualmente vazio
- ❌ 8+ bullets ricos = estoura · últimos bullets cortados (sem indicação visual)
- ❌ Bullets de 3+ linhas = empurra os outros pra fora

**CSS auto-aplicado no `.card.tall`:**
```css
.card.tall { grid-row: span 2; padding: 18px 22px; gap: 12px; }
.card.tall .card-body { font-size: 13px; line-height: 1.55; }
.card.tall .card-body ul { gap: 10px; }
.card.tall .card-body li { font-size: 13px; line-height: 1.5; padding-left: 14px; }
```

**Exemplo bom (Aser · V-A1 · 7 bullets):**
```html
<li><strong>Auditoria da agência terceirizada</strong> · análise dos R$ 50k investidos em 6 meses · criativos rodados · plataformas testadas · leads gerados vs qualificados</li>
<li><strong>Mapeamento da operação outbound</strong> · cadência dos 2 BDRs · taxa de conexão · taxa de reunião marcada · taxa de show · taxa de proposta</li>
<li><strong>Diagnóstico do site atual</strong> · análise de SEO técnico · estrutura de páginas · narrativa de autoridade · pontos de conversão · gaps pra ICP</li>
<!-- ...mais 4 bullets do mesmo padrão -->
```

**Ordem no HTML importa:** 01 → 02 (tall) → 03. Grid preenche linha-a-linha · o `tall` no card 02 faz ele ocupar (1,2) E (2,2) · o card 03 cai automaticamente em (2,1).

**CSS necessário:**
```css
.card.tall { grid-row: span 2; }
```

**Anti-padrão (não fazer mais):**
```html
<!-- ❌ NÃO USAR — padrão antigo (4 cards 2×2 com card 04 redundante) -->
<div class="card"><div class="card-head"><span class="card-label">04 · Quando entra</span></div>...</div>
```

**Por que cortar o "Quando entra":**
- Info redundante com o Gantt (slide 09)
- Ocupava espaço que poderia dar mais ar pro "O que entregamos"
- Cliente lê o cronograma uma vez no Gantt · não precisa ler 4 vezes (1× por entrega)

---

## 0N · MATEMÁTICA DO FUNIL (funnel-flow)

**Posição:** Depois da última entrega, antes do Gantt
**Classe:** `.funnel-flow` (4 cards horizontais com setas)

**Estrutura visual:**
- 4 cards conectados por setas → (`::after { content: '→' }`)
- Card final tem classe `.final` (borda verde, valor maior em verde)
- Embaixo: `.funnel-bottom` com 3 stats (1 destacado em verde com `.highlight`)

**Conteúdo dos cards (4 etapas):**

Adapte conforme o caso. Exemplos:

**Caso aquisição (CRM7):**
1. Investimento — R$ 30k mídia paga
2. Cenário MQL — ~480 MQLs projetados (R$ 62/MQL)
3. Cenário reuniões — ~60 reuniões (R$ 500/reunião)
4. Conversão — Taxas internas do cliente (DASHED · "Não está no escopo")

**Caso retenção (GR Performance):**
1. Hoje — 17,5% churn
2. Sangria — ~R$ 28k saindo/mês
3. LTV atual — 2,5 meses
4. Cenário alvo — ~10% projetado (verde)

**Caso conversão (Marcio):**
1. Hoje — 59 leads/mês
2. Conversão — 10-12% atual
3. Cenário alvo — 15-20% projetada
4. Resultado — +3 a +5 vendas/mês (verde)

**Bottom stats (3 cards):**
1. Stat atual (referência)
2. Stat destacado (.highlight) — geralmente o ganho projetado
3. Meta declarada do cliente

**Regra crítica:** NÃO prometer receita absoluta. Última etapa do flow pode mostrar projeção, mas com linguagem "cenário projetado", não "vai dar X".

---

## 0N · GANTT (gantt-layout)

**Posição:** Depois da Matemática do Funil
**Classe:** `.gantt-layout`

**IMPORTANTE · padrão atualizado abr/2026:** Gantt em **versão grande** (mais tangibilidade visual). Decisão Lucas + Raul · 28/04/2026 · "o cara olhar o grande já entende quando vai acontecer".

Specs do Gantt grande (já no template-base.html):
- `gantt-task-row` height: **40px** (era 24px)
- `gantt-task-bar` height: **28px** (era 18px)
- `gantt-task-label-text strong` font: **14px** (era 11px)
- `gantt-tl-date` font: **12px** (era 10px)
- `gantt-milestone` size: **14px** (era 10px)
- Labels de marco font: **11px** (era 9px)
- **Offset do label do marco:** `+ 24px` da posição do losango (era `+ 14px`) — evita texto sobreposto ao losango maior

**Estrutura visual:**
- Header com legenda de fases (3-4 fases coloridas: verde, bege, azul, violeta)
- Linha do tempo com marcadores de semanas (Sem 1, Sem 3, Sem 6, Sem 9, Sem 12)
- 3-4 fases com tarefas dentro
- Marcos em losango (◇) com texto curto (ex: "7 dias", "Sem 6 · Campanhas vivas")

**Fases típicas:**
- Fase 1 · Diagnóstico (verde) — apenas V-A1
- Fase 2 · {Marketing/Pré-venda/etc} (bege) — 1-2 módulos
- Fase 3 · {Conversão/Vendas} (azul) — 1-2 módulos
- Fase 4 · Inteligência (violeta) — apenas se V-T1 entrar

**Posicionamento das barras:**
- V-A1: 0% a 7% (semana 1, 7 dias) — padrão comprimido pra dar urgência
- Outros: variável conforme `Quando entra` de cada módulo

**Por que Gantt grande:**
- O cliente olha o slide e em 3 segundos entende quando cada coisa vai acontecer
- Deixa claro que tem trabalho concreto sendo entregue cedo (V-A1 em 7 dias)
- Tangibiliza o cronograma sem precisar ler texto

---

## 0N · MAPA DA JORNADA (jornada-flow)

**Posição:** Opcional · depois do Gantt
**Classe:** `.jornada-flow` (grid 7 colunas)

**Estrutura visual:** 7 colunas (1 por estágio da jornada do cliente).

**Estágios canônicos:**
1. Descoberta
2. Atenção
3. Consideração
4. Decisão
5. Experiência
6. Recompra
7. Indicação

**Cada coluna:**
- Número do estágio (01-07)
- Nome do estágio
- Pontos de contato (2-3 itens)
- Entregáveis que operam ali (tags verdes)
- Estágios não cobertos: classe `.dim` + texto "Próxima fase" ou "Já funciona"

**Transversais:**
- Bloco embaixo (`.jornada-transversais`) com itens que operam em todos os estágios cobertos
- Tipicamente V-A1 (sempre) e V-T1 ou V-O1 se aplicável

---

## 0N · ROADMAP (exp-grid)

**Posição:** Opcional · depois da Jornada
**Classe:** `.exp-grid` (2 ou 3 colunas dependendo do número de cards)

**Estrutura visual:** Cards dashed (estilo "futuro") em grid + nota explicativa embaixo.

**Conteúdo:**
- 2-6 cards de fases futuras
- Cada card: badge de fase (F2, F3, F4), tag de pilar, título, descrição

**Tipos comuns:**
- LinkedIn orgânico / marca pessoal
- Canal YouTube / podcast
- Cross-sell entre produtos
- Programa formal de indicação
- ABM pra contas-alvo
- Segundo time consultivo

**Regra:** Não inflar com 6 cards se não fizer sentido. 2-3 cards bem escolhidos > 6 superficiais.

---

## 0N · COMUNICAÇÃO DIÁRIA (entregavel-grid)

**Posição:** Opcional · antes do Investimento
**Classe:** Reusa `.entregavel-grid` (4 cards)

**Conteúdo dos 4 cards:**
1. `01 · Diariamente` — atualização contínua, canal de preferência
2. `02 · Semanalmente` — reunião de 45 min · pauta documentada
3. `03 · Atribuição de resultado` — cada lead rastreado pela origem
4. `04 · Visibilidade total` — métricas claras, painel atualizado

**Tom:** compromisso de transparência, não vende escopo extra.

---

## 0N · INVESTIMENTO (inv-layout)

**Posição:** Antepenúltimo (antes de Próximos Passos)
**Classe:** `.inv-layout` com `.inv-totalcard` + `.inv-optionscard`

**Estrutura visual:** 2 cards lado a lado.

**PADRÃO ATUALIZADO ABR/2026 — DESTAQUE VISUAL NA PARCELA, NÃO NO TOTAL**

Decisão Lucas · 28/04/2026: o destaque visual no card esquerdo passa a ser o **valor da parcela mensal (12× cartão)**, não o total. Motivo psicológico/pricing:
- Cliente vê "R$ 1.000/mês" como número primário · ancoragem mais leve
- Total continua visível, mas em "saque" (muted · cinza · fonte menor)
- Transparência mantida (total não escondido) · só repriorizado visualmente

**Card esquerdo (.inv-totalcard) · estrutura nova:**
1. **Linha "Setup de implementação"** (normal · valor R$ X.000 em fonte média)
2. **Bloco `.inv-highlight`** ← DESTAQUE VERDE GRANDE
   - Eyebrow: "A partir de"
   - Valor: **R$ X.XXX/mês** (font-size: 38px · verde · fonte mono)
   - Sub: "12× sem juros no cartão · [contexto cliente]"
3. **Linha "Investimento total"** (`.inv-line.muted` · opacity: 0.65 · fonte menor)
   - Total fica em "saque" · não some, mas não compete com o destaque

**Padrão HTML:**
```html
<div class="inv-totalcard">
  <div class="inv-line">
    <div><span class="inv-line-label">Setup de implementação</span><span class="inv-line-sub">12 semanas · entrega das X entregas</span></div>
    <span class="inv-line-value">R$ 30.000</span>
  </div>
  <div class="inv-highlight">
    <span class="inv-highlight-label">A partir de</span>
    <span class="inv-highlight-value">R$ 3.000<span class="inv-highlight-period">/mês</span></span>
    <span class="inv-highlight-sub">12× sem juros no cartão · investimento diluído ao longo do ciclo</span>
  </div>
  <div class="inv-line muted">
    <div><span class="inv-line-label">Investimento total</span><span class="inv-line-sub">X entregas + equipe Rugido alocada · sem retainer mensal</span></div>
    <span class="inv-line-value muted">R$ 30.000</span>
  </div>
</div>
```

**Cuidado CSS:** `.inv-line-value` precisa de `white-space: nowrap; flex-shrink: 0;` pra não quebrar linha. `.inv-highlight-value` também (R$ 3.000/mês todo numa linha).

**PADRÃO ATUALIZADO ABR/2026 — APENAS 2 CONDIÇÕES**

Decisão Lucas + Raul · 28/04/2026: deixar **só À vista + 12× cartão** na proposta. A opção 3× Pix sai do papel.

**Por quê:**
- 3 opções fazem o cliente discutir o parcelado e empata o fechamento
- "O cara vai discutir em cima de três de 11" — opção pix dá ancoragem ruim (cliente fixa nesse valor)
- 3× Pix vira **negociação verbal** se o cliente pedir condição alternativa ("Como posso fazer pra ti?")
- Mantém poder de negociação na contraproposta · não entrega tudo de cara

**Card direito (.inv-optionscard) · padrão atual:**
- 2 condições de pagamento + 1 bloco "Incluso"
- Condição A · À vista (Pix/boleto)
- Condição B · Cartão em 12× (com markup ~20%)
- Bloco "Incluso" (cinza · resumo do que está incluso)

**Padrões de pagamento:**

| Setup | À vista | 12× cartão (markup ~20%) | 3× Pix (negociação verbal · não no slide) |
|---|---|---|---|
| R$ 18.000 | R$ 18.000 | 12× R$ 1.800 (R$ 21.600) | 3× R$ 6.800 (R$ 20.400) |
| R$ 20.000 | R$ 20.000 | 12× R$ 2.000 (R$ 24.000) | 3× R$ 7.800 (R$ 23.400) |
| R$ 25.000 | R$ 25.000 | 12× R$ 2.500 (R$ 30.000) | 3× R$ 9.500 (R$ 28.500) |
| R$ 30.000 | R$ 30.000 | 12× R$ 3.000 (R$ 36.000) | 3× R$ 11.400 (R$ 34.200) |

**Regras:**
- Mostrar 2 condições no slide (à vista + 12× cartão)
- Guardar 3× Pix como contraproposta na conversa
- Bloco "Incluso" descreve o que vai com o setup
- Se mídia paga, mencionar separadamente: "Custo de mídia pago direto pelas plataformas, separado do investimento"
- Se SDR humano (V-E1 dual track), separar: "Contratação direta do cliente, custo separado"

---

## 0N (último) · PRÓXIMOS PASSOS (next-layout · slide BEGE)

**Posição:** Sempre último slide
**Classe:** `.slide.beige` (background bege, texto preto · cores invertidas)

**PADRÃO ATUALIZADO ABR/2026 — 3 PASSOS · SEM BOTÃO CTA · HEADLINE AFIRMATIVA**

Decisão Lucas + Raul · 28/04/2026:
1. **Tirar passo "Decisão de seguir"** — é redundante com a apresentação da proposta. Cliente já está vendo a proposta — não precisa de slide pra dizer "decida". Antes a estrutura era 4 passos com o primeiro sendo "decisão"; agora 3 passos focando no que acontece DEPOIS do "sim".
2. **Tirar botão CTA "Avançar com a proposta"** — proposta é PDF/HTML, não site. Botão clicável dá impressão de form web. Slide bege final fica sem botão · só os 3 passos.
3. **Trocar headline condicional por afirmativa** (Lucas · 28/04 noite) — antiga "Se fizer sentido pros dois lados, o caminho pra começar é direto" tinha "se" condicional fraco. Nova: **"Da decisão à primeira entrega · 7 dias corridos."** É promessa concreta, reforça velocidade.

**Headline padrão:**
- `<h2 class="next-display">Da decisão à primeira entrega · 7 dias corridos.</h2>`
- Variações pro contexto: "Da decisão ao BDR em campo · 7 dias", "Da decisão ao primeiro lead · 7 dias"
- Subtítulo descreve o que acontece concretamente (ex: "Três passos até o cronograma rodar. Auditoria completa na sua mesa antes da segunda semana.")

**Estrutura visual:**
- Hero claro com título grande
- 3 cards horizontais (Assinatura · Kickoff · Primeira entrega)
- Sem CTA · sem botão · sem hint final

**Conteúdo dos 3 cards:**
1. `01 · Assinatura e marco zero` — a partir do "sim", contrato é enviado · contagem das X semanas começa
2. `02 · Kickoff` — reunião 90 min com equipe Rugido · auditoria iniciada no dia 3
3. `03 · Primeira entrega em 7 dias` — auditoria completa · mapa de pontos de fuga + lista priorizada de ações por ROI

**Grid CSS pra 3 colunas:**
```html
<div class="next-steps" style="grid-template-columns: repeat(3, 1fr);">
```

**Anti-padrão (não fazer mais):**
```html
<!-- ❌ NÃO USAR mais — padrão antigo (4 passos + botão) -->
<div class="next-cta-wrap">
  <a href="#" class="cta-pill-dark">
    <span>Avançar com a proposta</span>
    ...
  </a>
</div>
```

**Numeração:** o slide bege precisa de SVG com cores `#0f0e0c` (preto) ao invés de `#efedea` (creme) e bottom-right com style `color: rgba(15,14,12,0.5)`.

---

## Numeração e bottom-right

Cada slide termina com:

```html
<div class="bottom"><span class="bottom-left">{texto descritivo curto}</span><span class="bottom-right">{XX} / {N}</span></div>
```

Onde N = total de slides - 1 (porque conta do 00).

Exemplos:
- 13 slides total: 00/12, 01/12, ..., 12/12
- 15 slides total: 00/14, 01/14, ..., 14/14
- 18 slides total: 00/17, 01/17, ..., 17/17

**Regra de adaptação:** se um slide é adicionado/removido, **renumerar todos os slides afetados**. Senão fica inconsistente.

---

## Nav-step (topo de cada slide)

```html
<span class="nav-step">{XX} · {Título curto em UPPERCASE}</span>
```

Capa tem nav-step diferente: `Proposta · {Mês} {Ano}`.

Slide 06 do CRM7 inicial era: `06 · Pré-venda · Foco principal` (com sub-título do badge).
