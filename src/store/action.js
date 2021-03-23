export const ActionType = {
  CHANGE_GENRE: `data/changeGenre`,
  GET_MOVIE_LIST: `data/getMovieList`,
  RESET_MOVIE_LIST: `data/resetMovieList`,
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_PROMO_MOVIE: `data/loadPromoMovie`,
  LOAD_MOVIE: `data/loadMovie`,
  LOAD_REVIEWS: `data/loadReviews`,
  REQUIRE_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  GET_USER_INFO: `user/getUserInfo`
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

export const getMovieList = () => ({
  type: ActionType.GET_MOVIE_LIST
});

export const resetMovieList = () => ({
  type: ActionType.RESET_MOVIE_LIST
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies
});

export const loadPromoMovie = (movie) => ({
  type: ActionType.LOAD_PROMO_MOVIE,
  payload: movie
});

export const loadMovie = (filmById) => ({
  type: ActionType.LOAD_MOVIE,
  payload: filmById
});

export const loadReviews = (reviewsById) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviewsById
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const getUserInfo = (userInfo) => ({
  type: ActionType.GET_USER_INFO,
  payload: userInfo,
});
