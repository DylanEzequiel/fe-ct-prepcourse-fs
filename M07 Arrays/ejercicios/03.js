function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  array.forEach(element => {
    if(element===elemento){
      return elemento
    }
    else return 1
  });
}

module.exports = encontrarElemento;
