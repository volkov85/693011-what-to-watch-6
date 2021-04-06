import {ActionType} from '../action';
import {FILTER_ALL_GENRES} from '../../const';
import {data} from "./data";

const initialState = {
  selectedGenre: FILTER_ALL_GENRES,
  initialFilms: [],
  films: [],
  moviePromo: {},
  isDataLoaded: false,
  isPromoLoaded: false,
  filmById: {},
  filmByIdLoaded: false,
  reviewsById: [],
  reviewsByIdLoaded: false,
  favoriteFilms: [],
  isFavoriteLoaded: false,
  isReviewFormDisabled: false,
  reviewFormError: ``
};

describe(`Reducers in Data store work correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change genre to a given value`, () => {
    const state = {
      selectedGenre: `All genres`,
    };
    const changeGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `Drama`
    };

    expect(data(state, changeGenreAction))
      .toEqual({
        selectedGenre: `Drama`,
      });
  });

});
