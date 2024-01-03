function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let cant=0
  array.forEach(element => {
    if(element>10){
      cant=cant+1
    }
  });
  return cant
}

module.exports = contarElementosMayoresA10;
