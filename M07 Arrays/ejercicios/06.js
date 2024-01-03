function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let array2=[];
  array.forEach(element => {
    element=element*2
    array2.push(element)
  });
  return array2
}

module.exports = duplicarElementos;
