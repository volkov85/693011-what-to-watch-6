import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';

export const fetchMovies = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)));
};

export const fetchPromoMovie = () => (dispatch, _getState, api) => {
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromoMovie(data)));
};

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
