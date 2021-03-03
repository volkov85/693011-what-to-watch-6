export const ActionType = {
  CHANGE_GENRE: `movies/changeGenre`,
  GET_MOVIE_LIST: `movies/getMovieList`,
  LOAD_MOVIES: `data/loadMovies`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getMovieList: () => ({
    type: ActionType.GET_MOVIE_LIST
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies
  })
};
