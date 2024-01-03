function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let array2=[]
  array.forEach(element => {
    for(var i=0;i<=array.length;i++){
      let Nelement=array[i]*i
      array2.push(Nelement)
    }
  });
  return array2
}

module.exports = multiplicarElementosPorIndice;
