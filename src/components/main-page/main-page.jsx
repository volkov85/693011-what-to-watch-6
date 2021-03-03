import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {MAIN_PAGE_FILMS_COUNT} from '../../const';
import MovieList from '../movie-list/movie-list';
import GenreList from '../genre-list/genre-list';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchMovies} from "../../store/api-actions";

const MainPage = ({films, isDataLoaded, onLoadData}) => {
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
          <img src={films[0].background_image} alt={films[0].name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={films[0].poster_image} alt={films[0].name} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{films[0].name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{films[0].genre}</span>
                <span className="movie-card__year">{films[0].released}</span>
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
          <MovieList films = {films.slice(0, MAIN_PAGE_FILMS_COUNT)} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
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
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  isDataLoaded: state.isDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMovies());
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
