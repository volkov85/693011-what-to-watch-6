import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {fetchMovie, addToFavorites} from '../../store/api-actions';
import MovieTabs from '../movie-tabs/movie-tabs';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../header/header';
import {getFilmById, getFilmByIdStatus} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import AddToMylistButton from "../add-to-mylist-button/add-to-mylist-button";
import MoreLikeThis from '../more-like-this/more-like-this';

const MoviePage = ({filmById, filmByIdLoaded, onLoadFilmById, authorizationStatus}) => {
  const {id} = useParams();

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

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmById.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmById.genre}</span>
                <span className="movie-card__year">{filmById.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${filmById.id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>

                <AddToMylistButton movie={filmById}/>
                {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={`/films/${filmById.id}/review`} className="btn movie-card__button">Add review</Link> : ``}
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

        <MoreLikeThis id={id} />

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
  filmById: PropTypes.object.isRequired,
  filmByIdLoaded: PropTypes.bool.isRequired,
  onLoadFilmById: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  handleAddToFavoriteClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filmById: getFilmById(state),
  filmByIdLoaded: getFilmByIdStatus(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmById(id) {
    dispatch(fetchMovie(id));
  },
  handleAddToFavoriteClick(id, status) {
    dispatch(addToFavorites(id, status));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
