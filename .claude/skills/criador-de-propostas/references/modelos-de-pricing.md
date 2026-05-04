# Modelos de Pricing · Catálogo canônico

Documento que mapeia os 3 modelos de pricing usados nas propostas da Rugido. Cada modelo tem cálculo, slide de investimento específico e quando usar.

**Calibrado em mai/2026 após ~30 propostas em produção.**

---

## Modelo 1 · Setup Único (PADRÃO · 90% das propostas)

**Estrutura:** Pagamento único upfront pelo setup completo. Sem retainer mensal. Sem componente variável.

**Cálculo:**
- Setup base: R$ X (à vista · Pix ou boleto)
- 12× cartão: R$ X × 1.20 = total · dividido em 12 parcelas (markup ~20% pra cobrir taxa de cartão)

**Faixas por porte do cliente:**

| Porte do cliente | Setup | Mensalidade do cartão | Tempo de projeto |
|---|---|---|---|
| Iniciante / cirúrgica (R$50k-100k/mês) | R$ 12-15k | R$ 1.200-1.500 | 8 semanas |
| Médio (R$100-300k/mês) | R$ 18-22k | R$ 1.800-2.200 | 10 semanas |
| Consolidado (R$300k-1M/mês) | R$ 25-30k | R$ 2.500-3.000 | 10-12 semanas |
| Grande (R$1M+/mês) | R$ 30-50k | R$ 3.000-4.500 | 12 semanas |

**Slide de Investimento (HTML):**

```html
<div class="inv-totalcard">
  <div class="inv-line">
    <div><span class="inv-line-label">Setup de implementação</span>
      <span class="inv-line-sub">{N} semanas · entrega das {N} entregas</span>
    </div>
    <span class="inv-line-value">R$ {SETUP}</span>
  </div>
  <div class="inv-highlight">
    <span class="inv-highlight-label">A partir de</span>
    <span class="inv-highlight-value">R$ {PARCELA_12X}<span class="inv-highlight-period">/mês</span></span>
    <span class="inv-highlight-sub">12× sem juros no cartão · início imediato</span>
  </div>
  <div class="inv-line muted">
    <div><span class="inv-line-label">Investimento total</span>
      <span class="inv-line-sub">{N} entregas + equipe Rugido alocada · sem retainer mensal</span>
    </div>
    <span class="inv-line-value muted">R$ {SETUP}</span>
  </div>
</div>
<div class="inv-optionscard">
  <div class="inv-option">
    <span class="inv-option-title">Condição A · À vista</span>
    <span class="inv-option-body">R$ {SETUP} pago no início do projeto · Pix ou boleto.</span>
  </div>
  <div class="inv-option">
    <span class="inv-option-title">Condição B · Cartão em 12×</span>
    <span class="inv-option-body">12× R$ {PARCELA_12X} no cartão de crédito.</span>
  </div>
  <div class="inv-option" style="background: var(--cream-10); border-color: var(--cream-20);">
    <span class="inv-option-title" style="color: var(--cream);">Incluso</span>
    <span class="inv-option-body">{LISTA_ENTREGAS} · Acompanhamento semanal · Sem retainer mensal.</span>
  </div>
</div>
```

**Quando usar:**
- 90% dos casos · padrão default
- Cliente quer setup com escopo fechado
- Sem necessidade de operação contínua da Rugido
- Cliente toca a operação depois (treinamento, manual, ferramentas instaladas)

**Exemplos canônicos:**
- Cleide · Mercado Livre Energia · R$15k
- Marcos · Corretor Imobiliário · R$15k
- Sr. Simplício · JM Bike · R$12k
- Bruno · JR Esquadrias · R$30k
- Dex Investimentos · R$20k
- Aser Security v3 (treinamento BDRs) · R$25k

---

## Modelo 2 · BDR-as-a-Service (Operação contínua)

**Estrutura:** Rugido ALOCA recurso (1 BDR ou 1 squad pequeno) na operação do cliente · pagamento mensal · contrato de 6 meses mínimo.

**Cálculo:**
- R$ X/mês × N meses (geralmente 6)
- Sem setup separado · está embutido no 1º mês
- Pagamento via cartão recorrente OU boleto mensal

**Faixas:**
- BDR júnior dedicado: R$ 5-7k/mês × 6 = R$ 30-42k total
- BDR sênior dedicado: R$ 8-12k/mês × 6 = R$ 48-72k total
- Squad (BDR + supervisão Fran): R$ 10-15k/mês × 6 = R$ 60-90k total

**Slide de Investimento (HTML):**

```html
<div class="inv-totalcard">
  <div class="inv-line">
    <div><span class="inv-line-label">Operação BDR Rugido alocado</span>
      <span class="inv-line-sub">6 meses · alinhamento com ciclo B2B</span>
    </div>
    <span class="inv-line-value">R$ {MENSAL}/mês</span>
  </div>
  <div class="inv-highlight">
    <span class="inv-highlight-label">Investimento mensal</span>
    <span class="inv-highlight-value">R$ {MENSAL}<span class="inv-highlight-period">/mês</span></span>
    <span class="inv-highlight-sub">contrato 6 meses · BDR dedicado · meta de {N} reuniões/mês</span>
  </div>
  <div class="inv-line muted">
    <div><span class="inv-line-label">Investimento total · 6 meses</span>
      <span class="inv-line-sub">BDR + supervisão Fran + ferramentas + CRM</span>
    </div>
    <span class="inv-line-value muted">R$ {TOTAL_6M}</span>
  </div>
</div>
```

**Quando usar:**
- Cliente NÃO quer ter time interno de pré-vendas
- Cliente quer terceirizar 100% a operação de prospecção
- Volume de leads/reuniões pode justificar dedicação completa de um BDR
- Cliente quer receber leads agendados direto na agenda (não estruturar processo)

