import {NameSpace} from '../root-reducer';

export const getSelectedGenre = (state) => state[NameSpace.DATA].selectedGenre;
export const getInitialFilms = (state) => state[NameSpace.DATA].initialFilms;
export const getFilms = (state) => state[NameSpace.DATA].films;
export const getMoviePromo = (state) => state[NameSpace.DATA].moviePromo;
export const getDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getPromoStatus = (state) => state[NameSpace.DATA].isPromoLoaded;
export const getFilmById = (state) => state[NameSpace.DATA].filmById;
export const getFilmByIdStatus = (state) => state[NameSpace.DATA].filmByIdLoaded;
export const getReviewsById = (state) => state[NameSpace.DATA].reviewsById;
export const getReviewsByIdStatus = (state) => state[NameSpace.DATA].reviewsByIdLoaded;
export const getFavoriteMovies = (state) => state[NameSpace.DATA].favoriteFilms;
export const getFavoriteLoadStatus = (state) => state[NameSpace.DATA].isFavoriteLoaded;
export const getReviewFormDisabled = (state) => state[NameSpace.DATA].isReviewFormDisabled;
export const getReviewFormError = (state) => state[NameSpace.DATA].reviewFormError;
