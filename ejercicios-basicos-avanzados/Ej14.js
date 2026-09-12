const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  const count = {};

  for (let i = 0; i < list.length; i++) {
    const word = list[i];

    // Si la palabra ya existe en el objeto, le sumamos 1
    if (count[word]) {
      count[word]++;
    } else {
      // Si no existe, la creamos e inicializamos a 1
      count[word] = 1;
    }
  }

  return count;
}

// Prueba de la función:
console.log(repeatCounter(words));