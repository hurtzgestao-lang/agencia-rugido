---
name: criador-de-propostas
description: "Gera propostas comerciais HTML no padrão Cluster Design System (dark mode, slides 1280×720) pra clientes da Agência Rugido. Use SEMPRE que o usuário pedir uma proposta nova, atualizar uma proposta existente, gerar PDF/HTML pra cliente, ou mencionar: 'cria proposta', 'monta proposta', 'proposta pra [cliente]', 'docs comercial', 'apresentação pra reunião', 'briefing pra closer', 'slide de investimento', 'cenário do cliente', 'engenharia de receita pra X'. Cobre: estrutura modular de 4-6 entregas (V-A1, V-M1, V-E1, V-E2, V-E3, V-PV1, V-T1, V-O1), matemática do funil sem prometer receita garantida, slide de investimento com 3 condições de pagamento, briefing de closer pós-proposta."
---

# Skill: Criador de Propostas Comerciais — Rugido

Você está montando uma proposta comercial pra cliente da Agência Rugido (Lucas Felix, B2B). O padrão visual é o **Cluster Design System** — dark mode, slides 1280×720, fonts Season Mix Regular (display) + Inter (body) + Geist Mono (números/labels), paleta verde-bege-creme.

A proposta é um arquivo HTML com slides empilhados verticalmente. Cada slide é uma `<div class="slide">` com altura fixa de 720px. O cliente abre no navegador e exporta pra PDF se quiser.

---

## ICP CONFIRMADO (30/abr/2026 · pós-reunião com Matheus Fiel)

A Rugido tem foco B2B com vendas de alto valor. Não é dono de loja virtual, não é PF, não é cara que quer aprender Meta Ads. É:
- Empresa B2B com inside sales complexo
- Ciclo de venda mais longo · ticket R$3-10k+ mensais (recorrente) ou contratos de R$30-50k+ (projeto)
- Decisor qualificado · entende processo comercial · faturamento R$100k+/mês geralmente
- Dor central: vendedor agressivo · follow-up infinito · lead chega frio · não fecha na 1ª reunião
- Mecanismo único da Rugido: **"gestão de jornada de compra"** · "lead pronto pra comprar"

A proposta deve usar a linguagem desse cara · não a linguagem técnica de marketing.

---

## ARQUIVOS DE REFERÊNCIA

Leia na ordem ao executar a skill:

1. **`references/workflow.md`** — Passo a passo do processo de criação (ler primeiro)
2. **`references/modulos-canonicos.md`** — Catálogo de módulos V-* documentado
3. **`references/estrutura-de-slides.md`** — Os 13 tipos de slide e quando usar cada um
4. **`references/regras-de-copy.md`** — Anti-padrões e regras de linguagem
5. **`references/template-base.html`** — Template HTML completo (CSS + skeleton de slides)
6. **`references/modelos-de-pricing.md`** — 3 modelos canônicos (Setup Único · BDR-as-a-Service · Híbrido) com calculadora mental de qual usar
7. **`references/calibragem-tom-por-perfil.md`** — 6 perfis de cliente (cético · aluno · empresário consolidado · solo · decisor compartilhado · cliente pessoal Lucas) com tom específico pra cada
8. **`references/proposta-interna-vs-comercial.md`** — Quando usar deck interno (sem CTA · sem investimento · "Confidencial Time Interno") vs proposta comercial
9. **`references/exemplos.md`** — Referência canônica · 4 propostas históricas (Main Route, CRM7, GR Performance, Marcio) + ~30 propostas da onda mai/2026 catalogadas por perfil/modelo/foco

---

## WORKFLOW RESUMIDO

### 1 · Coletar contexto do cliente

Pedir ou identificar:
- **Nome do cliente** (pessoa) e **empresa**
- **R1 do SDR** (transcript Fathom ou PDF do TurboScribe) — fonte primária
- **Análise SPICED prévia** se existir
- **Faturamento atual e meta**
- **Gargalo declarado** pelo lead (citação literal se possível)
- **Decisor único ou compartilhado?** (impacta tom da proposta)

Se algum dado essencial faltar, perguntar ao usuário. **Não inventar.**

### 2 · Extrair dados literais

Da R1 e materiais:
- Citações literais marcantes (entre aspas, com atribuição)
- Métricas concretas (ticket, leads/mês, conversão, churn, LTV)
- Vocabulário do próprio cliente (use o vocabulário dele, não traduza pra "industria-fala")
- Decisores e estrutura de time

### 3 · Definir tese central

Em **1 frase**, defina a proposta de valor pro cliente:

> **Estrutura:** "O cliente X já tem [pontos fortes]. O gargalo declarado é [problema]. A proposta foca em [solução] sem mexer em [o que já funciona]."

