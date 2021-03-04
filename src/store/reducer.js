import {ActionType} from './action';
import {FILTER_ALL_GENRES, AuthorizationStatus} from '../const';
import {getFilteredFilms} from '../utils';

const initialState = {
  selectedGenre: FILTER_ALL_GENRES,
  initialFilms: [],
  films: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false
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
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    default: return state;
  }
};

export {reducer};
