const express = require("express");
const retornarDiaDaSemana = require("../controladores/retornarDiaDaSemana");

const rotasWeek = express();

rotasWeek.get('/weekday_after', retornarDiaDaSemana);

module.exports = rotasWeek;