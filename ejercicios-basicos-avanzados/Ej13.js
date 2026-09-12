const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToFind) {
  // Buscamos el índice del elemento en el array
  const position = nameList.indexOf(nameToFind);

  // Si position no es -1, significa que el elemento existe
  if (position !== -1) {
    return { found: true, position: position };
  } else {
    return false;
  }
}

// Pruebas de la función:
console.log(nameFinder(names, 'Tony'));   // Muestra: { found: true, position: 2 }
console.log(nameFinder(names, 'Wanda'));  // Muestra: false