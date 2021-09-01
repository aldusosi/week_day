# week_day

**API_REST**

**GET**/weekday-after?startDay={diaDaSemana}&amountOfDays={numberDeDiasASePassar}


**startDay** -> recebe um dia qualquer da semana

**amountOfDays** -> recebe um numero inteiro que representa a quantidade de dias correntes em relação a *startDay*.


Esta rota recebe duas querys e a partir de seus valores retorna qual dia da semana cairá após

passarem-se um determinado numero de dias.

exemplo:

**GET**/weekday-after?startDay=terca&amountOfDays=5

resposta = "domingo"
