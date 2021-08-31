function VerificarDia(diaAtual, diasPassados){
    let proximoSera = '';
    if(diaAtual === 'domingo'){
        proximoSera = diasPassados % 7; // se 2 == terça
    }
    if(diaAtual === 'segunda'){
        proximoSera = (1 + diasPassados) % 7;
    }
    if(diaAtual === 'terca'){
        proximoSera = (2 + diasPassados) % 7;
    }
    if(diaAtual === "quarta"){
        proximoSera = (3 + diasPassados) % 7;
    }
    if(diaAtual === "quinta"){
        proximoSera = (4 + diasPassados) % 7;
    }
    if(diaAtual === "sexta"){
        proximoSera = (5 + diasPassados) % 7;
    }
    if(diaAtual === "sabado"){
        proximoSera = (6 + diasPassados) % 7;
    }

    if (proximoSera === 0 || proximoSera === 7 ){
        proximoSera= 'domingo';
    }else if(proximoSera === 1){
        proximoSera = 'segunda';
    }else if(proximoSera === 2){
        proximoSera = 'terca';
    }else if(proximoSera === 3){
        proximoSera = 'quarta';
    }else if(proximoSera === 4){
        proximoSera = 'quinta';
    }else if(proximoSera === 5){
        proximoSera = 'sexta';
    }else if(proximoSera === 6){
        proximoSera = 'sabado';
    }

    return proximoSera;
}

module.exports = VerificarDia;