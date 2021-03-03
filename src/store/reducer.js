import {ActionType} from './action';
import {FILTER_ALL_GENRES, AuthorizationStatus} from '../const';
import {getFilteredFilms} from '../utils';

const initialState = {
  selectedGenre: FILTER_ALL_GENRES,
  films: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH
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
        films: getFilteredFilms([...state.initialFilms], state.selectedGenre)
      };
    default: return state;
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
  }
};

export {reducer};
