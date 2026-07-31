

console.log("Hello, World!");

import express from 'express';
const app = express();
const port = 3000;

// Método GET na rota raiz '/'
app.get('/api/somar', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const soma = num1 + num2
    res.send({message: soma});
}
  

);

// Inicia o servidor na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
