# Regras de copy · proposta Rugido

Regras de linguagem, tom e anti-padrões aprendidos em produção. Violar qualquer uma delas degrada a proposta.

---

## REGRA ABSOLUTA · Acentos PT-BR

**Todos os textos visíveis ao leitor devem estar em português brasileiro com acentuação completa.**

Sempre:
- "ação", "reunião", "você", "também", "está", "não", "começar", "decisão", "análise", "atenção", "porão"

Nunca:
- "acao", "reuniao", "voce", "tambem", "esta", "nao", "comecar", "decisao", "analise", "atencao", "porao"

**Justificativa técnica:** HTML/UTF-8 suporta acentos nativamente. Console reclamando de encoding ≠ arquivo errado. **NÃO REMOVER ACENTOS** "por consistência" ou "preocupação com encoding".

**Exceções (ASCII permitido):**
- Nomes de arquivo: `proposta-mainroute-abr2026.html` (não `proposta-mainroute-abr2026.html` com til)
- IDs HTML: `id="abertura"` (não `id="abertúra"`)
- Slugs / URLs: kebab-case ASCII
- Variáveis de código: ASCII

---

## NUNCA prometer receita garantida

❌ "Vai gerar R$ 3,3M de receita projetada"
❌ "ROI de 55× garantido"
❌ "Sua receita vai dobrar em 90 dias"
❌ "Garantimos +X vendas/mês"

✅ "Cenário projetado · referência baseada em campanhas reais"
✅ "Cenário conservador assume Y%"
✅ "Pode variar pra cima ou pra baixo conforme criativo, oferta, segmentação"
✅ "Métrica de referência interna Rugido"

**Por quê:**
- Cliente compara com expectativa real e culpa Rugido se não bate
- Mata credibilidade se não acontecer
- Vende mas não retém (você ganha o setup, perde o retainer)

---

## NUNCA inventar números que cliente não confirmou

Se cliente disse *"é uma informação mais estratégica"* sobre faturamento — **trabalhe em unidades**, não em R$:

❌ "Vocês faturam R$ 1M/mês então..."
✅ "Com 6-7 vendas/mês de ticket recorrente..."

Se cliente disse *"o ticket é variável, depende da entrega"* — **use faixa estimativa COM disclaimer**:

❌ "Ticket de R$ 5.000/mês"
✅ "Sem ter o ticket exato, trabalho com cenários conservadores em vendas/mês ao invés de R$"

---

## NUNCA vender o que cliente já faz bem

Se cliente já tem:
- **CRM unificado** → V-T1 vai pra "Fora de escopo" (CRM7 caso clássico)
- **Geração de demanda forte** → V-M1 vira "Fora de escopo" ou roadmap (GR Performance)
- **Time comercial estruturado** → V-E1 fica enxuto · não infla
- **Posicionamento claro** → Não vender "reposicionamento" como bloco

**Como sinalizar isso na proposta:** card placeholder no slide de Visão Geral, classe `.placeholder`, com tag "FORA DE ESCOPO · Já funciona / CRM7 já tem / Operação técnica forte".

---

## NUNCA usar termos que cliente não usou

Se cliente disse "lead" não use "MQL". Se disse "indicação" não use "referral". Vocabulário do cliente = vocabulário da proposta.

**Casos comuns:**
- Cliente diz "cliente" você diz "cliente" (não "consumer", não "buyer persona")
- Cliente diz "vendedor" você diz "vendedor" (não "executive sales", não "AE")
- Cliente diz "agendamento" você diz "agendamento" (não "booking")
- Cliente diz "fechamento" você diz "fechamento" (não "closing")

**Exceção:** termos técnicos da metodologia Rugido (V-A1, V-E2, "engenharia de receita", "matemática do funil") — esses são da casa.

---

## NUNCA tratar aluno do Bootcamp como iniciante

Se cliente é aluno do Bootcamp Rugido (ex: Gabriel da GR Performance), **tom = entre pares**, não professor-aluno.

❌ "Vou te explicar o que é uma jornada de compra"
❌ "Você precisa entender que tráfego pago funciona assim..."

✅ "Você sabe disso, então vou direto ao ponto"
✅ "Como você já operou com [framework], a gente conecta isso com..."
✅ "Não vou explicar o que você já domina"

**Sinalização visual:** badge "Aluno · Bootcamp Rugido" no hero badge da capa.

---

## NUNCA passar por cima do decisor

Se decisor não é o lead direto (ex: Márcio leva pra diretoria, Cléber decide com Marcos), **frame de aliado**:

