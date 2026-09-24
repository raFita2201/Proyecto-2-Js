const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  } else {
    return `Lo siento, el país "${country}" no se encuentra en la lista.`;
  }
}

// Pruebas de la función
console.log(getCapital('Spain'));    // Madrid
console.log(getCapital('France'));   // Paris
console.log(getCapital('Mexico'));   // Lo siento, el país "Mexico" no se encuentra en la lista.