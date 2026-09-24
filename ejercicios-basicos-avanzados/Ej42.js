function swap(array, index1, index2) {
  // Intercambio en una sola línea usando ES6 destructuring
  [array[index1], array[index2]] = [array[index2], array[index1]];
  
  return array;
}

const fantasticFourAlt = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

// Pruebas intercambiando índice 1 ("Mr. Fantástico") e índice 2 ("La mujer invisible")
console.log(swap(fantasticFourAlt, 1, 2));