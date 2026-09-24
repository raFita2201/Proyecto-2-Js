const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const tracksByGenre = {};

for (const track of tracks) {
  const genre = track.genre;

  // Si el género no existe como propiedad en el objeto, creamos el array
  if (!tracksByGenre[genre]) {
    tracksByGenre[genre] = [];
  }

  // Insertamos la canción dentro de su categoría correspondiente
  tracksByGenre[genre].push(track);
}

console.log(tracksByGenre);