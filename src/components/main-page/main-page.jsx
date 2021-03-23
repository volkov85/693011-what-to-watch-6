import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {MAIN_PAGE_FILMS_COUNT} from '../../const';
import MovieList from '../movie-list/movie-list';
import GenreList from '../genre-list/genre-list';
import LoadingScreen from '../loading-screen/loading-screen';
import ShowMore from '../show-more/show-more';
import {fetchMovies, fetchPromoMovie} from "../../store/api-actions";
import Header from '../header/header';

const MainPage = ({films, isDataLoaded, onLoadData, moviePromo}) => {
  const [filmsCount, setFilmsCount] = useState(MAIN_PAGE_FILMS_COUNT);
  const handleShowMoreClick = () => setFilmsCount((currentCount) => currentCount + MAIN_PAGE_FILMS_COUNT);

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={moviePromo.background_image} alt={moviePromo.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={moviePromo.poster_image} alt={moviePromo.name} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{moviePromo.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{moviePromo.genre}</span>
                <span className="movie-card__year">{moviePromo.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />
          <MovieList films = {films.slice(0, filmsCount)} />
          {filmsCount < films.length && <ShowMore onClick={handleShowMoreClick} />}

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MainPage.propTypes = {
  films: PropTypes.array.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  moviePromo: PropTypes.object.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
  isDataLoaded: DATA.isDataLoaded,
  moviePromo: DATA.moviePromo
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMovies());
    dispatch(fetchPromoMovie());
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
