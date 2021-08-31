const express = require('express');
const rotasWeek = require('./rotas/rotasweek');

const servidor = express();
servidor.use(express.json());
servidor.use(rotasWeek);

servidor.listen(3000);