const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let totalVolume = 0;
let totalSoundsCount = 0;

// for...of para recorrer el array de usuarios
for (const user of users) {
  const sounds = user.favoritesSounds;

  // for...in para recorrer las claves del objeto de sonidos favoritos
  for (const soundKey in sounds) {
    totalVolume += sounds[soundKey].volume;
    totalSoundsCount++;
  }
}

const averageVolume = totalVolume / totalSoundsCount;

console.log(`Suma total de volumen: ${totalVolume}`);
console.log(`Cantidad total de sonidos: ${totalSoundsCount}`);
console.log(`La media del volumen es: ${averageVolume}`);