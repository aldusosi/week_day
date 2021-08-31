const VerificarDia = require("../utilities/verificaDiaDaSemana");

function retornarDiaDaSemana(req, res){
    const diaAtual = String(req.query.startDay);
    const quantDiasASePassar = Number(req.query.amountOfDays);
    
    console.log(diaAtual)

    res.json(VerificarDia(diaAtual, quantDiasASePassar));


}

module.exports = retornarDiaDaSemana;