❌ "Pode fechar agora?"
❌ "Você precisa decidir antes da diretoria"

✅ "Vou te ajudar a defender isso pra diretoria"
✅ "Te mando 3 coisas pra essa conversa"
✅ "Quando vocês conseguem dar um retorno?"

---

## NUNCA inflar com 5+ módulos só pra "parecer robusto"

4 módulos bem focados > 7 superficiais.

Tentação comum: empilhar V-A1 + V-M1 + V-E1 + V-E2 + V-E3 + V-PV1 + V-T1 pra "parecer completa". Resultado: tese dispersa, pitch fraco, cliente confuso.

**Regra:** o número de módulos core deve ser **proporcional ao gargalo declarado** + estrutura mínima de auditoria.

- Cliente com 1 gargalo claro → 3 módulos (V-A1 + foco + 1 sustentação)
- Cliente com gargalo + dor secundária → 4 módulos
- Cliente com 3+ frentes pra estruturar → 5-6 módulos máximo

---

## SEMPRE validar aritmética

Antes de entregar, confere:
- **Setup × parcelas = total declarado** (ex: 3× R$ 12.000 = R$ 36.000 ✓)
- **Markup do parcelado vs à vista** (geralmente +14% nos 3× e +20% no 12×)
- **Numeração dos slides** (XX / N consistente · sequencial)
- **Citações literais** (se está entre aspas itálicas, conferir contra R1)

Em uma proposta com erros aritméticos, o cliente perde a confiança e duvida do resto.

---

## SEMPRE manter cards de bullets compactos

O slide de entrega tem 4 cards (2×2). Cada card de bullets cabe **3-5 bullets curtos**. Bullets longos ocupam 2 linhas e estouram o card.

**Regra:**
- Cada bullet de 1 linha: até ~80 caracteres
- Cada bullet de 2 linhas: até ~140 caracteres
- Máximo 5 bullets por card de "O que entregamos"
- Máximo 3 bullets por card de "O que você passa a ter"

**Tip:** se um bullet tem 2 frases, divida em 2 bullets ou consolide em 1.

---

## SEMPRE manter descrições do slide Visão Geral (03) curtas

### Slide 03 · Visão Geral · `.ov-desc`

**Hard limit: 140 caracteres por descrição.** O CSS clampa em 6 linhas com font-size 11.5px — passar de 140 chars dá visual cortado.

Anti-padrão (NÃO fazer):
```
"Mapeamento do funil atual e do perfil dos clientes que NÃO se assustam com preço. Quem é o cliente que fecha rápido? Onde estão? O que têm em comum? Base concreta pra construir apresentação, qualifica..."
```
(285 chars · texto cortado pelo line-clamp · cliente vê reticências)

Padrão (sim):
```
"Análise do funil + perfil dos clientes que NÃO se assustam com preço. Base concreta pra construir apresentação consultiva."
```
(122 chars · cabe sem corte)

**Estratégia:** escreva uma frase única e direta. Se precisar elaborar, deixa pro slide específico da entrega · não tenta encaixar tudo no card de visão geral.

**Defesa CSS (já no template · calibrado em 28/04/2026):** `.ov-desc` tem `-webkit-line-clamp: 6` + `font-size: 11.5px` + `line-height: 1.4` + `overflow: hidden` + grid `minmax(0, 1fr)` — o card NÃO cresce mais que sua célula no grid. Mas se ativar o clamp, o texto fica truncado com reticências. Melhor escrever curto desde o início.

**Detalhamento técnico fica no slide individual da entrega (slides 04+).** O slide 03 é overview · cabe a tese, não os detalhes.

---

## SEMPRE manter bullets do Cenário (01) e card "01 · O que resolve" (04+) dentro do hard limit

### Slide 01 · Cenário · `.cenario-col-list li`

**Hard limit: 100 caracteres por bullet** (incluindo `<strong>` + descrição).

Estrutura: `<li><strong>Frase âncora curta</strong> · descrição complementar</li>`

Cada coluna tem até 5 bullets. 5 × ~100 chars cabem confortavelmente. Mais que isso quebra o layout (estoura o espaço vertical do `.cenario-col`).

Se você TEM uma citação literal de 80+ chars, NÃO ADICIONE descrição complementar — a citação se sustenta sozinha.

Anti-padrão (NÃO fazer):
```
"Eu não consigo me prender nessa etapa [de prospecção]" · sua palavra na R2 · gargalo declarado é exatamente o contato com o cliente alta tensão
```
(150+ chars · estoura)

