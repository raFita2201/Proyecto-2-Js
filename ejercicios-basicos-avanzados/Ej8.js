const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  // Asumimos que la palabra más larga es la primera del array
  let longestWord = stringList[0];

  // Recorremos el resto del array a partir de la posición 1
  for (let i = 1; i < stringList.length; i++) {
    // Si encontramos un string con mayor longitud, lo actualizamos
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }
  }

  // Devolvemos la palabra encontrada
  return longestWord;
}

// Ejemplo de prueba:
console.log(findLongestWord(avengers)); 
// Imprime: "Captain A."