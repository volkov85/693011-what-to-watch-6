import {ActionType} from '../action';
import {FILTER_ALL_GENRES} from '../../const';
import {getFilteredFilms} from '../../utils/utils';

const initialState = {
  selectedGenre: FILTER_ALL_GENRES,
  initialFilms: [],
  films: [],
  moviePromo: {},
  isDataLoaded: false,
  filmById: {},
  filmByIdLoaded: false,
  reviewsById: [],
  reviewsByIdLoaded: false,
  favoriteFilms: [],
  isFavoriteLoaded: false
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteFilms: action.payload,
        isFavoriteLoaded: true
      };
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
    default: return state;
  }
};

export {data};