Padrão (sim):
```
"Não consigo me prender nessa etapa" · gargalo é o contato com cliente alta tensão
```
(82 chars · cabe)

**Defesa CSS (calibrado em 29/04/2026):** `.cenario-col-list` tem `overflow: hidden` pra defender contra estouro vertical. Mas o ideal é escrever curto desde o início.

### Slide 04+ · Entrega individual · card "01 · O que resolve"

**Hard limit: 220 caracteres** (texto corrido · este card é `.card` normal, NÃO `.card.tall`).

O card "01 · O que resolve" é o card NORMAL (metade da altura do tall). Texto longo demais estoura a célula do grid.

Estratégia: 1 frase identificando o problema central + 1 frase mostrando o que a entrega resolve. Sem 3ª frase.

Anti-padrão (NÃO fazer):
```
"Você está sozinha · sem SDR · e o gargalo declarado é exatamente fazer o contato com o cliente alta tensão. E-mail e WhatsApp frio já falharam (abertura muito baixa) e a conclusão é que precisa de ligação estruturada. Sem SDR, você teria que ligar você mesma — e disse que não consegue se prender nessa etapa. A V-E1 entrega o braço operacional que você não tem · um SDR treinado, pronto pra rampar."
```
(498 chars · ESTOURA)

Padrão (sim):
```
"Você está sozinha sem SDR e disse que não consegue se prender na prospecção. E-mail e WhatsApp frio já falharam · precisa de ligação estruturada. A V-E1 entrega o braço que falta · SDR treinado pronto pra rampar."
```
(217 chars · cabe)

**Cards diferentes têm limites diferentes:**
- Card `01 · O que resolve` (`.card` normal · texto corrido): **≤ 220 chars**
- Card `02 · O que entregamos` (`.card.tall`): **6-7 bullets · cada ≤ 110 chars** (já documentado em estrutura-de-slides.md)
- Card `03 · O que você passa a ter` (`.card` normal · lista curta): **3 bullets · cada ≤ 80 chars**

**Defesa CSS (calibrado em 29/04/2026):** `.card .card-body` tem `-webkit-line-clamp: 12` pra clampar visualmente o card normal sem afetar o tall (que tem `-webkit-line-clamp: unset`). Mas se ativar o clamp, o texto fica truncado com reticências. Melhor escrever curto desde o início.

---

## SEMPRE usar ancoragem de citação literal

A primeira ou segunda frase do slide de Cenário deve referenciar o que o cliente disse (ou ter uma citação literal no slide V-E1/V-PV1 da entrega principal).

**Exemplos de ancoragem:**

> "Hoje a operação tem 'tudo muito pessoal' (Gabriel) — gargalos manuais comendo capacidade do time."

> "Cliente 'aprende' na reunião e fecha com a contabilidade mais barata. (Márcio · 24/04)"

> "É a 'hora que os clientes somem' (Márcio) — propostas paradas têm valor latente."

Citação literal cria 2 efeitos:
1. Mostra que você ouviu (rapport)
2. Estabelece que você não inventou o problema (credibilidade)

---

## SEMPRE definir cronograma claro

- **Setup é finito** (10-12 semanas, com data clara)
- **Mai/jun/jul** se proposta é abr/mai
- **Jun/jul/ago** se proposta é mai/jun
- **Ciclo declarado no eyebrow do slide de investimento**: "Arquitetura comercial pronta em 10 semanas · ciclo de maio a julho"

Cliente precisa saber quando termina. Aberto = vende mal.

---

## EVITAR · termos que disparam objeção automática

| Evitar | Substituir por |
|---|---|
| "Garantia de resultado" | "Cenário projetado" |
| "ROI de X×" como promessa | "Referência baseada em campanhas reais" |
| "Vai dobrar / triplicar" | "Espaço aberto pra X" / "+Y vendas/mês projetado" |
| "Solução completa" | "Estrutura focada em [foco específico]" |
| "Marketing tá errado" | "Marketing pode ser calibrado pra Y" |
| "Time precisa mudar" | "Time pode ganhar mais autonomia com..." |
| "Sua operação é manual" | "A operação tem espaço pra automatizar Y, Z" |

---

## EVITAR · linguagem de venda agressiva

A proposta Rugido é consultiva, não pressão. Evitar:

- "Pra começar HOJE, basta..."
- "Última oportunidade do mês"
- "Vagas limitadas"
- "Investimento que se paga sozinho em 30 dias"
- "Você não pode perder isso"

A proposta deve ser técnica, calma, racional. Quem fecha é o conjunto da obra (proposta sólida + closer presente + matemática que faz sentido).

---

