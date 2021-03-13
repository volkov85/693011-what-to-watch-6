import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {MAIN_PAGE_FILMS_COUNT, AuthorizationStatus} from '../../const';
import MovieList from '../movie-list/movie-list';
import GenreList from '../genre-list/genre-list';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchMovies, fetchPromoMovie} from "../../store/api-actions";

const MainPage = ({films, isDataLoaded, onLoadData, authorizationStatus, userLogin, moviePromo}) => {
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

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {
              authorizationStatus === AuthorizationStatus.AUTH &&
              <>
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
                <p className="user-block">{userLogin}</p>
              </>
            }
            {
              authorizationStatus === AuthorizationStatus.NO_AUTH &&
              <Link to="/login" className="user-block__link">Sign in</Link>
            }
          </div>
        </header>

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
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userLogin: PropTypes.string.isRequired,
  moviePromo: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
  userLogin: state.userLogin,
  moviePromo: state.moviePromo
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMovies());
    dispatch(fetchPromoMovie());
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
