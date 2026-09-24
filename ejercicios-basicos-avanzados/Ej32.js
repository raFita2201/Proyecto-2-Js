const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMenList) {
  // Manejo de caso borde: array vacío
  if (!xMenList || xMenList.length === 0) return null;

  let oldest = xMenList[0];

  for (const member of xMenList) {
    if (member.year < oldest.year) {
      oldest = member;
    }
  }

  return oldest;
}

const oldestXMen = findOldestXMen(xMen);
console.log(oldestXMen);