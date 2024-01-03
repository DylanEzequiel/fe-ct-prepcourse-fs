function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. 
  //Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: 
  //"No se encontraron los meses pedidos".
  // Tu código:
  let array2=[]
  array.forEach(element => {
    if (element==="Enero"){
      array2.push("Enero")
    }
    else if(element==="Marzo"){
      array2.push("Marzo")
    }
    else if(element==="Noviembre"){
      array2.push("Noviembre")
    }
  });
  if(array2.length!=3){
    return "No se encontraron los meses pedidos"
  }
  else{
    return array2
  }
}

module.exports = mesesDelAño;
