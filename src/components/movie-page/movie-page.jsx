import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {MOVIE_PAGE_FILMS_COUNT, AuthorizationStatus} from '../../const';
import {fetchMovie, logout} from '../../store/api-actions';
import MovieTabs from '../movie-tabs/movie-tabs';
import MovieList from '../movie-list/movie-list';
import LoadingScreen from '../loading-screen/loading-screen';

const MoviePage = ({films, filmById, filmByIdLoaded, onLoadFilmById, userInfo, authorizationStatus, onLogoutClick}) => {
  const {id} = useParams();
  const film = films.find((item) => item.id === parseInt(id, 10));

  useEffect(() => {
    if (!filmByIdLoaded || filmById.id !== id) {
      onLoadFilmById(id);
    }
  }, [id]);

  if (!filmByIdLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={filmById.background_image} alt={filmById.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <div className="user-block">
              {
                authorizationStatus === AuthorizationStatus.AUTH &&
                <>
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                  </div>
                  <Link to="/mylist" className="catalog__title">{userInfo.email}</Link>
                  <div>
                    <a className="catalog__title" href="#" onClick={onLogoutClick}>  Log out</a>
                  </div>
                </>
              }
              {
                authorizationStatus === AuthorizationStatus.NO_AUTH &&
                <Link to="/login" className="user-block__link">Sign in</Link>
              }
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmById.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmById.genre}</span>
                <span className="movie-card__year">{filmById.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <Link to="/mylist" className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </Link>
                {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={`/films/${film.id}/review`} className="btn movie-card__button">Add review</Link> : ``}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={filmById.poster_image} alt={filmById.name} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <MovieTabs
                film={filmById}
              />
            </div>
          </div>
        </div>

      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList films = {films.filter((item) => item.genre === film.genre).slice(0, MOVIE_PAGE_FILMS_COUNT)} />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MoviePage.propTypes = {
  films: PropTypes.array.isRequired,
  filmById: PropTypes.object.isRequired,
  filmByIdLoaded: PropTypes.bool.isRequired,
  onLoadFilmById: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userInfo: PropTypes.object,
  onLogoutClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  filmById: state.filmById,
  filmByIdLoaded: state.filmByIdLoaded,
  authorizationStatus: state.authorizationStatus,
  userInfo: state.userInfo
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmById(id) {
    dispatch(fetchMovie(id));
  },
  onLogoutClick() {
    dispatch(logout());
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
