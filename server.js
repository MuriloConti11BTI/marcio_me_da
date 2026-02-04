// Importar as dependências necessárias
const express = require('express');
const cors = require('cors');

// Criar instância do app Express
const app = express();

// Configuração do servidor
const PORT = 3000;

// Middleware
// Habilitar CORS para permitir requisições de outras origens
app.use(cors());

// Middleware para parsear JSON no body das requisições
app.use(express.json());

// Rotas
/**
 * Rota GET na raiz do servidor
 * Responde com um objeto JSON contendo uma mensagem amigável
 */
app.get('/', (req, res) => {
  res.json({
    mensagem: "Bem-vindo ao backend! Este é um servidor Node.js com Express rodando perfeitamente."
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`✓ Servidor rodando com sucesso na porta ${PORT}`);
  console.log(`✓ Acesse http://localhost:${PORT}/ para ver a mensagem`);
});
