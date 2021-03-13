export const ActionType = {
  CHANGE_GENRE: `movies/changeGenre`,
  GET_MOVIE_LIST: `movies/getMovieList`,
  RESET_MOVIE_LIST: `movies/resetMovieList`,
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_PROMO_MOVIE: `data/loadPromoMovie`,
  REQUIRE_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  STORE_USER_LOGIN: `user/storeUserLogin`
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
  }),
  loadPromoMovie: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  storeUserLogin: (email) => ({
    type: ActionType.STORE_USER_LOGIN,
    payload: email
  })
};
