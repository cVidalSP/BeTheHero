const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //Quando não se passa nenhum parametro, nao se tem restricao alguma
/*
app.use(cors({
    origin: 'http://meuapp.com'   -- Somente esse endereco iria poder acessar a API
}))
*/
app.use(express.json());
app.use(routes);


app.listen(3333);