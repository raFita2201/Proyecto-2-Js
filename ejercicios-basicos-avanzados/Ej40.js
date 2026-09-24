const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// 1. Función para buscar el índice de un elemento
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; // Retorna -1 si el texto no está en el array
}

// 2. Función para eliminar un elemento usando findArrayIndex y .splice()
function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  // Solo eliminamos si el elemento realmente existe en el array
  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

// ==========================================
// EJEMPLOS DE PRUEBA
// ==========================================

console.log("--- Pruebas de findArrayIndex ---");
console.log("Índice de 'Leia':", findArrayIndex(mainCharacters, "Leia"));           // 1
console.log("Índice de 'Rey':", findArrayIndex(mainCharacters, "Rey"));             // 4
console.log("Índice de 'Yoda':", findArrayIndex(mainCharacters, "Yoda"));           // -1

console.log("\n--- Pruebas de removeItem ---");

// Copiamos el array para no modificar el original durante las pruebas
let charactersCopy1 = [...mainCharacters];
console.log("Eliminando 'Han Solo':", removeItem(charactersCopy1, "Han Solo"));

let charactersCopy2 = [...mainCharacters];
console.log("Eliminando 'Rey':", removeItem(charactersCopy2, "Rey"));

let charactersCopy3 = [...mainCharacters];
console.log("Intentando eliminar 'Darth Vader' (no existe):", removeItem(charactersCopy3, "Darth Vader"));