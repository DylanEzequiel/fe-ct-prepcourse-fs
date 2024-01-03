function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  let dias=0
  do{
     if(mes<1 || mes>12){
       return 0
      }
    }
  while(mes>1 || mes<12){
    switch(mes){
      case 1: dias=31;
      case 2: dias=29;
      case 3: dias=31;
      case 4: dias=30;
      case 5: dias=31;
      case 6: dias=30;
      case 7: dias=31;
      case 8: dias=31;
      case 9: dias=30;
      case 10: dias=31;
      case 11: dias=30;
      case 12: dias=31;
      default: 0
    }
  }
}

module.exports = diasEnMes;
