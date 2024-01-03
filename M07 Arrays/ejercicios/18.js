function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido
  // hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  let cant=0
  
  while (cant!=10||num===cant){
    let array=[]
    if(num!==cant){
      num=num+2
      array.push(num)
      return array
    }
    else if( num===cant){
      return "Se interrumpio la ejecución"
      break;
    }
    
    
  }
}

module.exports = breakStatement;
