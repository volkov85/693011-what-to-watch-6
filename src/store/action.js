export const ActionType = {
  CHANGE_GENRE: `movies/changeGenre`,
  GET_MOVIE_LIST: `movies/getMovieList`,
  RESET_MOVIE_LIST: `movies/resetMovieList`,
  LOAD_MOVIES: `data/loadMovies`,
  REQUIRE_AUTHORIZATION: `user/requiredAuthorization`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getMovieList: () => ({
    type: ActionType.GET_MOVIE_LIST
  }),
  resetMovieList: () => ({
    type: ActionType.RESET_MOVIE_LIST
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies
  })
};
