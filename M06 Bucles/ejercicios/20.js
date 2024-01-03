function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  for(var i=1;i<190;i+1){
    let suma=i+n
    if(i=100){
      break
    }
    return suma
  }
}
module.exports = sumarHastaNConBreak;