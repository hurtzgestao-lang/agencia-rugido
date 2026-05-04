# Workflow detalhado · Criação de proposta

Passo a passo completo do processo. Use junto com os outros arquivos de referência (`modulos-canonicos.md`, `estrutura-de-slides.md`, `regras-de-copy.md`, `template-base.html`).

---

## FASE 1 · Coleta e leitura

### 1.1 Identificar fontes disponíveis

Possíveis inputs do usuário:
- PDF de transcrição da R1 (TurboScribe, Tactiq AI)
- Transcript Fathom da R1
- PDF/doc com análise SPICED já feita
- Notas soltas do SDR
- Histórico de mensagens com o lead (WhatsApp)

Lê todas as fontes ANTES de começar a montar.

### 1.2 Extrair dados literais

Crie mentalmente (ou em rascunho) uma estrutura tipo:

```
Cliente: [nome] · [empresa]
Decisor: [único / compartilhado / leva pra diretoria]
Status: [aluno Bootcamp / cliente novo / referência indicação]
Faturamento atual: R$ X
Meta declarada: R$ Y / [horizonte]
Time: N pessoas (estrutura)
Aquisição: [canais] · volume mensal
Conversão: [taxas declaradas]
Ticket: R$ X (se declarado)
Gargalo principal declarado: "[citação literal]"
Gargalo secundário: [se houver]
```

Se o cliente é **aluno do Bootcamp**, marca isso. Muda o tom da proposta inteira.

### 1.3 Identificar citações-âncora

Procurar 3-7 frases literais do cliente que vão ancorar a proposta. Devem cobrir:
- O problema central (ex: *"é a hora que os clientes somem"* — Márcio)
- A vontade declarada (ex: *"quero ver o LTV maior, com churn bem mais baixo"* — Gabriel)
- Reconhecimento do que já funciona (ex: *"a indicação é incrível, mas é limitada"* — Márcio)
- O que ele NÃO quer mexer (ex: *"o produto a gente acredita muito"* — Márcio)

Essas citações vão pro briefing do closer e podem aparecer no slide de cenário.

---

## FASE 2 · Diagnóstico estratégico

### 2.1 Mapear gargalo principal vs secundário

Onde dói mais? **Aquisição, qualificação, conversão, retenção ou operação?**

Use o framework abaixo:

| Sintoma declarado | Gargalo provável | Módulo principal |
|---|---|---|
| "Não tenho lead suficiente" | Aquisição | V-M1 |
| "Lead chega desqualificado" | Qualificação | V-E1 ou V-M1 |
| "MQL some na tentativa de contato" | Pré-vendas / conexão | V-E1 |
| "Lead aprende e vai pro mais barato" | Reposicionamento | V-E2 |
| "Proposta some / ghosting alto" | Follow-up | V-E3 |
| "Cliente cancela rápido / churn alto" | Retenção | V-PV1 |
| "Operação manual demais" | Automação | V-O1 |
| "Sem visibilidade dos números" | Inteligência | V-T1 (mas só se cliente NÃO tem CRM unificado) |
| "Tenho 1 closer único, gargalo de capacidade" | Replicação | V-E2 |

### 2.2 Identificar o que NÃO mexer

O que cliente já faz bem. Vai pro slide "FORA DE ESCOPO" na visão geral.

Exemplos:
- CRM unificado (CRM7) → Painel já existe, não vender V-T1
- Geração de lead robusta (GR Performance) → Não vender V-M1
- Time comercial estruturado (Márcio) → Não inflar V-E1
- Posicionamento já forte → Não atacar marca

### 2.3 Definir tese central

Escreva em **1 frase** o que a proposta vai vender. Padrão:

> **"O cliente X não tem problema de [Y]. O problema é [Z]. A proposta foca em [solução] sem mexer em [W]."**

Exemplos:
- Main Route: *"A Main Route não tem problema de cliente. O problema é capacidade do Andre. A proposta foca em sistematizar a operação consultiva sem o time depender da agenda dele."*
- CRM7: *"A CRM7 não tem problema de demanda. O problema é qualidade do lead pra franqueadoras. A proposta foca em geração de demanda calibrada com anúncios sem mexer no CRM unificado que vocês já têm."*
- GR Performance: *"A GR Performance não tem problema de demanda. O problema é reter o que entra. A proposta foca em retenção sem mexer no motor de aquisição."*
- Márcio: *"A Contabilidade não tem problema de produto. O problema é capturar valor antes do cliente comparar preço. A proposta foca em reposicionamento consultivo sem inflar com geração de demanda."*

