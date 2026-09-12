const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let totalSum = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      totalSum += list[i];
    } else if (typeof list[i] === "string") {
      totalSum += list[i].length;
    }
  }

  return totalSum / list.length;
}

// Prueba de la función:
console.log(averageWord(mixedElements)); 
// Suma total: 6 + 1 + 6 ("Marvel") + 1 + 11 ("hamburguesa") + 2 ("10") + 8 ("Prometeo") + 8 + 10 ("Hola mundo") = 53
// Promedio: 53 / 9 elementos = 5.888888888888889