function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" 
  //correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia
  // de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  let num=1
  for(var i=0;i<=numeros.length;i++){
    if(num===numeros[i]){
      num=num+1
      return numeros[i]
    }
    
  }
}

module.exports = encontrarNumeroFaltante;