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

const getTimeLeft = (secondsCurrent) => {
  const hours = Math.floor(secondsCurrent / 60 / 60);
  const minutes = Math.floor(secondsCurrent / 60) - (hours * 60);
  const seconds = Math.floor(secondsCurrent % 60);
  return `${hours}:${minutes}:${seconds}`;
};

export {getUniqueGenres, getFilteredFilms, getTimeLeft};
