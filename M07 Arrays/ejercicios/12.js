function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let resultado=0
  arrayOfNums.forEach(element => {
    resultado=element+resultado
    })
  return resultado
}

module.exports = agregarNumeros;