**⚠️ Atenção:**
- Lucas demonstrou ressalvas com esse modelo (Aser v2). Não é o modelo padrão da Rugido.
- Usar apenas quando o cliente PEDE explicitamente terceirização
- Sempre apresentar como ALTERNATIVA ao Modelo 1 (Setup Único + treinamento interno)

**Exemplos:**
- Aser Security v2 (mantida como opção · BDR dedicado R$6k/mês × 6 = R$36k)

---

## Modelo 3 · Híbrido (Setup + Fixo + Variável por reunião)

**Estrutura:** 3 componentes empilhados:
1. **Setup inicial** (one-time) · estruturação ICP, scripts, integração
2. **Mensalidade fixa** · BDR alocado + supervisão + ferramentas
3. **Por reunião qualificada agendada** · paga só pelo que entrega (alinhamento de incentivo)

**Cálculo:**

| Componente | Valor típico |
|---|---|
| Setup inicial (one-time) | R$ 4.500-7.500 |
| Fixo mensal | R$ 4.500-6.500/mês |
| Por reunião qualificada agendada | R$ 80-200/reunião |

**Cenários projetados (variável):**

| Reuniões/mês | Fixo | Variável | Total/mês |
|---|---|---|---|
| 30 (conservador) | R$ 5.500 | R$ 3.000 | R$ 8.500 |
| 50 (médio) | R$ 5.500 | R$ 5.000 | R$ 10.500 |
| 80 (ambicioso) | R$ 5.500 | R$ 8.000 | R$ 13.500 |

**Slide de Investimento (HTML · estrutura especial em 2 colunas):**

Esquerda: 3 componentes empilhados (Setup + Fixo + Variável + Compromisso)
Direita: Tabela de cenários projetados (30/50/80 reuniões com Fixo + Variável + Total)

```html
<div class="inv-totalcard">
  <div class="inv-line">
    <span class="inv-line-label">Componente 1 · Setup inicial · one-time</span>
    <span class="inv-line-value">R$ {SETUP}</span>
  </div>
  <div class="inv-highlight">
    <span class="inv-highlight-label">Componentes 2 + 3 · operação mensal</span>
    <span class="inv-highlight-value">R$ {FIXO}<span class="inv-highlight-period">/mês fixo + R$ {VAR}/reunião</span></span>
    <span class="inv-highlight-sub">Fixo cobre BDR + supervisão Fran + ferramentas. Variável só por reunião que aconteceu.</span>
  </div>
  <div class="inv-line">
    <span class="inv-line-label">Componente 2 · Mensalidade fixa</span>
    <span class="inv-line-value">R$ {FIXO}/mês</span>
  </div>
  <div class="inv-line">
    <span class="inv-line-label">Componente 3 · Por reunião agendada</span>
    <span class="inv-line-value">R$ {VAR}/reunião</span>
  </div>
  <div class="inv-line">
    <span class="inv-line-label">Compromisso de contrato</span>
    <span class="inv-line-value">6 meses</span>
  </div>
</div>
```

**Quando usar:**
- Cliente pediu explicitamente "X por mês + Y por lead" (modelo de pagamento)
- Cliente quer ALINHAMENTO DE INCENTIVO (Rugido só ganha mais se entregar mais)
- Volume de reuniões esperado é alto (>30/mês)
- Cliente já tem operação rodando · aceita pagamento variável

**Exemplos:**
- Guto · Agência Digital v2 (Terceirização) · R$4.500 setup + R$5.500/mês + R$100/reunião

---

## Calculadora mental · qual modelo usar

**Decisão em 3 perguntas:**

1. **Cliente quer terceirizar 100% a prospecção?**
   - SIM → Modelo 2 (BDR-as-a-Service) ou Modelo 3 (Híbrido)
   - NÃO → Modelo 1 (Setup Único)

2. **Cliente pediu pagamento variável por resultado?**
   - SIM → Modelo 3 (Híbrido)
   - NÃO → Modelo 2 (BDR-as-a-Service)

3. **Tem certeza do modelo escolhido?**
   - Se há dúvida entre Modelos 1 e 2 → DEFAULT pra Modelo 1 (mais barato pro cliente · mais alinhado com filosofia Rugido de "ensinar a pescar")

---

## Anti-padrões de pricing

❌ **Não usar 3× Pix com markup** (era padrão antigo · removido em mai/2026 · cliente discutia em cima do parcelado e travava fechamento). Atualmente: APENAS 2 condições (à vista + 12× cartão).

❌ **Não inflar setup pra R$50k+ "pra parecer robusto"** quando o cliente fatura R$80k/mês. ROI tem que fazer sentido pro cliente.

❌ **Não cobrar retainer + setup** no primeiro ciclo. Setup único · sem retainer. Renovação só após validação.

❌ **Não esconder valor total** no Modelo 2/3. Sempre mostrar total do contrato (6 meses) no muted.

❌ **Não inventar markup**. Padrão atual: 12× cartão = setup × 1.20.

---

## Pricing anchor (estética visual)

Em TODOS os 3 modelos, o slide de investimento usa:

- **`.inv-highlight`** com `.inv-highlight-value` em **38px verde** (ancoragem do valor mensal · não o total)
- **`.inv-line.muted`** mostra o valor total · com `opacity: 0.65` (em segundo plano)
- **2 condições de pagamento** (à vista + 12× cartão)
- **Bloco "Incluso"** com lista do que está coberto

A ideia é: o cliente vê primeiro o valor MENSAL (R$2.000/mês) · não o R$24k cheio. Reduz impacto psicológico sem esconder informação (total visível em muted).
