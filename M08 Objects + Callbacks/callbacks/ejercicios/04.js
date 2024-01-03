function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  let arg=0;
  arrayOfNumbers.forEach(element => {
    arg=element+arg
    return arg
  });
  let resultado=cb(arg)
}

module.exports = sumarArray;
