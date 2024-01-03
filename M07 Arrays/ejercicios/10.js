function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let numM=Math.max(...array)
  let index=array.indexOf(numM)
  if(index===-1){
    index=0
  }
  return index

}
module.exports = encontrarIndiceMayor;
