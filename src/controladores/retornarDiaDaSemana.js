const VerificarDia = require("../utilities/verificaDiaDaSemana");

function retornarDiaDaSemana(req, res){
    const diaAtual = String(req.query.startDay);
    const quantDiasASePassar = Math.trunc(Number(req.query.amountOfDays));

    if(diaAtual != 'domingo' && diaAtual != 'segunda' && diaAtual != 'terca' && diaAtual != 'quarta' && diaAtual != 'quinda'
    && diaAtual != 'sexta' && diaAtual != 'sabado' ){
        return res.status(400).json('Utilize os seguintes formatos, domingo, segunda, terca, quarta, quinta, sexta, sabado');
    }

    if(quantDiasASePassar != Number(quantDiasASePassar) || quantDiasASePassar < 0){
        return res.status(400).json('amountOfDays precisa ser do tipo Number e maior que zero.')
    }

    res.json(VerificarDia(diaAtual, quantDiasASePassar));
}

module.exports = retornarDiaDaSemana;
