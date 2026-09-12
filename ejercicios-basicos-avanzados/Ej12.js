const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  const uniqueElements = [];

  for (let i = 0; i < list.length; i++) {
    
    if (!uniqueElements.includes(list[i])) {
      uniqueElements.push(list[i]);
    }
  }

  return uniqueElements;
}

// Prueba de la función:
console.log(removeDuplicates(duplicates));