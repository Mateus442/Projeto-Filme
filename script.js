const movies = [
  { id: 1, title: 'Duna: Parte II', year: 2024, duration: '2h 46m', genre: 'scifi', rating: '8.5',
    desc: 'Paul Atreides se une aos Fremen para vingar sua família e evitar um futuro catastrófico.',
    poster: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
    banner: 'https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg',
    trending: true, popular: true },
  { id: 2, title: 'Oppenheimer', year: 2023, duration: '3h 0m', genre: 'drama', rating: '8.9',
    desc: 'A história do físico J. Robert Oppenheimer e o desenvolvimento da bomba atômica.',
    poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    banner: 'https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg',
    trending: true, popular: true },
  { id: 3, title: 'Barbie', year: 2023, duration: '1h 54m', genre: 'comedia', rating: '7.0',
    desc: 'Barbie viaja ao mundo real e descobre o que significa ser humana.',
    poster: 'https://image.tmdb.org/t/p/w500/iuFNMS8vlbZxOkIGEV7HKKDTgPZ.jpg',
    banner: 'https://image.tmdb.org/t/p/original/nHf61UzkfFno5X1ofIjkjHCWTZb.jpg',
    trending: true, popular: true },
  { id: 4, title: 'Poor Things', year: 2023, duration: '2h 21m', genre: 'drama', rating: '8.0',
    desc: 'Uma jovem ressuscitada por um cirurgião excêntrico explora o mundo com olhos frescos.',
    poster: 'https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXIf6rqK8QiL7r4.jpg',
    banner: 'https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
    trending: true, popular: true },
  { id: 5, title: 'Alien: Romulus', year: 2024, duration: '1h 59m', genre: 'terror', rating: '7.2',
    desc: 'Um grupo de jovens colonizadores enfrenta a forma de vida mais aterrorizante do universo.',
    poster: 'https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg',
    banner: 'https://image.tmdb.org/t/p/original/9f5S7nNFsBiMVfDfHTLa68jqnKG.jpg',
    popular: true },
  { id: 6, title: 'Furiosa', year: 2024, duration: '2h 28m', genre: 'acao', rating: '7.8',
    desc: 'A origem da lendária guerreira Mad Max em uma saga épica de sobrevivência.',
    poster: 'https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg',
    banner: 'https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl21M.jpg',
    popular: true },
  { id: 7, title: 'Deadpool & Wolverine', year: 2024, duration: '2h 7m', genre: 'acao', rating: '7.9',
    desc: 'Deadpool recruta Wolverine em uma missão de última hora que muda tudo.',
    poster: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    banner: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
    popular: true },
  { id: 8, title: 'Gladiador II', year: 2024, duration: '2h 28m', genre: 'acao', rating: '6.8',
    desc: 'Décadas após a queda de Maximus, Lucius busca seu destino na arena de Roma.',
    poster: 'https://image.tmdb.org/t/p/w500/f2cTzBqQoqSIJECdbbCIDDvZFioc.jpg',
    banner: 'https://image.tmdb.org/t/p/original/tkpjn1Oszmj3stoEilsiHz1YKEJ.jpg',
    popular: true },
  { id: 9, title: 'Matrix', year: 1999, duration: '2h 16m', genre: 'scifi', rating: '8.7',
    desc: 'Um hacker descobre a verdade sobre a realidade e seu papel na guerra contra as máquinas.',
    poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    banner: 'https://image.tmdb.org/t/p/original/6q0RnwhvIzconfbGTurkHjl5qri.jpg',
    classic: true },
  { id: 10, title: 'O Poderoso Chefão', year: 1972, duration: '2h 55m', genre: 'drama', rating: '9.2',
    desc: 'A história da família mafiosa Corleone e a transferência de poder.',
    poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLashi7tk0Et.jpg',
    banner: 'https://image.tmdb.org/t/p/original/tmU7GeKVybMWFbwxFpGFP1KXrq.jpg',
    classic: true },
  { id: 11, title: 'Clube da Luta', year: 1999, duration: '2h 19m', genre: 'drama', rating: '8.8',
    desc: 'Um insone conhece um vendedor de sabão e juntos formam um clube clandestino de luta.',
    poster: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    banner: 'https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
    classic: true },
  { id: 12, title: 'Pulp Fiction', year: 1994, duration: '2h 34m', genre: 'drama', rating: '8.9',
    desc: 'Histórias entrecortadas de crime, violência e redenção em Los Angeles.',
    poster: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    banner: 'https://image.tmdb.org/t/p/original/suaEOmZDnupd7g4e6aZPGf2iMaX.jpg',
    classic: true }
];

