const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutantsList, powerSearch) {
  const foundMutants = [];

  for (const mutant of mutantsList) {
    if (mutant.power === powerSearch) {
      foundMutants.push(mutant.name);
    }
  }

  if (foundMutants.length > 0) {
    return `Se encontraron mutantes con el poder "${powerSearch}": ${foundMutants.join(', ')}.`;
  } else {
    return `No se encontró ningún mutante con el poder "${powerSearch}".`;
  }
}

// Pruebas de la función
console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'flight'));