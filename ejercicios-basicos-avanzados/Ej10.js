const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let sum = 0;

  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
  }

  return sum / numberList.length;
}

// Prueba de la función:
console.log(average(numbers)); // Muestra: 23.428571428571427