function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido 
  //hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5,
  // no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let resultados=[];
  let cant=0
  while(cant<10){
    cant=cant+1
    if(cant===5){
      continue
    }
    num=num+2;
    resultados.push(num);
  }
  return resultados
}

module.exports = continueStatement;
