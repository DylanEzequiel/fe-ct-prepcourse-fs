function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  for (var i=a; i!=b;i+1){
    let productoA= a/i
    let productoB= b/i
    return productoA, productoB
  }
}

module.exports = productoEntreNúmeros;