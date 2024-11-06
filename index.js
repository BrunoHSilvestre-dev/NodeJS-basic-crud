const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/produtosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rota inicial de teste
app.get('/', (req, res) => {
  res.send('API de Produtos');
});

// Configuração da porta
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
