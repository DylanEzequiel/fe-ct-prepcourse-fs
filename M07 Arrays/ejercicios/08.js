function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let arrP=[];
  array.forEach(element => {
    if(element%2===0){
      arrP.push(element)
    }
  });
  return arrP
}

module.exports = filtrarNumerosPares;
