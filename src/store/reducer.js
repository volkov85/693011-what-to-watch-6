import {ActionType} from './action';
import films from '../mocks/films';
import reviews from '../mocks/reviews';
import {FILTER_ALL_GENRES} from '../const';

const initialState = {
  genre: FILTER_ALL_GENRES,
  films,
  reviews
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.GET_MOVIE_LIST:
      return {
        ...state,
        films: [...state.films]
      };
    default: return state;
  }
};

export {reducer};
