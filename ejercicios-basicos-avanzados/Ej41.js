function rollDice(numFaces) {
  // Genera un número entero aleatorio entre 1 y numFaces
  const result = Math.floor(Math.random() * numFaces) + 1;
  return result;
}

// ==========================================
// EJEMPLOS DE PRUEBA
// ==========================================

console.log("Dado clásico de 6 caras (D6):", rollDice(6));
console.log("Dado de 20 caras (D20 - Rol):", rollDice(20));
console.log("Dado de 100 caras (D100):", rollDice(100));
console.log("Lanzamiento de moneda (2 caras):", rollDice(2));