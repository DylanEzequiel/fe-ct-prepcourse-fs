function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let divisor= resultadosTest.length
  let total=0
  resultadosTest.forEach(element => {
    total=element+total
  });
  let promedio=total/divisor
  return promedio
}

module.exports = promedioResultadosTest;
