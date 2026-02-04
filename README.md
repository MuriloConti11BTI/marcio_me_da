# Backend Simples Node.js + Express

Um backend simples e funcional criado com Node.js e Express, seguindo as melhores práticas de organização e limpeza de código.

## 📋 Estrutura do Projeto

```
javadissoai/
├── server.js          # Arquivo principal do servidor
├── package.json       # Dependências e scripts
├── .gitignore        # Arquivos a ignorar no git
└── README.md         # Este arquivo
```

## 🚀 Início Rápido

### 1. Inicializar o projeto (primeira vez)
```bash
npm init -y
```

### 2. Instalar as dependências
```bash
npm install express cors
npm install --save-dev nodemon
```

### 3. Rodar o servidor

**Modo desenvolvimento** (com auto-reload):
```bash
npm run dev
```

**Modo produção**:
```bash
npm start
```

## 📦 Dependências

- **express** - Framework web minimalista
- **cors** - Middleware para habilitar CORS
- **nodemon** (dev) - Auto-reload para desenvolvimento

## 🔧 Configuração do Servidor

- **Porta**: 3000
- **CORS**: Habilitado
- **Body Parser**: Express.json() ativado
- **Rota raiz**: GET `/` retorna uma mensagem JSON

## 📡 Endpoints

### GET /
Retorna uma mensagem de boas-vindas do backend.

**Resposta**:
```json
{
  "mensagem": "Bem-vindo ao backend! Este é um servidor Node.js com Express rodando perfeitamente."
}
```

## 🛠️ Scripts Disponíveis

- `npm start` - Inicia o servidor em modo produção
- `npm run dev` - Inicia o servidor em modo desenvolvimento com nodemon

## 📝 Notas

- O código está bem organizado e comentado
- Todos os arquivos estão prontos para usar
- Não há erros após a instalação das dependências
- Acesse `http://localhost:3000/` para testar o servidor