## ESTILO de escrita

- **Frases curtas.** Máximo 2 vírgulas por frase.
- **Verbos no presente** ou no infinitivo. Evita "vamos fazer", prefere "fazemos" ou "fazer".
- **"a gente"** no copy padrão (informal-respeitoso).
- **"vocês"** (plural) se cliente tem sócios ou time. **"você"** se decisor único.
- **"Rugido"** quando se refere à empresa. **"a gente"** quando se refere ao time/projeto.
- **Bullets sem ponto final.** Bullets-frase começam com verbo ou substantivo, terminam sem ponto.
- **Negrito SOMENTE em palavras-chave.** Nunca a frase inteira em negrito (perde o efeito).

---

## Termos canônicos · linguagem do ICP B2B (calibrado 30/abr/2026)

A Rugido vende pra empresário B2B com vendas de alto valor. **Mesmo cliente qualificado não conhece termos técnicos de marketing.** Em palestra na Full Sales (Aceleração · ticket alto), Matheus Fiel usou "MQL" e Matuza pediu pra explicar.

Use a linguagem do empresário · não a do agencista:

| ✅ Usar | ❌ Evitar |
|---|---|
| Vendas de alto valor | high ticket |
| Ticket alto | tickets premium |
| Decisores qualificados | MQL / SQL |
| Reuniões com decisores | leads quentes |
| Lead pronto pra comprar | lead nutrido |
| Processo comercial | funil de vendas |
| Prospecção ativa | cold call · outbound |
| Closer (em material interno) | BDR (em material pra cliente) |
| Gestão de jornada de compra | nutrição de leads |
| Contratos de 3 a 10 mil mensais | MRR / ARR |
| Fechar clientes / fechar contratos | converter leads |

### Posicionamento canônico (usar nas propostas)

> "Lead pronto pra comprar"

Conceito-mãe: a proposta vende um sistema que faz o lead chegar na reunião já confiando, já educado, já pronto pra decidir. Não vende "vendedor melhor" · vende "lead melhor preparado".

### Mecanismo único: gestão de jornada de compra

Quando relevante (especialmente em propostas com V-M1 ou V-E1 como foco), citar **"gestão de jornada de compra"** como mecanismo único da Rugido. Termo é proposital ambíguo:
- Empresário entende como algo que ele pode usar PRA ELE mesmo (mecanismo)
- Empresário entende como serviço que ele pode oferecer pra outros (educação)

Ambas leituras estão certas · não corrigir.

---

## CHECKLIST FINAL antes de entregar

- [ ] Acentos PT-BR completos em todos os textos visíveis
- [ ] Numeração XX / N consistente em todos os slides
- [ ] Nav-step "XX · Título" sequencial
- [ ] Sem "garantia" / "garantido" / "vai dobrar"
- [ ] Sem números fictícios não declarados pelo cliente
- [ ] Aritmética do investimento confere
- [ ] Citação literal do cliente pelo menos 1 vez
- [ ] Foco principal definido (badge vermelho)
- [ ] Vocabulário do cliente respeitado
- [ ] Card placeholder pra "fora de escopo" se cliente já tem algo
- [ ] Cronograma com data fim clara
- [ ] Próximos passos com prazo + materiais a entregar
- [ ] **Slide 03 Visão Geral · cada `.ov-desc` ≤ 140 caracteres** (não estoura o card)
- [ ] **Cards `.ov-desc` ≤140 chars · sem corte visual**
- [ ] **Cards de entrega individual · bullets de "O que entregamos" ≤ 5** (não estoura)
- [ ] **Slide 01 Cenário · cada `.cenario-col-list li` ≤ 100 caracteres** (máx 5 bullets por coluna · não estoura o `.cenario-col`)
- [ ] **Slide 04+ Entrega · card "01 · O que resolve" (`.card` normal) ≤ 220 caracteres** (texto corrido · não estoura)
- [ ] **Slide 04+ Entrega · card "02 · O que entregamos" (`.card.tall`) com 6-7 bullets · cada ≤ 110 chars**
- [ ] **Slide 04+ Entrega · card "03 · O que você passa a ter" (`.card` normal) com 3 bullets · cada ≤ 80 chars**
- [ ] Sem "high ticket", "MQL", "cold call", "BDR" no texto visível ao cliente
- [ ] Usar "vendas de alto valor", "decisores qualificados", "prospecção ativa" no lugar
- [ ] Posicionamento "lead pronto pra comprar" presente quando aplicável
- [ ] Mecanismo "gestão de jornada de compra" citado quando V-M1 ou V-E1 são foco
