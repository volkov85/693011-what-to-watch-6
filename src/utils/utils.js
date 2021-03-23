import {FILTER_ALL_GENRES} from '../const';

const getUniqueGenres = (films) => {
  const genres = films.map((item) => item.genre);
  const uniqueGenres = Array.from(new Set(genres));
  uniqueGenres.unshift(FILTER_ALL_GENRES);
  return uniqueGenres;
};

const getFilteredFilms = (films, genre) => {
  if (genre === FILTER_ALL_GENRES) {
    return films;
  } else {
    return films.filter((item) => item.genre === genre);
  }
};

export {getUniqueGenres, getFilteredFilms};
