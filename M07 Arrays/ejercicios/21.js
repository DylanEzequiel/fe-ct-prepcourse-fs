function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let multiplo=undefined;
  for(var i=0;i<20;i++){
    if(n%secuencia[i]===0){
      multiplo=secuencia[i];
      break;
    }
  }
  return multiplo
}

module.exports = encontrarPrimerMultiploDeN;