### 2.4 Selecionar módulos (3 a 6)

**V-A1 sempre vai** (Auditoria · primeira entrega · 10 dias).

Os outros 2-5 módulos são selecionados com base no gargalo. Ver `modulos-canonicos.md`.

**Definir 1 como FOCO PRINCIPAL** — vai ter badge vermelho "Foco principal · maior alavanca" e card destacado em verde no slide de visão geral.

---

## FASE 3 · Estrutura da proposta

### 3.1 Esqueleto de slides

Lista padrão (mais comum, 13-14 slides):

```
00 · Capa
01 · Cenário (Construído + Próxima Fronteira)
02 · Ponto A → B (5-6 dimensões)
03 · Visão Geral (cards das entregas + placeholders)
04 · V-A1 (sempre)
05 · [Módulo FOCO]
06 · [Módulo 3]
07 · [Módulo 4]
08 · Matemática do funil
09 · Cronograma Gantt
10 · Mapa da jornada 7 estágios (opcional)
11 · Roadmap (opcional)
12 · Comunicação diária (opcional)
13 · Investimento
14 · Próximos passos (slide bege final)
```

> Nota · Onboarding 14 dias foi removido em abr/2026 — era redundante com o slide de Próximos Passos (bege) que já cobre os primeiros 7 dias. Gantt cobre o macro de 10 semanas.

Variações:
- Proposta enxuta (ex: Main Route): 11-12 slides, sem Roadmap, sem Comunicação
- Proposta robusta (ex: CRM7 inicial): 15-17 slides, todos opcionais
- Proposta cirúrgica (ex: Márcio): 14 slides, foco no que vende

### 3.2 Numeração

Bottom-right de cada slide: `XX / N` onde N = (total de slides - 1).

Nav-step de cada slide: `XX · {Título curto}` (todos em maiúsculas no CSS).

Capa (slide 00) tem nav-step diferente: `Proposta · {Mês} {Ano}`.

Próximos Passos (último slide) é **bege** (`<div class="slide beige">`), com SVG diferente e cores invertidas.

---

## FASE 4 · Geração do HTML

### 4.1 Copiar template

Comece a partir de `references/template-base.html`. Ele tem:
- CSS completo
- Estrutura de slide vazio com `{{PLACEHOLDERS}}`
- Exemplo de cada tipo de slide

### 4.2 Substituir placeholders

Vai substituindo cada `{{...}}` pelo conteúdo específico do cliente.

Não esqueça de:
- Substituir `{{CLIENTE_NOME}}` em todos os lugares
- Atualizar nav-step em cada slide
- Atualizar bottom-right em cada slide
- Atualizar bottom-left descritivo em cada slide
- Verificar que nenhum placeholder ficou no arquivo final

### 4.3 Cuidados especiais

**Slide de Investimento:**
- 3 condições (à vista no Pix, 3× no Pix com markup ~14%, 12× cartão com markup ~20%)
- Bloco "Incluso" embaixo
- `white-space: nowrap` e `flex-shrink: 0` no `.inv-line-value` (evita bug de quebra de linha do valor)

**Slide de Visão Geral:**
- Grid de 6 cards (3×2): 3-5 entregas + 1-3 placeholders
- Card destacado tem classe `.featured` (borda verde forte)
- Cards placeholder têm classe `.placeholder` (estilo dashed, opacidade reduzida)
- Tipos de placeholder: "ROADMAP · F2/F3/F4" e "FORA DE ESCOPO · {motivo}"

**Slide de Entrega individual:**
- 4 cards (2×2):
  1. `01 · O que resolve` (texto corrido)
  2. `02 · O que entregamos` (lista com até 4-5 bullets)
  3. `03 · O que você passa a ter` (lista 3 bullets)
  4. `04 · Quando entra` (texto curto com semanas)
- Manter bullets curtos (cada um cabe numa linha de 50% width do slide)

**Slide de Matemática do Funil:**
- 4 cards horizontais conectados por setas (`::after { content: '→' }`)
- Card final tem `.final` (borda verde)
- Bottom: 3 stats (geralmente 1 destacado em verde com `.highlight`)

### 4.4 Validações automáticas

Antes de entregar, rode mentalmente:

```
- Quantos slides? Confere com numeração XX / N.
- Acentos PT-BR? Grep por "acao|reuniao|nao tem|atençao" deve retornar zero.
- Citações literais? Conferir com R1.
- Aritmética: setup × parcelas = total declarado? (Setup R$ 30k → 3× R$ 12k = R$ 36k = +20%)
- "Garantia" / "garantido"? Não deve aparecer.
```

