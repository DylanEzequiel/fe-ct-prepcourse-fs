function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let pares=0
  numeros.forEach(element => {
    if(element%2===0){
      pares=pares+1
    }
  });
  return pares;
}

module.exports = contarParesConContinue;