const genreNames = {
  all: 'Todos',
  acao: 'Ação',
  drama: 'Drama',
  comedia: 'Comédia',
  terror: 'Terror',
  scifi: 'Sci-Fi',
  animacao: 'Animação',
  romance: 'Romance'
};

const popularMovies = movies.filter(movie => movie.popular);
let currentGenre = 'all';
const searchInput = document.getElementById('searchInput');

function createCard(movie, delay = 0) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.style.animationDelay = `${delay}ms`;
  card.innerHTML = `
    <img class="movie-poster" src="${movie.poster}" alt="${movie.title}" loading="lazy" />
    <div class="movie-badge">★ ${movie.rating}</div>
    <div class="movie-overlay">
      <div class="movie-play">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg>
      </div>
    </div>
    <div class="movie-info">
      <div class="movie-title">${movie.title}</div>
      <div class="movie-year">${movie.year} · ${movie.duration}</div>
    </div>`;
  card.addEventListener('click', () => openModal(movie));
  return card;
}

function renderSection(containerId, list) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  list.forEach((movie, index) => container.appendChild(createCard(movie, index * 60)));
}

function getGenreLabel(genreKey) {
  return genreNames[genreKey] || genreKey;
}

function getFilteredPopularMovies() {
  let filtered = currentGenre === 'all'
    ? popularMovies
    : popularMovies.filter(movie => movie.genre === currentGenre);

  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(movie => movie.title.toLowerCase().includes(query) || getGenreLabel(movie.genre).toLowerCase().includes(query));
  }

  return filtered;
}

function updatePopularGrid() {
  const filtered = getFilteredPopularMovies();
  renderSection('popularGrid', filtered.length ? filtered : popularMovies);
}

function openModal(movie) {
  document.getElementById('modalBanner').src = movie.banner;
  document.getElementById('modalTitle').textContent = movie.title;
  document.getElementById('modalRating').textContent = `★ ${movie.rating}`;
  document.getElementById('modalYear').textContent = movie.year;
  document.getElementById('modalDuration').textContent = movie.duration;
  document.getElementById('modalGenre').textContent = getGenreLabel(movie.genre);
  document.getElementById('modalDesc').textContent = movie.desc;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(event) {
  if (event.target.id === 'modalOverlay') {
    closeModalDirect();
  }
}

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleGenreClick(event) {
  const pill = event.target.closest('.genre-pill');
  if (!pill) return;

  currentGenre = pill.dataset.genre;
  document.querySelectorAll('.genre-pill').forEach(button => button.classList.toggle('active', button === pill));
  updatePopularGrid();
}

function handleNavLinkClick(event) {
  const link = event.target.closest('.nav-links a');
  if (!link) return;

  document.querySelectorAll('.nav-links a').forEach(anchor => anchor.classList.remove('active'));
  link.classList.add('active');
}

function init() {
  renderSection('trendingRow', movies.filter(movie => movie.trending));
  renderSection('classicsRow', movies.filter(movie => movie.classic));
  updatePopularGrid();

  document.getElementById('genres').addEventListener('click', handleGenreClick);
  document.querySelector('.nav-links').addEventListener('click', handleNavLinkClick);
  searchInput.addEventListener('input', updatePopularGrid);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModalDirect();
    }
  });
}

window.addEventListener('DOMContentLoaded', init);