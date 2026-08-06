

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

app.get('/api/salario/:valor/:hora', (req, res) => {
    const valor = Number(req.params.valor);
    const hora = Number(req.params.hora);
    const salario = valor * hora;
    res.send({message: salario});
  
});

app.get('/api/peso/pessoas/:peso1/:peso2/:peso3/:peso4/:peso5', (req, res) => {
    const peso1 = Number(req.params.peso1);
    const peso2 = Number(req.params.peso2);
    const peso3 = Number(req.params.peso3);
    const peso4 = Number(req.params.peso4);
    const peso5 = Number(req.params.peso5);

    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5;
    res.send({message: media});
});

app.get('/api/conversor/:celsius', (req, res) => {
    const celsius = Number(req.params.celsius);
    const fahrenheit = (celsius * 9/5) + 32;
    res.send({message: fahrenheit});
});

app.get('/api/distancia/:milha', (req, res) => {
    const milha = Number(req.params.milha);
    const quilometro = milha * 1.60934;
    res.send({message: quilometro});
});

app.get('/api/duracao/:segundos', (req, res) => {
    const segundos = Number(req.params.segundos);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    res.send({message: horas + " horas, " + (minutos % 60) + " minutos, " + (segundos % 60) + " segundos"});
});

app.get('/api/distanciametro/:quilometro', (req, res) => {
    const quilometro = Number(req.params.quilometro);
    const metros = quilometro * 1000;
    const centimetros = metros * 100;
    res.send({message: quilometro + " Quilometros é igual a" + metros + " metros, " + centimetros + " centímetros"});
});

app.get('/api/tabuada/:numero', (req, res) => {
    const numero = Number(req.params.numero);
    let tabuada = [];

    for (let i = 1; i <= 10; i++) {
        tabuada.push({ multiplicando: numero, multiplicador: i, resultado: numero * i });
    }

    res.send({ message: tabuada });
});

// Inicia o servidor na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
