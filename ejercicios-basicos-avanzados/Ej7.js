function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne);
  } else if (numberTwo > numberOne) {
    console.log(numberTwo);
  } else {
    console.log("Ambos números son iguales: " + numberOne);
  }
}

// Ejemplos de prueba:
greaterNumber(10, 5);  // Muestra 10
greaterNumber(3, 8);   // Muestra 8
greaterNumber(4, 4);   // Muestra que son iguales