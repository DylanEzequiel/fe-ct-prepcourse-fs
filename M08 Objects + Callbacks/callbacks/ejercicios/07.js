function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let arrayN=[];
  arrayOfStrings.forEach(element => {
    if(element[0]==="a"){
      arrayN.push(element);
    }
  });
  return arrayN
}

module.exports = filter;
