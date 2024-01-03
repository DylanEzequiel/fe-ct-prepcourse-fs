function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  array.forEach(element => {
    element.toUpperCase()
    return element
  });
}

module.exports = convertirStringAMayusculas;