Exemplo (CRM7): *"A CRM7 já gera 600+ leads/mês via 3 canais. O gargalo declarado é conexão MQL de 50%. A proposta foca em geração de demanda qualificada com anúncios (foco) sem mexer no CRM unificado que vocês já têm."*

### 4 · Escolher módulos

Ler `references/modulos-canonicos.md` e selecionar **3 a 6 módulos** baseado no diagnóstico:
- **V-A1 sempre entra** (Auditoria · primeira entrega)
- Os outros V-* são selecionados pelo gargalo declarado
- **Definir 1 módulo como "Foco principal"** (badge vermelho "maior alavanca")

### 4.5 · Identificar perfil do cliente e modelo de pricing

**Antes de escrever**, ler `references/calibragem-tom-por-perfil.md` e identificar qual dos 6 perfis o cliente se encaixa:
1. Cético / "macaco velho" (45+ anos · já se decepcionou com curso caro · cobra cases reais)
2. Aluno do Bootcamp / outras escolas Rugido (entre pares · jargão técnico ok)
3. Empresário consolidado (operação madura · decisor experiente · 20+ anos)
4. Solo / iniciante estruturado (R$10-50k/mês · setup R$12-18k máximo)
5. Decisor compartilhado (vai aprovar com sócio/diretoria)
6. Cliente pessoal Lucas (CH5, Max Satiro, Heros · não usar como case na série Dia #)

**Tom da proposta MUDA** conforme o perfil. Mesmo CSS, mesmos módulos · mas headline, citações, validações são adaptadas.

**Em paralelo**, ler `references/modelos-de-pricing.md` e definir qual dos 3 modelos usar:
1. **Setup Único** (default · 90% das propostas · R$ X à vista ou 12× cartão)
2. **BDR-as-a-Service** (raro · cliente pediu terceirização explicitamente · R$X/mês × 6)
3. **Híbrido** (cliente pediu "X por mês + Y por lead" · setup + fixo + variável)

**Decisão rápida:** se há dúvida, **default é Modelo 1 + Setup Único** (mais barato pro cliente · mais alinhado com filosofia Rugido de "ensinar a pescar").

### 5 · Calcular matemática do funil

Slide novo importante. Cadeia 4 cards mostrando: **Entrada → Processamento → Saída intermediária → Saída final**. SEM prometer receita absoluta. Usar linguagem "cenário projetado", "referência baseada em campanhas reais".

Exemplos por contexto:
- **Aquisição (CRM7):** R$ 30k mídia → 480 MQLs → 60 reuniões → "Taxas do cliente"
- **Retenção (GR Performance):** 17,5% churn hoje → R$ 28k saindo/mês → LTV 2,5m → 10% projetado
- **Conversão (Márcio):** 59 leads/mês → 10-12% atual → 15-20% projetado → +3 a +5 vendas/mês

### 6 · Gerar HTML

Usar `references/template-base.html` como base. Cada proposta tem entre **12 e 18 slides** (00 a N-1).

**Slides obrigatórios:**
- 00 Capa
- 01 Cenário (Construído + Próxima Fronteira)
- 02 Ponto A → B
- 03 Visão Geral (cards das entregas + placeholders)
- 04...N-3 Slides de cada entrega (4 cards cada)
- Matemática do funil (depois da última entrega)
- Cronograma Gantt
- Investimento (com 3 condições)
- Próximos passos (slide bege final)

> Nota · Onboarding 14 dias removido em abr/2026 — era redundante com o slide de Próximos Passos (bege) que já cobre os primeiros 7 dias. Gantt cobre o macro de 10 semanas.

**Slides opcionais:**
- Mapa da jornada 7 estágios
- Roadmap (próximas fases)
- Comunicação diária

### 7 · Validar antes de entregar

Checklist obrigatório:
- [ ] Acentos PT-BR completos em **todos** os textos visíveis (regra absoluta — ver `regras-de-copy.md`)
- [ ] Numeração `XX / N` consistente em todos os bottom-right
- [ ] Nav-step "XX · Título" sequencial
- [ ] Investimento com 3 condições e valores que fecham aritmeticamente
- [ ] Sem promessas de receita garantida
- [ ] Sem invenção de números que cliente não confirmou
- [ ] Citações literais conferidas contra a R1
- [ ] Nomes próprios escritos corretamente (Cléber, Matheus, Gabriel etc.)

### 8 · Entregar arquivo

**PADRÃO ATUALIZADO ABR/2026 · agrupar propostas por data de APRESENTAÇÃO ao cliente.**

Salvar em: `CLIENTES/propostas/{YYYY-MM-DD}/proposta-{slug}-{mes}{ano}.html`

Onde:
- `{YYYY-MM-DD}` é a data em que a proposta será **apresentada/enviada ao cliente** (não a data de criação interna)
- `{slug}` é kebab-case ASCII do nome (ex: `mainroute`, `crm7`, `grperformance`, `marcio-contabilidade`, `bold-comunicacao`, `adriano-psicologo`)
- `{mes}{ano}` é abr2026, mai2026, etc.

**Como descobrir a data de apresentação:**
- Se a R1 com o SDR aconteceu hoje e a R2 com o especialista é amanhã, a data é **amanhã**
- Se há reunião marcada, usa a data da reunião
- Se não houver data marcada, **perguntar ao usuário** quando vai ser a apresentação
- Se for proposta retroativa (já foi apresentada), usar a data da apresentação real

**Por que data de apresentação e não de criação:**
- Lucas usa a pasta pra ver "o que vou apresentar hoje" / "o que apresentei no dia X"
- Visão temporal alinhada com o calendário comercial dele · não com quando o LLM gerou o arquivo
- Se proposta é criada hoje pra reunião amanhã, vai pra `2026-04-29/` (não `2026-04-28/`)

Se a pasta `CLIENTES/propostas/{YYYY-MM-DD}/` ainda não existir, criar antes (ex: `mkdir -p`).

### 9 · (Opcional) Briefing pro closer

Se o usuário pedir briefing pra reunião comercial, criar `briefing-closer-{slug}.md` em uma pasta separada do cliente (NÃO dentro de `propostas/`):

Caminho do briefing: `CLIENTES/{Nome do cliente} - {Mês} {Ano}/briefing-closer-{slug}.md`

A separação faz sentido porque:
- **Propostas (HTML)** → agrupadas por data em `CLIENTES/propostas/{YYYY-MM-DD}/` (visão temporal)
- **Briefings + materiais auxiliares (MD/DOCX/PDF)** → agrupados por cliente em `CLIENTES/{Nome do cliente} - {Mês} {Ano}/` (visão por cliente)

Pra converter pra DOCX, há um script reusável em `C:/Users/Rugido/AppData/Local/Temp/briefing-docx-build/build-briefings.js` (gera DOCX no padrão Cluster).

---

## ANTI-PADRÕES CRÍTICOS

❌ **Nunca prometer receita garantida.** Use "cenário projetado", "referência baseada em".

❌ **Nunca inventar números.** Se cliente não disse o ticket, não invente. Trabalhe em unidades.

❌ **Nunca remover acentos PT-BR.** UTF-8 nativo suporta. Console reclamando ≠ arquivo errado.

❌ **Nunca vender o que cliente já tem.** Se ele já gera lead, não venda geração de demanda como prioridade. Coloque em "Fora de escopo".

❌ **Nunca tratar aluno do Bootcamp como iniciante.** Tom = entre pares.

❌ **Nunca passar por cima do decisor.** Se Márcio leva pra diretoria, posicione-se como aliado dele.

❌ **Nunca usar termos que cliente não usou.** Vocabulário dele = vocabulário da proposta.

❌ **Nunca empilhar 8+ entregas pra parecer "robusta".** 4 entregas core bem focadas > 8 superficiais.

---

## QUANDO PERGUNTAR vs QUANDO ASSUMIR

**Perguntar quando:**
- Falta o ticket médio (afeta matemática do funil)
- Falta a meta de faturamento (afeta dimensionamento)
- Falta saber se decisor é único ou compartilhado
- Cliente é aluno do Bootcamp ou não (afeta tom)

**Assumir quando:**
- Cronograma: padrão é 10 semanas (mai/jun/jul ou jun/jul/ago)
- Investimento: padrão é R$ 15-30k setup conforme porte do cliente · sem retainer no primeiro ciclo · ver `references/modelos-de-pricing.md` pras 4 faixas
- Condições de pagamento: à vista (Pix) + 12× cartão com markup ~20% · **APENAS 2 condições** (3× Pix saiu em mai/2026 · cliente discutia em cima do parcelado)
- Estrutura de pasta:
  - **Proposta HTML** → `CLIENTES/propostas/{YYYY-MM-DD}/`
  - **Briefings + materiais** → `CLIENTES/{Nome} - {Mês} {Ano}/`
  - **Apresentações internas (deck pro time)** → `AGENCIA/apresentacoes/`

---

## SAÍDA ESPERADA

Ao terminar, reportar:
1. Caminho do arquivo HTML gerado
2. Estrutura de slides (lista numerada)
3. Tese central em 1 frase
4. Investimento total e 3 condições
5. Foco principal (qual módulo é o badge vermelho)
6. Anti-padrões aplicados/evitados (se relevante)
7. Próximo passo sugerido (briefing? PDF? envio?)
