# 📘 Manual de Execução de Reuniões — Agência Rugido

**Guia prático para conduzir, documentar e aproveitar cada ritual da operação**  
Baseado em metodologias Falconi, princípios ágeis e análise de transcrições automatizadas.

---

## 🎯 Como usar este manual

Este manual é seu guia operacional para **garantir que ninguém chegue perdido em uma reunião**. Para cada tipo de ritual, você encontrará:

✅ **Roteiro de condução** — passo a passo de como facilitar  
✅ **Perguntas-chave** — baseadas em Falconi (PDCA, 5W2H, análise de gargalos) e metodologias ágeis  
✅ **Onde registrar** — local exato de documentação  
✅ **Prompts para transcrição** — como usar IA para gerar documentação automática após cada reunião

**Princípio fundamental:** Toda reunião transcrita vira documento automático. Nada é perdido, tudo vira insumo.

---

## 📋 Índice por Tipo de Ritual

1. Daily (Reunião Diária)  
2. Weekly Comercial  
3. Review de Ligações/Reuniões  
4. Treinamentos (Role-play, SPICED, Objeções)  
5. Review de Criativos  
6. Weekly de Portfólio/Entrega  
7. Gestão de Risco  
8. Kickoff Mensal  
9. Weekly de Liderança  
10. Review de Métricas  
11. Planejamento Mensal  
12. Review Trimestral

---

## 1. Daily (Reunião Diária)

**Aplicável a:** Marketing, SDR, Closers, Entrega Agência  
**Duração:** 15 minutos (MÁXIMO)  
**Horário padrão:** 8h (comercial) ou 9h (entrega)

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO (5 min antes)**

* [ ] Abrir dashboard do time com métricas do dia anterior
* [ ] Preparar lista de participantes (quem está de férias/fora)
* [ ] Iniciar gravação/transcrição assim que começar

**DURANTE A REUNIÃO**

1. **Abertura (1 min)**
   * "Bom dia, time. Vamos fazer nossa daily. Lembrem: 2 minutos por pessoa."
   * Definir ordem de fala (pode ser por ordem alfabética ou rotação)
