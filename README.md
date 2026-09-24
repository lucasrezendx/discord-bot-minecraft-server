# 🎮 Discord Bot — Minecraft Server

Bot completo para gerenciamento e integração de um servidor **Minecraft** através do **Discord**.

O projeto reúne ferramentas para facilitar a administração do servidor, permitindo consultar informações, acompanhar jogadores online, utilizar sistemas de tickets e outras funcionalidades diretamente pelo Discord.

## ✨ Funcionalidades

- 🖥️ **Status do servidor**
  - Consulta do estado do servidor Minecraft
  - Informações sobre jogadores online
  - Quantidade de jogadores conectados

- 🎫 **Sistema de Tickets**
  - Criação de tickets diretamente pelo Discord
  - Organização do atendimento da comunidade

- 🔐 **CAPTCHA**
  - Sistema de verificação para novos usuários
  - Ajuda a reduzir bots e acessos automatizados

- ⚙️ **Comandos personalizados**
  - Comandos organizados em módulos
  - Estrutura simples para adicionar novas funcionalidades

- 🔗 **Integração Minecraft + Discord**
  - Informações do servidor disponíveis diretamente no Discord
  - Facilita a administração e interação com a comunidade

## 🛠️ Tecnologias

- Node.js
- JavaScript
- Discord API
- Minecraft Server API

## 📁 Estrutura

```text
discord-bot-minecraft-server/
├── comandos/
├── .gitignore
├── config.json
├── index.js
├── package-lock.json
├── package.json
├── Procfile
└── status.js
```

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/lucasrezendx/discord-bot-minecraft-server.git
cd discord-bot-minecraft-server
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o bot

Edite o arquivo `config.json` com as informações necessárias para conectar o bot ao seu servidor e à sua aplicação do Discord.

> ⚠️ Nunca publique tokens ou credenciais do seu bot no GitHub.

### 4. Inicie o bot

```bash
node index.js
```

## ⚙️ Configuração

As principais configurações do projeto ficam no arquivo:

`config.json`

Dependendo da configuração utilizada, podem ser necessárias informações como:

- Token do Discord
- ID do servidor
- Informações do servidor Minecraft
- Canais utilizados pelo bot
- Configurações dos sistemas de tickets e CAPTCHA

## 🤖 Discord

Para utilizar o bot, crie uma aplicação no **Discord Developer Portal**, gere um bot e convide-o para o seu servidor com as permissões necessárias.

Certifique-se de manter o **token do bot privado**.

## 📊 Status do Minecraft

O bot possui integração para consultar o status do servidor Minecraft e disponibilizar informações como:

```text
🟢 Servidor Online

👥 Jogadores: 12/100
```

Isso permite que a comunidade acompanhe o servidor sem precisar sair do Discord.

## 🎫 Sistema de Tickets

O sistema de tickets permite que membros da comunidade entrem em contato com a equipe de administração de forma organizada.

Exemplo de fluxo:

```text
Usuário
   ↓
Abre um ticket
   ↓
Canal privado é criado
   ↓
Equipe atende o usuário
   ↓
Ticket é encerrado
```

## 🔐 Sistema CAPTCHA

O CAPTCHA adiciona uma camada de proteção ao servidor Discord, ajudando a impedir a entrada automatizada de bots.

## 📜 Licença

Este projeto não possui uma licença definida atualmente.

Caso queira permitir que outras pessoas utilizem, modifiquem e distribuam o projeto, considere adicionar uma licença, como a **MIT License**.

---

### 👨‍💻 Desenvolvido por Lucas Rezende

Projeto desenvolvido para integração e gerenciamento de comunidade **Minecraft + Discord**.

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório!
