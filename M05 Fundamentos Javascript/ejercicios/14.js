function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  let lon1=str1.lenght
  let lon2=str2.lenght
  if(lon1===lon2){
    return true
  }
  else{
    return false
  }
}

module.exports = tienenMismaLongitud;