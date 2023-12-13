# MEC-Energia Web

Este repositório contém a implementação do frontend web do sistema MEC-Energia.

O sistema MEC-Energia tem por objetivo auxiliar as instituições de ensino superior (IES) a gerenciar e avaliar a adequação de contratos de conta de energia elétrica a partir do registro das faturas mensais de energia, gerando relatórios de recomendações de ajustes nos contratos visando economia de recursos.

A documentação online do sistema está disponível em [Documentação](https://lappis-unb.gitlab.io/projects/mec-energia/documentacao)

## Como executar o serviço em modo DEV

### 1. Pré-requisito Instalação das dependências de commit hooks

O projeto utiliza ferramentas para controlar o formato dos commits. Neste caso, é necessário ter o yarn e node instalados e instalar as dependências pelo comando abaixo.

```bash
yarn install
```

### 2. Executando o projeto localmente em modo DEV

```bash
yarn dev
```

O servidor será iniciado em [http://localhost:3000](http://localhost:3000).

## Para rodar em modo PRODUÇÃO

Efetua e build do projeto, versão otimizada da aplicação para produção.

```bash
yarn build
```

Inicie o servidor em produção.

```bash
yarn start
```

Opcionalmente, defina a porta para rodar o serviço. Ex: `yarn start -p 80`.