2. **Check-in individual (2 min por pessoa)** Cada pessoa responde **exatamente** 3 perguntas:
   * **O que você fez ontem?** (foco em resultados, não atividades)
   * **O que você vai fazer hoje?** (prioridade #1)
   * **Tem algum bloqueio?** (impedimento que precisa de ajuda)
3. **Captura de bloqueios (2-3 min)**
   * Líder anota bloqueios em tempo real
   * NÃO resolver na daily — apenas capturar
   * "Fulano, converso com você às 9h sobre isso, ok?"
4. **Fechamento (1 min)**
   * Recapitular bloqueios críticos
   * "Alguém mais precisa de algo urgente? Não? Então estamos fechados."

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição com IA
* [ ] Resolver bloqueios offline (não na call)
* [ ] Atualizar board/Notion com status

### 🔑 Perguntas-Chave (Metodologia Falconi)

**Para identificar gargalos reais:**
* "Esse bloqueio é técnico, de processo ou de dependência externa?"
* "Já tentou resolver? O que faltou?"
* "Se não resolver hoje, qual o impacto?"

**5W2H aplicado:**
* **What** (O quê): Qual tarefa está travada?
* **Why** (Por quê): Qual a causa raiz?
* **Who** (Quem): Quem pode destravar?
* **When** (Quando): Até quando precisa estar resolvido?
* **Where** (Onde): Onde registrar a solução?
* **How** (Como): Como vamos resolver?
* **How much** (Quanto): Qual o custo de não resolver?

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Bloqueios do dia | Notion → Board do time → Coluna "Bloqueios" |
| Compromissos individuais | ClickUp → Tasks individuais |
| Métricas do dia | Dashboard do time (atualizar diariamente) |
| Ata da daily | Notion → Página semanal do time |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Extração de bloqueios e ações**

```
Analise a transcrição da daily abaixo e extraia:

1. BLOQUEIOS IDENTIFICADOS
   - Quem reportou
   - Descrição do bloqueio
   - Tipo (técnico/processo/dependência)
   - Criticidade (alta/média/baixa)

2. COMPROMISSOS DO DIA
   - Nome da pessoa
   - O que vai fazer hoje
   - Prioridade #1

3. ITENS QUE PRECISAM DE FOLLOW-UP
   - Descrição
   - Responsável por resolver
   - Prazo sugerido

Formato: Tabela markdown para cada seção.

[COLAR TRANSCRIÇÃO AQUI]
```

**Prompt 2: Identificação de padrões**

```
Analise as últimas 5 transcrições de daily e identifique:

1. Bloqueios recorrentes (aparecem em 3+ dailies)
2. Pessoas que frequentemente reportam bloqueios
3. Tarefas que nunca saem do "vou fazer hoje"
4. Sinais de que alguém pode estar sobrecarregado

Objetivo: Identificar problemas sistêmicos, não individuais.

[COLAR TRANSCRIÇÕES AQUI]
```

---

## 2. Weekly Comercial

**Aplicável a:** SDR Agência, Closers Agência  
**Duração:** 60-90 minutos  
**Horário:** Segunda-feira (após Weekly de Liderança)

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Consolidar números da semana anterior (dashboard atualizado)
* [ ] Listar metas individuais vs. atingido
* [ ] Preparar ranking do time
* [ ] Revisar pipeline individual de cada pessoa

**DURANTE A REUNIÃO**

1. **Abertura e números da semana (10 min)**
   * Resultado consolidado vs. meta
   * Destaques positivos (quem bateu/superou meta)
   * Ranking atualizado
2. **Análise de funil (15 min)**
   * Taxa de conversão em cada etapa
   * Gargalo da semana (onde perdemos mais?)
   * Comparação com semana anterior
3. **Review individual de pipeline (30-40 min)**
   * Cada pessoa apresenta seu pipeline
   * **Perguntas obrigatórias:**
     * "Qual negócio você vai fechar essa semana?"
     * "Qual o risco de perda? Por quê?"
     * "O que você precisa para avançar?"
   * Líder questiona e orienta
4. **Definição de metas e compromissos (15 min)**
   * Meta individual da semana
   * Prioridades (#1, #2, #3)
   * Quem precisa de ajuda/treinamento extra
5. **Fechamento (5 min)**
   * Recapitular compromissos
   * Lembrar de prazos críticos

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Atualizar metas no dashboard
* [ ] Agendar 1:1 com quem está abaixo da meta

### 🔑 Perguntas-Chave (Metodologia Falconi + Vendas)

**Para análise de desempenho:**
* "Seu resultado está abaixo da meta. Qual a causa raiz?" (não aceitar "falta de lead")
* "Qual foi seu gargalo pessoal? Agendamento? Show-up? Conversão?"
* "Comparando com quem está acima da meta, o que você faria diferente?"

**Para qualificação de pipeline (SPICED):**
* **Situation**: O lead entendeu o problema dele?
* **Pain**: A dor é urgente o suficiente?
* **Impact**: Qual o impacto de NÃO resolver?
* **Critical Event**: Tem deadline? Evento crítico?
* **Decision**: Quem decide? Processo de compra?

**Para previsibilidade:**
* "Qual sua confiança nesse fechamento? 30%? 60%? 90%?"
* "Se você tivesse que apostar seu salário, fecharia essa semana?"
* "O que pode dar errado? Como mitigar?"

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Ata da weekly | Notion → Página semanal do time |
| Metas individuais | Dashboard + ClickUp |
| Pipeline atualizado | CRM (atualizar durante a reunião) |
| Ações de melhoria | Notion → Backlog de treinamentos |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Extração de metas e riscos**

```
Analise a transcrição da Weekly Comercial e extraia:

1. METAS DA SEMANA
   - Nome
   - Meta numérica
   - Confiança (se mencionada)

2. RISCOS IDENTIFICADOS
   - Pessoa
   - Negócio em risco
   - Motivo do risco
   - Ação para mitigar

3. NECESSIDADES DE TREINAMENTO
   - Pessoa
   - Skill/conhecimento que falta
   - Urgência

4. COMPROMISSOS ASSUMIDOS
   - Quem
   - O quê
   - Até quando

Formato: Tabela markdown.

[COLAR TRANSCRIÇÃO]
```

**Prompt 2: Análise de padrões de performance**

```
Com base nas últimas 4 weeklies, identifique:

1. Quem está consistentemente abaixo da meta?
2. Quais são os gargalos recorrentes (falta de lead, baixo show-up, baixa conversão)?
3. Quais ações de melhoria foram prometidas mas não executadas?
4. Quem está evoluindo e quem está estagnado?

Objetivo: Priorizar onde investir energia de coaching.

[COLAR TRANSCRIÇÕES]
```

---

## 3. Review de Ligações/Reuniões

**Aplicável a:** SDR (Review de Ligações), Closers (Review de Apresentação ER)  
**Duração:** 60-90 minutos  
**Horário:** Quinta ou sexta à tarde

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Selecionar 2-3 gravações representativas da semana
* [ ] Priorizar: 1 vitória + 1 derrota + 1 situação crítica
* [ ] Enviar links antecipados (se possível, para o time escutar antes)

**DURANTE A REUNIÃO**

1. **Abertura (5 min)**
   * "Hoje vamos revisar 3 ligações. Foco em aprendizado, não em julgamento."
   * Definir regras: escutar em silêncio, anotar pontos, discutir depois
2. **Revisão de cada ligação (25-30 min cada)**
   
   **Parte 1: Escutar juntos (10-15 min)**
   * Reproduzir gravação (ou trechos selecionados)
   * Time acompanha e anota
   
   **Parte 2: Análise coletiva (15 min)**
   * "O que funcionou bem?"
   * "Onde perdemos o controle da conversa?"
   * "Qual foi o momento decisivo (para ganhar ou perder)?"
   * "Se você fosse o vendedor, o que faria diferente?"
3. **Extração de aprendizados (10 min)**
   * "Quais os 3 padrões que vimos hoje?"
   * "O que vai virar script/playbook?"
   * "Quem vai aplicar isso na próxima ligação?"
4. **Fechamento (5 min)**
   * Recapitular aprendizados
   * Definir 1 foco da semana (ex: "melhorar discovery", "contornar objeção de prazo")

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Atualizar playbook/script com aprendizados
* [ ] Compartilhar gravações + análise no Notion

### 🔑 Perguntas-Chave (Metodologia Falconi + Sales)

**Para análise de descoberta:**
* "O vendedor entendeu o problema do lead antes de oferecer solução?"
* "Quantas perguntas ele fez vs. quanto ele falou?"
* "A dor ficou clara? Foi quantificada?"

**Para análise de objeções:**
* "A objeção era real ou era cortina de fumaça?"
* "Como sabemos? Que sinais o lead deu?"
* "Como contornar essa objeção da próxima vez?"

**Para análise de fechamento:**
* "O vendedor assumiu o fechamento ou esperou o lead decidir?"
* "Houve proposta clara de próximo passo?"
* "Se você fosse o lead, compraria?"

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Gravações revisadas | Pasta compartilhada (Google Drive) |
| Aprendizados da semana | Notion → Biblioteca de Vendas/SDR |
| Atualizações de script | Notion → Playbook oficial |
| Ata do review | Notion → Página semanal |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Extração de aprendizados**

```
Analise a transcrição do Review de Ligações e extraia:

1. LIGAÇÕES REVISADAS
   - Nome do vendedor
   - Tipo (vitória/derrota/crítica)
   - Contexto do lead

2. O QUE FUNCIONOU
   - Técnica/abordagem
   - Momento da ligação
   - Por que funcionou

3. O QUE NÃO FUNCIONOU
   - Erro cometido
   - Momento da ligação
   - Como corrigir

4. PADRÕES IDENTIFICADOS
   - Padrão recorrente
   - Aplicação prática

5. AÇÕES PARA O PLAYBOOK
   - O que adicionar/mudar
   - Responsável
   - Prazo

[COLAR TRANSCRIÇÃO]
```

**Prompt 2: Criar script baseado em aprendizados**

```
Com base nos últimos 3 Reviews de Ligações, crie um script otimizado para [ETAPA: descoberta/apresentação/fechamento] que incorpore:

1. Melhores perguntas identificadas
2. Forma de contornar objeções recorrentes
3. Gatilhos de fechamento que funcionaram

Formato: Script conversacional, não robotizado.

[COLAR TRANSCRIÇÕES DOS REVIEWS]
```

---

## 4. Treinamentos (Role-play, SPICED, Objeções)

**Aplicável a:** SDR, Closers Agência  
**Duração:** 45-60 minutos  
**Horário:** Sexta à tarde ou segunda após weekly

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Definir foco do treinamento (objeção específica, etapa do funil, técnica)
* [ ] Preparar cenário/caso real
* [ ] Avisar o time do tema com antecedência

**DURANTE A REUNIÃO**

1. **Abertura e contextualização (5 min)**
   * "Hoje vamos treinar [TEMA]. Baseado em [SITUAÇÃO REAL DA SEMANA]."
   * Explicar regras do role-play
2. **Demonstração (10 min)**
   * Líder ou vendedor sênior demonstra a técnica
   * Time observa e anota
3. **Prática em duplas (20-25 min)**
   * Dividir em duplas
   * Cada pessoa faz 2 rodadas (uma como vendedor, uma como lead)
   * Trocar duplas a cada rodada
4. **Debriefing coletivo (10-15 min)**
   * "O que foi mais difícil?"
   * "Qual objeção pegou vocês de surpresa?"
   * "Como vocês contornaram?"
   * Líder corrige/complementa
5. **Fechamento (5 min)**
   * "Próxima ligação real, quero que apliquem isso. Combinado?"
   * Definir métrica de acompanhamento (ex: "3 pessoas vão usar SPICED completo essa semana")

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Compartilhar script/framework treinado
* [ ] Acompanhar aplicação na prática

### 🔑 Perguntas-Chave (Metodologia Ágil + Sales)

**Para retrospectiva de treinamento:**
* "O que você aprendeu hoje que vai usar amanhã?"
* "Qual parte do script ainda não sai natural pra você?"
* "Se tivesse que ensinar isso pra alguém, conseguiria?"

**Para avaliar absorção:**
* "Me explica SPICED com suas palavras."
* "Quando você usaria essa técnica? E quando NÃO usaria?"
* "Qual a diferença entre usar isso no telefone vs. presencial?"

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Script/framework treinado | Notion → Biblioteca de Treinamentos |
| Feedback dos participantes | Formulário pós-treino (Google Forms) |
| Ata do treinamento | Notion → Página semanal |
| Métricas de aplicação | Dashboard (tracking semanal) |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Documentar treinamento**

```
Analise a transcrição do treinamento e crie:

1. RESUMO EXECUTIVO
   - Tema treinado
   - Técnica/framework apresentado
   - Número de participantes

2. FRAMEWORK/SCRIPT ENSINADO
   - Passo a passo
   - Exemplos dados
   - Variações discutidas

3. DÚVIDAS LEVANTADAS
   - Pergunta
   - Resposta/esclarecimento
   - Quem perguntou (se relevante)

4. PRÓXIMOS PASSOS
   - Como aplicar
   - Métrica de acompanhamento
   - Prazo para revisão

[COLAR TRANSCRIÇÃO]
```

---

## 5. Review de Criativos

**Aplicável a:** Marketing Agência  
**Duração:** 60 minutos  
**Horário:** Quarta de manhã (meio de semana)

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Consolidar resultados dos criativos rodando (CTR, CPC, conversão)
* [ ] Selecionar criativos para análise (3-5 peças)
* [ ] Preparar briefing de novos criativos a aprovar

**DURANTE A REUNIÃO**

1. **Abertura e resultados (10 min)**
   * Visão geral de performance dos criativos da quinzena
   * Destaque: melhor e pior performance
2. **Análise de criativos (30 min)**
   * Para cada criativo selecionado:
     * Mostrar peça
     * Apresentar números (impressões, CTR, CPC, conversão)
     * Discutir: "Por que funcionou?" ou "Por que não funcionou?"
     * Decisão: Escalar / Matar / Iterar
3. **Aprovação de novos criativos (15 min)**
   * Apresentar propostas
   * Avaliar alinhamento com estratégia
   * Aprovar, rejeitar ou pedir ajustes
4. **Fechamento (5 min)**
   * Recapitular decisões (o que vai escalar, o que vai morrer)
   * Definir deadline para novos criativos

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Atualizar planilha de criativos (status: ativo/pausado/morto)
* [ ] Briefar equipe criativa com ajustes

### 🔑 Perguntas-Chave (Metodologia Falconi + Growth)

**Para análise de dados:**
* "Qual a hipótese por trás desse criativo?"
* "A hipótese se confirmou? Por quê?"
* "Esse resultado é estatisticamente significante ou é sorte?"

**Para decisão de escalar/matar:**
* "Se investíssemos 10x mais nesse criativo, o resultado seria proporcional?"
* "Qual o custo de oportunidade de manter esse criativo no ar?"
* "Quanto tempo damos antes de decidir?"

**Para iteração:**
* "Se mudarmos só [ELEMENTO], esperamos [RESULTADO]?"
* "Essa mudança é testável em 1 semana?"
* "Como vamos medir sucesso?"

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Resultados de criativos | Planilha de Mídia (Google Sheets) |
| Decisões (escalar/matar) | Notion → Histórico de Criativos |
| Briefing de novos criativos | Notion → Backlog Criativo |
| Ata do review | Notion → Página quinzenal |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Documentar decisões**

```
Analise a transcrição do Review de Criativos e extraia:

1. CRIATIVOS ANALISADOS
   - Nome/ID do criativo
   - Performance (CTR, CPC, conversão)
   - Decisão tomada (escalar/matar/iterar)
   - Justificativa

2. NOVOS CRIATIVOS APROVADOS
   - Conceito
   - Briefing
   - Prazo de entrega
   - Responsável

3. HIPÓTESES A TESTAR
   - Hipótese
   - Como testar
   - Prazo para resultados

4. AÇÕES DE FOLLOW-UP
   - O quê
   - Quem
   - Até quando

[COLAR TRANSCRIÇÃO]
```

---

## 6. Weekly de Portfólio/Entrega

**Aplicável a:** Entrega Agência  
**Duração:** 90 minutos  
**Horário:** Terça de manhã/tarde

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Atualizar status de todos os contratos
* [ ] Identificar contratos em risco (atraso, insatisfação)
* [ ] Preparar lista de entregáveis da semana

**DURANTE A REUNIÃO**

1. **Abertura e overview (10 min)**
   * Total de contratos ativos
   * Status geral (verde/amarelo/vermelho)
   * Destaques da semana
2. **Review contrato por contrato (50 min)**
   * Para cada contrato:
     * Status atual
     * Entregáveis concluídos vs. planejados
     * Próximos entregáveis
     * Riscos identificados
     * Precisa de suporte?
3. **Gestão de capacidade (15 min)**
   * Quem está sobrecarregado?
   * Quem tem capacidade para novos projetos?
   * Redistribuir se necessário
4. **Planejamento da semana (10 min)**
   * Prioridades do time
   * Deadlines críticos
   * Alocação de recursos
5. **Fechamento (5 min)**
   * Recapitular compromissos
   * Definir quem precisa de 1:1

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Atualizar status no ClickUp/Notion
* [ ] Comunicar clientes sobre atualizações

### 🔑 Perguntas-Chave (Metodologia Falconi + Gestão de Projetos)

**Para análise de status:**
* "Esse atraso é pontual ou sistêmico?"
* "Qual a causa raiz? Escopo mal definido? Falta de recurso? Cliente travou?"
* "O que precisamos fazer diferente no próximo sprint?"

**Para gestão de risco:**
* "Esse contrato está verde de verdade ou é otimismo?"
* "Se o cliente cancelar amanhã, estaríamos surpresos?"
* "Qual a última vez que conversamos com esse cliente?"

**Para priorização:**
* "Se tivéssemos que escolher entre [A] e [B], qual impacta mais o cliente?"
* "Esse entregável é crítico ou nice-to-have?"
* "Qual o custo de adiar 1 semana?"

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Status de contratos | ClickUp → Board de Projetos |
| Riscos identificados | Notion → Gestão de Risco |
| Capacidade do time | Planilha de Alocação |
| Ata da weekly | Notion → Página semanal |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Status Report automático**

```
Analise a transcrição da Weekly de Portfólio e gere um Status Report:

1. CONTRATOS/PROJETOS ATIVOS
   - Nome do cliente/projeto
   - Status (verde/amarelo/vermelho)
   - Entregáveis concluídos esta semana
   - Próximos entregáveis
   - Responsável

2. RISCOS IDENTIFICADOS
   - Cliente/projeto
   - Tipo de risco
   - Plano de mitigação
   - Responsável

3. CAPACIDADE DO TIME
   - Nome
   - % alocação
   - Disponibilidade para novos projetos

4. AÇÕES DA SEMANA
   - O quê
   - Quem
   - Deadline

[COLAR TRANSCRIÇÃO]
```

**Prompt 2: Email para clientes**

```
Com base na transcrição, gere emails de atualização para os seguintes clientes:

[LISTAR CLIENTES]

Para cada um, incluir:
- Resumo do que foi feito essa semana
- Próximos passos
- Prazo esperado
- Alguma solicitação pendente do cliente

Tom: profissional, objetivo, positivo.

[COLAR TRANSCRIÇÃO]
```

---

## 7. Gestão de Risco

**Aplicável a:** Entrega Agência (Gestão de Risco)  
**Duração:** 45-60 minutos  
**Horário:** Sexta à tarde

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Atualizar lista de contratos em risco
* [ ] Classificar por nível de risco (alto/médio/baixo)
* [ ] Preparar histórico de interações recentes

**DURANTE A REUNIÃO**

1. **Abertura e critérios de risco (5 min)**
   * Recapitular critérios objetivos de risco
   * Apresentar lista atualizada
2. **Análise caso por caso (40 min)**
   * Para cada contrato em risco:
     * Por que está em risco? (dados objetivos)
     * Última interação (quando, quem, resultado)
     * Sinais de alerta (reclamação, falta de engajamento, atraso)
     * Plano de ação individual
     * Responsável e prazo
3. **Priorização (10 min)**
   * Quais casos são mais críticos?
   * Quem precisa de ação imediata (hoje/amanhã)?
   * Quem pode esperar até semana que vem?
4. **Fechamento (5 min)**
   * Recapitular planos de ação
   * Definir quando revisar cada caso

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Executar planos de ação (ligar, mandar email, agendar reunião)
* [ ] Atualizar status no CRM/Notion
* [ ] Revisar na próxima semana

### 🔑 Perguntas-Chave (Metodologia Falconi + Customer Success)

**Para diagnóstico:**
* "Por que esse cliente está em risco? Dê dados, não achismos."
* "Quando foi a última vez que conversamos? O que ele disse?"
* "Se você fosse esse cliente, cancelaria?"

**Para plano de ação:**
* "Qual a nossa jogada? Ligar? Email? Reunião urgente?"
* "Quem é a melhor pessoa para fazer contato?"
* "O que vamos oferecer? Desconto? Concessão? Mudança de escopo?"

**Para prevenção:**
* "Esse caso era evitável? Como?"
* "Que sinais ignoramos antes de chegar aqui?"
* "O que mudar no processo para não repetir?"

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Lista de risco | Notion → Dashboard de Risco |
| Planos de ação | ClickUp → Tasks com prazo |
| Histórico de interações | CRM (atualizar após cada contato) |
| Ata da reunião | Notion → Página semanal |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Lista de ações prioritárias**

```
Analise a transcrição da Gestão de Risco e extraia:

1. CASOS EM RISCO ALTO
   - Cliente
   - Motivo do risco
   - Plano de ação
   - Responsável
   - Prazo

2. CASOS EM RISCO MÉDIO
   (mesmo formato)

3. CASOS EM RISCO BAIXO
   (mesmo formato)

4. PADRÕES IDENTIFICADOS
   - Causa raiz recorrente
   - Sugestão de melhoria de processo

Formato: Tabela markdown, ordenada por prioridade.

[COLAR TRANSCRIÇÃO]
```

**Prompt 2: Template de email de recuperação**

```
Com base na transcrição, crie um template de email de recuperação para [CLIENTE] que:

1. Reconheça o problema sem ser defensivo
2. Apresente uma solução concreta
3. Reforce o valor da parceria
4. Proponha próximo passo claro

Tom: empático, solucionador, comprometido.

Contexto: [RESUMIR SITUAÇÃO DO CLIENTE]

[COLAR TRECHO RELEVANTE DA TRANSCRIÇÃO]
```

---

## 8. Kickoff Mensal

**Aplicável a:** Todos os times (SDR, Closers, Marketing, Entrega)  
**Duração:** 60-90 minutos  
**Horário:** 1ª sexta do mês

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Consolidar números do mês anterior
* [ ] Preparar ranking individual
* [ ] Definir metas do novo mês (já aprovadas pela liderança)
* [ ] Preparar reconhecimentos e celebrações

**DURANTE A REUNIÃO**

1. **Abertura e celebração (15 min)**
   * Resultado geral do mês vs. meta
   * Reconhecimento público dos destaques
   * Compartilhar vitórias (casos de sucesso, feedbacks de clientes)
2. **Análise do mês (20 min)**
   * O que funcionou bem?
   * O que não funcionou?
   * Lições aprendidas
   * Decisões tomadas baseadas em dados
3. **Metas do novo mês (15 min)**
   * Meta do time
   * Metas individuais
   * Como vamos bater a meta? (estratégia)
4. **Prioridades e mudanças (10 min)**
   * Top 3 prioridades do mês
   * Mudanças de processo (se houver)
   * Novos recursos/ferramentas
5. **Perguntas e feedback (5 min)**
   * Espaço aberto para dúvidas
   * Feedback do time
6. **Fechamento motivacional (5 min)**
   * Mensagem do líder
   * "Vamos fazer deste mês o melhor de todos!"

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Compartilhar apresentação/ata
* [ ] Atualizar dashboard com novas metas

### 🔑 Perguntas-Chave (Metodologia Ágil: Retrospectiva)

**Para análise do mês:**
* "O que deveríamos continuar fazendo?"
* "O que deveríamos parar de fazer?"
* "O que deveríamos começar a fazer?"

**Para definição de metas:**
* "Essa meta é desafiadora mas alcançável?"
* "O que precisamos fazer diferente para bater a meta?"
* "Quais recursos/suporte precisamos?"

**Para alinhamento:**
* "Alguém não entendeu as prioridades do mês?"
* "Alguém discorda da estratégia?"
* "O que cada um vai fazer diferente esse mês?"

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Números do mês | Dashboard mensal (Google Sheets) |
| Metas do time | Notion + ClickUp |
| Ata do kickoff | Notion → Página mensal |
| Feedback do time | Formulário pós-reunião |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Resumo executivo do kickoff**

```
Analise a transcrição do Kickoff Mensal e crie um resumo executivo:

1. RESULTADOS DO MÊS ANTERIOR
   - Meta vs. realizado
   - Destaques positivos
   - Destaques de melhoria

2. METAS DO NOVO MÊS
   - Meta do time
   - Metas individuais (se mencionadas)
   - Estratégia para alcançar

3. PRIORIDADES
   - Top 3 prioridades
   - Mudanças de processo
   - Novos recursos

4. FEEDBACK DO TIME
   - Preocupações levantadas
   - Sugestões dadas
   - Compromissos assumidos

[COLAR TRANSCRIÇÃO]
```

---

## 9. Weekly de Liderança

**Aplicável a:** CEO + Líderes de todas as áreas  
**Duração:** 60 minutos  
**Horário:** Segunda, 8h15 (antes das weeklies comerciais)

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Cada líder prepara seu número-chave da semana
* [ ] Listar decisões pendentes (enviado até domingo)
* [ ] Consolidar dashboard consolidado Agência

**DURANTE A REUNIÃO**

1. **Abertura e números da semana (10 min)**
   * Resultado geral Agência
   * Cada líder apresenta seu número-chave em 1 frase
   * Identificar divergências vs. meta
2. **Gargalos por área (15 min)**
   * Cada líder reporta o principal bloqueio da sua área
   * Não resolver ainda — apenas expor
   * Capturar dependências entre áreas
3. **Decisões pendentes e alinhamentos (20 min)**
   * Lista de decisões da semana (enviada previamente)
   * Discussão e tomada de decisão
   * Alinhamentos cruzados (quando ação de uma área afeta outra)
4. **Prioridades e compromissos (10 min)**
   * Cada líder define top 1 prioridade da semana
   * Compromissos assumidos
   * Quem precisa de suporte de quem?
5. **Temas estratégicos livres (5 min)**
   * Espaço para temas não planejados mas urgentes

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Gerar ata com compromissos (quem, o quê, até quando)
* [ ] Compartilhar com toda liderança
* [ ] Cobrar execução dos compromissos

### 🔑 Perguntas-Chave (Metodologia Falconi + Liderança)

**Para análise de gargalos:**
* "Esse gargalo está na sua área ou é dependência de outra?"
* "Quantas semanas esse gargalo está travando?"
* "Qual o impacto se não resolver essa semana?"

**Para tomada de decisão:**
* "Quais as opções? Prós e contras de cada?"
* "Qual critério vamos usar para decidir?"
* "Quem é o dono da decisão? Quando executar?"

**Para alinhamento estratégico:**
* "Essa ação está alinhada com a meta do trimestre?"
* "Se fizermos isso, que área pode ser impactada?"
* "Precisamos comunicar essa decisão para o time?"

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Números-chave | Dashboard Consolidado Agência |
| Decisões tomadas | Notion → Registro de Decisões |
| Compromissos | ClickUp → Tasks com responsável e prazo |
| Ata da weekly | Notion → Página semanal Liderança |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Ata executiva**

```
Analise a transcrição da Weekly de Liderança e crie uma ata executiva:

1. NÚMEROS DA SEMANA
   - Área
   - Número-chave
   - Status (verde/amarelo/vermelho)

2. GARGALOS REPORTADOS
   - Área
   - Descrição do gargalo
   - Impacto
   - Dependência de outra área?

3. DECISÕES TOMADAS
   - Decisão
   - Contexto/justificativa
   - Responsável por executar
   - Prazo

4. COMPROMISSOS DA SEMANA
   - Líder
   - Compromisso
   - Prazo
   - Precisa de suporte de quem?

Formato: Objetivo, acionável, sem narrativa excessiva.

[COLAR TRANSCRIÇÃO]
```

**Prompt 2: Follow-up de compromissos**

```
Compare a ata da Weekly de Liderança de hoje com a de semana passada.

Identifique:
1. Compromissos assumidos na semana passada que foram cumpridos
2. Compromissos assumidos na semana passada que NÃO foram cumpridos
3. Compromissos não cumpridos recorrentes (aparecem em 2+ weeklies)

Para cada compromisso não cumprido:
- Quem assumiu
- O que era
- Por que não foi feito (se mencionado)

Objetivo: Accountability.

[COLAR TRANSCRIÇÕES DAS 2 ÚLTIMAS WEEKLIES]
```

---

## 10. Review de Métricas

**Aplicável a:** Liderança completa  
**Duração:** 45 minutos  
**Horário:** Sexta, 18h15 (fim de semana)

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Atualizar dashboard consolidado (Agência)
* [ ] Calcular funil completo
* [ ] Identificar gargalo da semana

**DURANTE A REUNIÃO**

1. **Investimento vs. Faturamento (5 min)**
   * Total investido em mídia
   * Total faturado
   * ROI consolidado
2. **Funil Agência (10 min)**
   * CPL → MQL → Agendamento → Show → Venda
   * Taxa de conversão em cada etapa
   * Comparação com semana anterior
3. **Status de contratos (10 min)**
   * Contratos ativos
   * Churn da semana
4. **Gargalo da semana + ação corretiva (10 min)**
   * Identificar o maior gargalo (onde perdemos mais)
   * Por que esse gargalo?
   * Ação corretiva para semana que vem

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Comunicar ação corretiva aos times
* [ ] Atualizar dashboard para próxima semana

### 🔑 Perguntas-Chave (Metodologia Falconi: Análise de Gargalos)

**Para identificação de gargalo:**
* "Qual etapa do funil teve pior performance essa semana?"
* "Isso é tendência ou variação pontual?"
* "Esse gargalo está nas nossas mãos ou é externo?"

**Para causa raiz:**
* "Por que o show-up caiu? Qualidade do agendamento? Timing?"
* "Por que a conversão de venda caiu? Qualificação? Objeção recorrente?"
* "Por que o CPL subiu? Criativo cansou? Concorrência aumentou?"

**Para ação corretiva:**
* "Qual a ação mais rápida para resolver isso?"
* "Quem é responsável por executar?"
* "Como vamos medir se funcionou?"

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Funil semanal | Dashboard Consolidado (Google Sheets) |
| Gargalo da semana | Notion → Histórico de Gargalos |
| Ação corretiva | ClickUp → Task com responsável |
| Ata do review | Notion → Página semanal |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Relatório de funil semanal**

```
Analise a transcrição do Review de Métricas e gere um relatório de funil:

1. NÚMEROS CONSOLIDADOS
   - Investimento total
   - Faturamento total
   - ROI

2. FUNIL AGÊNCIA
   - CPL
   - MQL
   - Agendamentos
   - Show-up
   - Vendas
   - Taxa de conversão em cada etapa

3. GARGALO DA SEMANA
   - Qual etapa
   - Magnitude do problema
   - Causa raiz identificada
   - Ação corretiva definida
   - Responsável

[COLAR TRANSCRIÇÃO]
```

**Prompt 2: Análise de tendências**

```
Com base nas últimas 4 Reviews de Métricas, identifique:

1. Tendências positivas (métricas melhorando consistentemente)
2. Tendências negativas (métricas piorando consistentemente)
3. Gargalos recorrentes (aparecem em 3+ reviews)
4. Ações corretivas que foram implementadas e funcionaram
5. Ações corretivas que foram implementadas mas não funcionaram

Objetivo: Identificar padrões e ajustar estratégia.

[COLAR TRANSCRIÇÕES DAS 4 ÚLTIMAS REVIEWS]
```

---

## 11. Planejamento Mensal

**Aplicável a:** Liderança  
**Duração:** 2 horas  
**Horário:** Última semana do mês

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Projeção de fechamento do mês atual
* [ ] Histórico dos últimos 3 meses
* [ ] Benchmarks e metas trimestrais

**DURANTE A REUNIÃO**

1. **Projeção de fechamento do mês atual (15 min)**
   * Onde vamos fechar o mês?
   * Vai bater a meta? Por quanto?
   * O que faltou ou sobrou?
2. **Meta de faturamento Agência + investimento de mídia (20 min)**
   * Meta de faturamento do próximo mês
   * Quanto investir em mídia?
   * Projeção de contratos a fechar
3. **Metas individuais comerciais (20 min)**
   * Meta de cada SDR
   * Meta de cada Closer
   * Meta de ativação
4. **Prioridades de processo e tecnologia (15 min)**
   * Melhorias de processo
   * Ferramentas/integrações
   * Automações
5. **Campanhas e eventos do mês (20 min)**
   * Campanhas de mídia
   * Eventos/webinars
   * Parcerias
6. **Alinhamento final (10 min)**
   * Recapitular metas e prioridades
   * Quem comunica o quê para os times?

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Documentar metas e plano do mês
* [ ] Comunicar aos times (via Kickoff Mensal)
* [ ] Atualizar dashboards

### 🔑 Perguntas-Chave (Metodologia Falconi: PDCA)

**Para definição de metas (PLAN):**
* "Essa meta é realista baseada nos últimos 3 meses?"
* "O que precisa acontecer para bater essa meta?"
* "Quais os riscos? Como mitigar?"

**Para alocação de recursos (DO):**
* "Quanto investir em mídia para gerar X vendas?"
* "Precisamos contratar ou realocar pessoas?"
* "Quais ferramentas/processos precisam melhorar?"

**Para controle (CHECK):**
* "Como vamos acompanhar se estamos no caminho?"
* "Quais métricas semanais vão indicar sucesso?"
* "Quando revisar o plano se não estiver funcionando?"

**Para ajuste (ACT):**
* "Se não batermos 50% da meta na 2ª semana, o que faremos?"
* "Quais alavancas podemos puxar rapidamente?"
* "Quem tem autoridade para ajustar o plano?"

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Metas do mês | Notion → Planejamento Mensal |
| Investimento de mídia | Planilha de Budget (Google Sheets) |
| Calendário de lançamentos | Notion → Calendário Agência |
| Ata do planejamento | Notion → Página mensal Liderança |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Plano do mês estruturado**

```
Analise a transcrição do Planejamento Mensal e crie um plano estruturado:

1. METAS DO MÊS
   - Faturamento Agência
   - Investimento em mídia
   - Metas individuais (se detalhadas)

2. ESTRATÉGIA
   - Como vamos alcançar as metas?
   - Principais alavancas
   - Mudanças de processo

3. CAMPANHAS E EVENTOS
   - Nome da campanha/evento
   - Data
   - Objetivo
   - Responsável

4. PRIORIDADES DO MÊS
   - Top 3 prioridades
   - Responsável por cada
   - Deadline

5. RISCOS E MITIGAÇÕES
   - Risco identificado
   - Probabilidade
   - Plano de mitigação

[COLAR TRANSCRIÇÃO]
```

---

## 12. Review Trimestral

**Aplicável a:** Toda a operação  
**Duração:** 3 horas  
**Horário:** Fim de cada trimestre

### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Consolidar todos os números do trimestre
* [ ] Preparar apresentação completa (slides/dashboard)
* [ ] Coletar feedback do time (formulário prévio)

**DURANTE A REUNIÃO**

1. **Fechamento do trimestre (30 min)**
   * Números completos vs. meta
   * Evolução mês a mês
   * Destaques e aprendizados
2. **O que funcionou e deve ser escalado (30 min)**
   * Estratégias que deram certo
   * Processos que melhoraram performance
   * Pessoas que se destacaram
   * Decisão: Escalar/Multiplicar
3. **O que não funcionou e será matado ou ajustado (30 min)**
   * Estratégias que falharam
   * Processos que travaram
   * Desperdícios identificados
   * Decisão: Matar/Ajustar
4. **Replanejamento do próximo trimestre (60 min)**
   * Metas do trimestre
   * Investimento planejado
   * Contratações necessárias
   * Grandes iniciativas
5. **Prioridades estratégicas cruzadas (20 min)**
   * Projetos que envolvem múltiplas áreas
   * Dependências críticas
   * Alinhamento de expectativas
6. **Alinhamento final (10 min)**
   * Recapitular metas e compromissos
   * Próximos passos
   * Comunicação para o time

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Documentar plano trimestral completo
* [ ] Comunicar ao time (All Hands)
* [ ] Atualizar OKRs/metas trimestrais

### 🔑 Perguntas-Chave (Metodologia Ágil: Retrospectiva Trimestral)

**Para retrospectiva:**
* "O que conquistamos que não esperávamos?"
* "Onde falhamos e por quê?"
* "Se pudéssemos voltar 3 meses, o que faríamos diferente?"

**Para planejamento:**
* "Qual a grande aposta do próximo trimestre?"
* "O que vamos parar de fazer para focar no que importa?"
* "Quais as 3 métricas que mais importam?"

**Para alinhamento:**
* "Todo mundo entendeu a estratégia?"
* "Alguém discorda do plano?"
* "O que cada área precisa fazer diferente?"

### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Números do trimestre | Dashboard Trimestral (Google Sheets) |
| Plano do próximo trimestre | Notion → Planejamento Trimestral |
| OKRs/metas | Notion + ClickUp |
| Ata do review | Notion → Página trimestral |

### 🤖 Prompts para Processamento de Transcrição

**Prompt 1: Relatório trimestral executivo**

```
Analise a transcrição do Review Trimestral e crie um relatório executivo:

1. RESULTADOS DO TRIMESTRE
   - Faturamento vs. meta
   - Principais conquistas
   - Principais desafios

2. O QUE FUNCIONOU
   - Estratégia/iniciativa
   - Resultado obtido
   - Por que funcionou
   - Decisão (escalar/manter/ajustar)

3. O QUE NÃO FUNCIONOU
   - Estratégia/iniciativa
   - Resultado esperado vs. obtido
   - Por que não funcionou
   - Decisão (matar/ajustar)

4. PLANO DO PRÓXIMO TRIMESTRE
   - Metas principais
   - Grandes apostas
   - Investimento planejado
   - Contratações

5. PRIORIDADES ESTRATÉGICAS
   - Top 5 prioridades
   - Responsável
   - Prazo

[COLAR TRANSCRIÇÃO]
```

---

## 🎯 Seção Especial: Rituais de Transição

### Handoff Vendas → Entrega

**Aplicável a:** Agência (ao fechar contrato)  
**Duração:** 45 minutos  
**Gatilho:** Logo após fechamento de contrato

#### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Closer prepara briefing do cliente (expectativas, escopo, timelines)
* [ ] Líder de Entrega revisa proposta comercial
* [ ] Agendar com cliente + time de entrega

**DURANTE A REUNIÃO**

1. **Apresentação do time de Entrega (5 min)**
   * Quem são
   * Como vão trabalhar juntos
2. **Recap da proposta (10 min)**
   * Closer recapitula o que foi vendido
   * Expectativas do cliente
   * Escopo combinado
3. **Próximos passos (15 min)**
   * Time de Entrega apresenta cronograma
   * Definir kickoff do projeto
   * Alinhamento de comunicação (como, quando, com quem)
4. **Perguntas e alinhamentos finais (10 min)**
   * Cliente tira dúvidas
   * Time de Entrega captura detalhes adicionais
5. **Fechamento (5 min)**
   * Recapitular próximos passos
   * Definir próxima reunião

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Time de Entrega cria projeto no ClickUp
* [ ] Agendar kickoff do projeto

#### 🔑 Perguntas-Chave

**Para alinhamento de expectativas:**
* "Cliente, o que é sucesso pra você nesse projeto?"
* "Qual o deadline mais crítico?"
* "Como você prefere que nos comuniquemos?"

**Para captura de detalhes:**
* "Existe alguma informação que não está na proposta?"
* "Tem algo que combinamos verbalmente que precisa estar documentado?"
* "Quem mais do lado do cliente vai estar envolvido?"

#### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Briefing completo | Notion → Pasta do Cliente |
| Cronograma inicial | ClickUp → Projeto do Cliente |
| Ata do handoff | Notion → Página do Cliente |

### Retrospectiva de Contrato

**Aplicável a:** Agência (ao fim de cada contrato)  
**Duração:** 60 minutos  
**Gatilho:** Última semana do contrato ou logo após cancelamento

#### 🎬 Roteiro de Condução

**ANTES DA REUNIÃO**

* [ ] Coletar feedback do cliente (se possível)
* [ ] Consolidar números do contrato (entregáveis, prazos, budget)
* [ ] Time de Entrega prepara autoavaliação

**DURANTE A REUNIÃO**

1. **Contextualização (10 min)**
   * Recap do contrato (escopo, duração, valor)
   * Como encerrou (renovação, cancelamento, conclusão)
2. **O que funcionou bem (15 min)**
   * Processos que fluíram
   * Momentos de destaque
   * Feedback positivo do cliente
3. **O que não funcionou (15 min)**
   * Gargalos enfrentados
   * Erros cometidos
   * Feedback negativo do cliente
4. **Lições aprendidas (15 min)**
   * O que fazer diferente no próximo?
   * Mudanças de processo necessárias
   * Melhorias no handoff/kickoff
5. **Fechamento (5 min)**
   * Documentar aprendizados
   * Definir responsável por implementar mudanças

**DEPOIS DA REUNIÃO**

* [ ] Processar transcrição
* [ ] Documentar lições aprendidas
* [ ] Atualizar playbook de entrega
* [ ] Compartilhar aprendizados com o time

#### 🔑 Perguntas-Chave (Metodologia Ágil: Retrospectiva)

**Para análise honesta:**
* "Se pudéssemos começar esse projeto de novo, o que faríamos diferente?"
* "Qual erro foi nosso e qual foi do cliente?"
* "Por que não vimos esse problema antes?"

**Para extração de aprendizado:**
* "Esse problema é específico desse cliente ou sistêmico?"
* "Como prevenir isso no próximo contrato?"
* "Que ferramenta/processo resolveria isso?"

#### 📍 Onde Registrar

| Informação | Local |
| ----- | ----- |
| Ata da retrospectiva | Notion → Pasta do Cliente |
| Lições aprendidas | Notion → Biblioteca de Aprendizados |
| Melhorias de processo | ClickUp → Backlog de Melhorias |

---

## 🛠️ Toolkit de Prompts Universais

Use esses prompts para qualquer reunião transcrita:

### Prompt: Resumo Executivo Universal

```
Analise a transcrição da reunião [TIPO DE REUNIÃO] e crie um resumo executivo:

1. CONTEXTO
   - Tipo de reunião
   - Participantes
   - Data

2. PRINCIPAIS DISCUSSÕES
   - Temas abordados
   - Decisões tomadas
   - Divergências (se houver)

3. AÇÕES DEFINIDAS
   - O quê
   - Quem
   - Até quando
   - Status (novo/em andamento/concluído)

4. PRÓXIMOS PASSOS
   - O que vai acontecer até a próxima reunião
   - Quem precisa fazer o quê

Formato: Objetivo, acionável, sem narrativa excessiva.

[COLAR TRANSCRIÇÃO]
```

### Prompt: Identificar Ações Pendentes

```
Analise a transcrição e identifique TODAS as ações/compromissos mencionados:

Para cada ação, extraia:
- Descrição da ação
- Responsável (quem vai fazer)
- Prazo mencionado (se houver)
- Dependências (se houver)
- Prioridade (alta/média/baixa, inferir do contexto)

Formato: Tabela markdown ordenada por prioridade.

[COLAR TRANSCRIÇÃO]
```

### Prompt: Comparar com Reunião Anterior

```
Compare a transcrição da reunião de hoje com a transcrição da última reunião do mesmo tipo.

Identifique:
1. Compromissos assumidos na última reunião que foram cumpridos
2. Compromissos assumidos na última reunião que NÃO foram cumpridos
3. Novos temas que surgiram (não estavam na última reunião)
4. Temas recorrentes (aparecem em ambas)
5. Evolução de métricas (se aplicável)

[COLAR TRANSCRIÇÃO DE HOJE]
---
[COLAR TRANSCRIÇÃO DA REUNIÃO ANTERIOR]
```

### Prompt: Extrair Decisões e Justificativas

```
Analise a transcrição e liste TODAS as decisões tomadas.

Para cada decisão:
- O que foi decidido?
- Quem tomou a decisão?
- Qual foi a justificativa/ raciocínio?
- Houve divergência? (se sim, quais argumentos contrários)
- Impacto esperado

Formato: Tabela markdown.

[COLAR TRANSCRIÇÃO]
```

### Prompt: Identificar Padrões e Sinais de Alerta

```
Analise as últimas [N] transcrições desse tipo de reunião e identifique:

1. PADRÕES POSITIVOS
   - Comportamentos/processos que aparecem consistentemente e geram bons resultados

2. PADRÕES NEGATIVOS
   - Problemas recorrentes
   - Compromissos que nunca são cumpridos
   - Gargalos que sempre reaparecem

3. SINAIS DE ALERTA
   - Pessoas que frequentemente reportam bloqueios
   - Áreas que nunca batem meta
   - Processos que sempre atrasam

4. RECOMENDAÇÕES
   - Mudanças de processo sugeridas
   - Treinamentos necessários
   - Ferramentas/recursos que faltam

[COLAR TRANSCRIÇÕES]
```

---

## 📊 Checklist de Qualidade da Reunião

Use isso para avaliar se uma reunião foi bem conduzida:

### ✅ Antes da Reunião

* [ ] Todos receberam pauta com antecedência?
* [ ] Participantes sabem o objetivo da reunião?
* [ ] Dados/dashboards estão atualizados?
* [ ] Transcrição está ativada?

### ✅ Durante a Reunião

* [ ] Reunião começou no horário?
* [ ] Objetivo foi recapitulado no início?
* [ ] Todos tiveram espaço para falar?
* [ ] Discussões ficaram focadas (sem divergir)?
* [ ] Decisões foram tomadas (não apenas debatidas)?
* [ ] Ações ficaram claras (quem, o quê, até quando)?
* [ ] Reunião terminou no horário previsto?

### ✅ Depois da Reunião

* [ ] Transcrição foi processada?
* [ ] Ata foi compartilhada em até 24h?
* [ ] Ações foram criadas no ClickUp?
* [ ] Pessoas sabem o que fazer a seguir?

---

## 🎓 Princípios Gerais de Facilitação

**Baseado em Falconi + Metodologias Ágeis**

### 1. Sempre use dados, nunca achismos

* Toda afirmação precisa de número
* "Achamos que..." → "Os dados mostram que..."
* Sem dashboard atualizado, sem reunião

### 2. Foco em resultado, não em atividade

* "Fiz 50 ligações" ❌
* "Agendei 10 reuniões qualificadas" ✅

### 3. Identifique gargalos, não culpados

* "Quem errou?" ❌
* "Onde o processo travou?" ✅

### 4. Decisão > Discussão

* Reunião não é terapia
* Se não tomar decisão, não é reunião, é papo

### 5. Ação clara ao final

* Toda reunião termina com: Quem vai fazer O Quê até Quando
* Se não tem ação, por que reuniu?

### 6. Respeite o tempo de todos

* Começar e terminar no horário é respeito
* Se não couber na agenda, retire item, não estoure o tempo

### 7. Transcrição é insumo, não burocracia

* Toda reunião vira documento automático
* Use IA para processar, não faça manualmente

---

## 📞 Canais de Registro e Ferramentas

| Ferramenta | O que registrar | Quem acessa |
| ----- | ----- | ----- |
| **Notion** | Atas, playbooks, bibliotecas, histórico de decisões | Todo o time |
| **ClickUp** | Tasks, projetos, sprints, deadlines | Time responsável + gestores |
| **Google Sheets** | Dashboards, métricas, funis, projeções | Liderança + analistas |
| **CRM** | Pipeline, histórico de interações com leads/clientes | Time comercial + CS |
| **Google Drive** | Gravações, apresentações, contratos | Time relevante + liderança |
| **Slack/WhatsApp** | Comunicação urgente, avisos rápidos | Time específico |

**Regra de ouro:** Se não está documentado, não aconteceu.

---

## 🔄 Ciclo de Melhoria Contínua (PDCA)

Aplique em todas as reuniões recorrentes:

### Plan (Planejar)

* Definir objetivo e pauta
* Preparar dados e dashboards
* Comunicar participantes

### Do (Executar)

* Conduzir a reunião seguindo o roteiro
* Gravar e transcrever
* Tomar decisões e definir ações

### Check (Verificar)

* Processar transcrição
* Verificar se ações foram cumpridas
* Medir eficácia da reunião

### Act (Agir)

* Ajustar formato se não está funcionando
* Eliminar reuniões improdutivas
* Documentar aprendizados

---

## 🚀 Próximos Passos

1. **Imprima este manual** ou salve em local acessível
2. **Treine facilitadores** de cada tipo de reunião
3. **Implemente gradualmente** — comece pelas reuniões mais críticas
4. **Meça eficácia** — reuniões devem gerar ação, não apenas discussão
5. **Itere e melhore** — este manual é vivo, ajuste conforme aprende

---

**Lembre-se:** Reunião boa é reunião curta, focada e acionável. Todo o resto é desperdício.

*Última atualização: [DATA]*
