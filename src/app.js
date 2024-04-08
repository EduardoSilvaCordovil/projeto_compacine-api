const express = require('express');
const dbConnection = require('../database/db');
const app = express();
//const bodyParser = require('bodyParser');

const port = process.env.PORT || 3000;

app.use(express.json());
dbConnection;

// ROTA DE TESTE
app.use("/", (req, res) => {
    res.send('<h1>COMPACINE</h1>');
});

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON http://localhost: ${port}`);
});