---

## FASE 5 · Entrega

### 5.1 Caminho do arquivo

**PADRÃO ATUALIZADO ABR/2026 · agrupar por data de APRESENTAÇÃO ao cliente · `propostas/{YYYY-MM-DD}/`.**

```
CLIENTES/propostas/{YYYY-MM-DD}/proposta-{slug}-{mes}{ano}.html
```

A data `{YYYY-MM-DD}` é a data em que o cliente vai **ver/receber** a proposta — não a data em que o LLM criou o arquivo.

**Regra prática:**
- Proposta criada hoje pra reunião amanhã → pasta de **amanhã**
- Reunião agendada pra terça → pasta da **terça**
- Sem data marcada → **perguntar** ao usuário quando vai apresentar
- Proposta retroativa (já apresentada) → pasta da data real da apresentação

Exemplos reais:
- `CLIENTES/propostas/2026-04-27/proposta-mainroute-abr2026.html`
- `CLIENTES/propostas/2026-04-28/proposta-adriano-psicologo-abr2026.html` (apresentada nesse dia)
- `CLIENTES/propostas/2026-04-29/proposta-asersecurity-v2-abr2026.html` (criada 28, apresentada 29)
- `CLIENTES/propostas/2026-04-29/proposta-emerson-corretor-abr2026.html` (criada 28, apresentada 29)

**Briefings, transcripts, contratos** continuam em pasta separada por cliente:
- `CLIENTES/{Nome do cliente} - {Mês} {Ano}/briefing-closer-{slug}.md`
- `CLIENTES/{Nome do cliente} - {Mês} {Ano}/briefing-closer-{slug}.docx`

Motivo: HTML (proposta) tem visão TEMPORAL ALINHADA COM O CALENDÁRIO COMERCIAL do Lucas (ver "o que vou apresentar hoje"). Briefings + materiais auxiliares têm visão POR CLIENTE útil pra contexto.

### 5.2 Reportar resultado

Estrutura de resposta ao usuário:

```markdown
**Arquivo:** {path}

**Estrutura · {N} slides (00 a N-1):**

| # | Slide | Conteúdo |
|---|---|---|
| ... | ... | ... |

**Tese central:** "..."

**Foco principal:** {módulo} · {motivo}

**Investimento:** R$ {valor} setup · 3 condições (à vista R$ X · 3× R$ Y Pix · 12× R$ Z cartão)

**Validações:**
- ✅ {N} acentos preservados
- ✅ Numeração sequencial
- ✅ Sem promessas garantia
- ✅ Citações conferidas

**Próximo passo sugerido:** {briefing? PDF? envio?}
```

### 5.3 Briefing pro closer (se solicitado)

Se o usuário quer briefing pra reunião comercial, criar arquivo `.md` na mesma pasta com 10 seções padrão:

0. Como usar
1. Snapshot do lead (tabela)
2. Citações literais
3. Tese central (1 frase)
4. Frame de abertura (3 opções)
5. Diagnóstico a aprofundar
6. Top 6 objeções esperadas (com respostas)
7. Plano A vs B vs C
8. Cheat sheet
9. Anti-padrões
10. Pós-reunião

Pra converter pra DOCX, há script em `C:/Users/Rugido/AppData/Local/Temp/briefing-docx-build/build-briefings.js`.

---

## CASOS ESPECIAIS

### Cliente é aluno do Bootcamp Rugido
- Tom da proposta = entre pares, não professor-aluno
- Slide cenário menciona "Aluno Bootcamp" como diferencial de contexto
- Anti-padrão: explicar conceitos básicos como se ele não soubesse

### Decisor leva pra diretoria
- Briefing pro closer é mais importante (precisa armar contato pra "vender pra cima")
- Adicionar bloco de "resumo executivo de 1 parágrafo" pro Lucas mandar no WhatsApp pós-call
- Plano B do briefing precisa ser muito robusto (cenário mais provável)

### Cliente não revelou faturamento
- Trabalhar em unidades (vendas/mês, leads/mês) na matemática do funil
- Não inventar valor de receita
- Slide de cenário evita falar em R$, foca em "operação validada"

### Cliente quer ROI absurdo (10× ou mais)
- Não prometer 10× direto
- Mostrar matemática conservadora (ex: 3 vendas a mais/mês = ROI X em 3 meses)
- Reservar "cenário otimista" como bottom stat, não como projeção principal

### Cliente já gera demanda forte
- V-M1 NÃO entra no core
- Vai pra "FORA DE ESCOPO" no slide de visão geral
- Foco é em conversão, retenção ou operação
