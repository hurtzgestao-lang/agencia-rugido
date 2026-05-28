# Grupo Rugido — Diretoria Comercial

Workspace da Diretora Comercial do Grupo Rugido — consultoria comercial B2B em Engenharia de Receita.

## O que é esse workspace

Diretoria Comercial do Grupo Rugido — consultoria B2B em Engenharia de Receita (12 meses, 5 pilares: Diagnóstico, Oferta, Demanda, Conversão, Tecnologia). Modelo Done With You (execução junto com cliente, não templates).

**ICP:** empresas B2B de serviço, faturamento mínimo R$ 100k/mês.

## Estrutura do workspace

```
├── _contexto/           # Memória do sistema
├── clientes/            # Clientes ativos e propostas
├── briefings/           # Briefings de novos clientes
├── propostas/          # Propostas comerciais
├── conteudo/            # Ativos comerciais externos
├── comercial/           # Operação comercial
│   ├── pre-vendas/     # SDRs
│   └── vendas/         # Closers
├── marketing/           # Time de Marketing
├── entrega/            # Sucesso do Cliente
├── lideranca/          # Rituais de liderança
├── financeiro/         # Financeiro
├── rh/                 # RH
├── operacoes/          # Processos internos
│   └── rituais-gerais/ # Rituais transversais
├── projetos/           # Projetos multi-setor
├── dados/             # Arquivos para análise
├── marca/             # Identidade visual
└── tarefas.md         # Tarefas correntes
```

## Manual de Rituais

Guia operacional dos rituais recorrentes da Agência Rugido. Documentado em `operacoes/manual-rituais-agencia.md`.

Também disponível de forma individualizada por departamento:
- **marketing/** — Daily, Review Criativos, Planejamento de Campanhas
- **comercial/pre-vendas/** — 6 rituais do time de SDR
- **comercial/vendas/** — 6 rituais do time de Closers
- **entrega/** — 7 rituais do Sucesso do Cliente
- **lideranca/** — 3 rituais estratégicos
- **operacoes/rituais-gerais/** — Kickoff e Review Trimestral

## Ferramentas

- Kommo (CRM)
- Gamma (apresentações)
- 3CPlus (VoIP)
- N8N (automação)
- Supabase / Airbyte (dados)
- Google Sheets
- Google Calendar (10 calendários)

## Skills Claude Code

- `evolution-api` — Dispara mensagens WhatsApp
- `generate-image` — Gera imagens via OpenRouter
- `google-calendar` — Gerencia Google Calendar
- `google-sheets` — Interage com Google Sheets

## Metodologia

Engenharia de Receita, Restrição Ativa, SPICED, Micro-Compromissos (MP1-MP4), P3, Triângulo de Receita, Nutrição Infinita, Cadência Multicanal, Protocolo Gerador de Caixa, Venda Invisível, Fala-Fecha, Hack do Bom Dia Errado.

## Começando

No início de cada sessão, o contexto do negócio é carregado automaticamente de `_contexto/`.

## Usando com Codex

O projeto tem um `AGENTS.md` na raiz com as instruções nativas para o Codex: contexto que deve ser lido, tom de voz, estrutura de pastas, comandos úteis e cuidados com segredos.

Para automações locais:

```bash
cd scripts
npm install
npm run meta:debug
```

Use `.env.example` como referência das variáveis necessárias. O `.env` real fica fora do Git.
