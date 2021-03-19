import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';
import browserHistory from "../browser-history";

export const fetchMovies = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)));
};

export const fetchPromoMovie = () => (dispatch, _getState, api) => {
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromoMovie(data)));
};

export const fetchMovie = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadMovie(data)))
    .catch(({response}) => {
      if (response.status === 404) {
        browserHistory.push(`/404`);
      }
    })
);

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.storeUserLogin(email)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)));
};
