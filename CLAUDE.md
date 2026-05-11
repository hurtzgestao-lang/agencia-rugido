# Grupo Rugido — Claude Code OS

## O que é esse workspace
Workspace da Diretora Comercial do Grupo Rugido — consultoria comercial B2B em Engenharia de Receita (12 meses, 5 pilares: Diagnóstico, Oferta, Demanda, Conversão, Tecnologia). Modelo Done With You (execução junto com cliente, não templates). ICP: empresas B2B de serviço, faturamento mínimo R$ 100k/mês.

**Estrutura de pastas:**
- `_contexto/` — memória do sistema (não apagar)
- `clientes/` — uma pasta por cliente com briefing e proposta
- `briefings/` — briefings de clientes novos
- `propostas/` — propostas comerciais
- `conteudo/` — ativos comerciais externos (apresentações, materiais de pitch)
- `marketing/` — campanhas, conteúdo, mídia paga, redes sociais; rituais individuais do time
- `comercial/` — propostas, pipeline, materiais de venda
  - `pre-vendas/` — rituais individuais do time de SDR
  - `vendas/` — rituais individuais do time de Closers
- `entrega/` — Sucesso do Cliente; rituais individuais do time
- `lideranca/` — rituais estratégicos individuais
- `financeiro/` — relatórios, fluxo de caixa, orçamentos
- `rh/` — processos seletivos, onboarding, documentos de equipe
- `operacoes/` — processos internos, SOPs, fornecedores
  - `rituais-gerais/` — rituais transversais (Kickoff, Review Trimestral)
  - `manual-rituais-agencia.md` — manual consolidado de todos os rituais
- `projetos/` — projetos que envolvem mais de um setor
- `dados/` — arquivos para análise (CSV, PDF, etc)
- `marca/` — ativos de marca (logo, design guide, cores)
- `tarefas.md` — lista de tarefas corrente
- `templates/skills/` — templates de skills prontos pra personalizar com /mapear

## Sobre o negócio
Consultoria comercial B2B focada em Engenharia de Receita — programa estruturado de 12 meses entregue junto com cliente (Done With You). Liderado pelo CEO Lucas Felix, Diretora Comercial Klebson. Atua em estruturação de operações comerciais (time de SDR/Closer/BDR/Social Seller, pipelines CRM, sistemas de calendário, agentes de IA) e produção de ativos comerciais (apresentações, propostas, pitch).

## O que mais fazemos aqui
- Estruturação de departamentos da empresa (marketing, comercial, financeiro, RH, operações)
- Estruturação de operação comercial interna
- Produção de ativos comerciais externos (apresentação ER, propostas, materiais de pitch)
- Liderança e gestão do time de Closers
- Criar propostas ativas de prospecção B2B pra clientes
- Apresentações comerciais em Gamma

## Clientes e contexto
Atende os dois — interno (operação Rugido) e externos (empresas B2B). Exemplo: proposta ativa pra Gran Arte (stands pra eventos). ICP: empresas B2B de serviço, faturamento mínimo R$ 100k/mês.

## Tom de voz
Direto, breve, conciso. Português BR sempre. Confirmações com uma palavra ("Sim"). Títulos nomeiam o entregável, subtítulos carregam a promessa. Copy de slide: punchy, sem rodeios. Propostas: curtas por design.

## Ferramentas conectadas
- Kommo (CRM)
- Gamma (apresentações)
- 3CPlus (VoIP)
- N8N (automação)
- Supabase (dados)
- Airbyte (dados)
- Google Sheets
- Google Calendar (10+ calendários: 2 transversais, 4 da Agência, 4 das demais unidades)

**Scripts de calendário disponíveis** (`.claude/skills/google-calendar/`):
- `create-pre-vendas-events.sh` — Recria eventos do calendário de Pré-vendas (SDR)
- `create-vendas-events.sh` — Recria eventos do calendário de Vendas (Closers)

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (se existirem e estiverem configurados):

1. `_contexto/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_contexto/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_contexto/estrategia.md` — foco atual, prioridades, o que pode esperar

Usar essas informações como base pra qualquer resposta ou decisão. Ao sugerir prioridades, formatos ou abordagens, considerar o foco atual descrito em `estrategia.md`.

Para qualquer tarefa visual (carrossel, proposta, slide, landing page), consultar `marca/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe uma skill relevante em `.claude/skills/` ou `.claude/commands/`.
Se encontrar, seguir as instruções da skill.
Se não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o padrão de repetição for claro.

---

## Skills instaladas
- `evolution-api` — dispara mensagens WhatsApp via Evolution API do Rugido
- `generate-image` — gera imagens usando OpenRouter com modelo GPT-5 Image
- `google-calendar` — gerencia Google Calendar via API v3 REST usando credenciais do .env
- `google-sheets` — interage com Google Sheets API usando credenciais do .env (ler, escrever, atualizar)
- `google-drive` — controla Google Drive via API v3 REST (lista, busca, baixa, exporta, sobe, copia, move, compartilha)
- `fathom` — acessa reuniões gravadas no Fathom via API REST (lista reuniões, lê transcrições e resumos). Requer `FATHOM_API_KEY` no .env.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma instrução que parece permanente (frases como "na verdade é assim", "não faça mais isso", "prefiro assim", "sempre que...", "evita...", "da próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (quem são os clientes, como funciona a empresa, serviços, mercado) → adicionar em `_contexto/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato de resposta, o que evitar, como estruturar textos) → adicionar em `_contexto/preferencias.md`
- **Sobre prioridades e foco atual** (projetos em andamento, metas do momento, prazos importantes, o que é prioridade agora) → adicionar em `_contexto/estrategia.md`
- **Regra de comportamento nessa pasta** (onde salvar arquivos, como nomear, fluxos específicos) → adicionar no próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar o que foi salvo mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na verdade o arquivo se chama X"). Só perguntar quando a informação tiver valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante no projeto (novo cliente, nova skill, mudança de foco, novo processo, ferramenta instalada, estrutura de pastas alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize os arquivos de memória?"

Se sim, identificar o que precisa atualizar:

- **Novo cliente, serviço, ferramenta, equipe** → `_contexto/empresa.md`
- **Mudança de prioridade ou foco** → `_contexto/estrategia.md`
- **Correção de tom ou estilo** → `_contexto/preferencias.md`
- **Nova pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Mudança visual (cores, fontes, logo)** → `marca/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais que não mudam o contexto (ex: escrever um email, criar um post avulso)
- Perguntas simples ou conversas sem ação
- Mudanças que já foram salvas pelo bloco "Aprender com correções"

**Dica:** se não sabe se algo mudou, rode `/atualizar` pra uma varredura completa.

---

## Criação de skills

Quando o usuário pedir pra criar uma nova skill:

1. Verificar se existe um template relevante em `templates/skills/`. Se existir, usar como base e adaptar pro contexto do usuário
2. Perguntar: "Essa skill é específica pra esse projeto ou vai ser útil em qualquer projeto?"
   - Específica desse negócio → salvar em `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Útil em qualquer projeto → salvar em `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_contexto/empresa.md` e `_contexto/preferencias.md` pra calibrar o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, referências, exemplos), criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code
