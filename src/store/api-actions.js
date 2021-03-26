import {loadMovies, loadFavoriteMovies, loadPromoMovie, loadMovie, getUserInfo, requireAuthorization, redirectToRoute, loadReviews} from './action';
import {AuthorizationStatus} from '../const';
import browserHistory from "../browser-history";

export const fetchMovies = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => dispatch(loadMovies(data)));
};

export const fetchFavoriteMovies = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteMovies(data)))
);

export const addToFavorites = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`, {id, status})
    .then(() => dispatch(fetchFavoriteMovies()))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => {
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoMovie(data)));
};

export const fetchMovie = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(loadMovie(data)))
    .catch(({response}) => {
      if (response.status === 404) {
        browserHistory.push(`/404`);
      }
    })
);

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(({data}) => dispatch(getUserInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(getUserInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)));
};

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data})=> dispatch(loadReviews(data)))
    .catch(() => {})
);

export const addReview = (id, rating, comment) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(() => dispatch(redirectToRoute(`/films/${id}`)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(getUserInfo({})))
);
