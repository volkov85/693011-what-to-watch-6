import {ActionType} from './action';
import {FILTER_ALL_GENRES, AuthorizationStatus} from '../const';
import {getFilteredFilms} from '../utils';

const initialState = {
  selectedGenre: FILTER_ALL_GENRES,
  initialFilms: [],
  films: [],
  moviePromo: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  filmById: {},
  filmByIdLoaded: false,
  reviewsById: [],
  reviewsByIdLoaded: false,
  userInfo: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        selectedGenre: action.payload
      };
    case ActionType.GET_MOVIE_LIST:
      return {
        ...state,
        films: getFilteredFilms([...state.films], state.selectedGenre)
      };
    case ActionType.LOAD_MOVIE:
      return {
        ...state,
        filmById: action.payload,
        filmByIdLoaded: true
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviewsById: action.payload,
        reviewsByIdLoaded: true
      };
    case ActionType.RESET_MOVIE_LIST:
      return {
        ...state,
        films: state.initialFilms
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        films: action.payload,
        initialFilms: action.payload,
        isDataLoaded: true
      };
    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        moviePromo: action.payload,
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default: return state;
  }
};

export {reducer};
