import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getPromoStatus, getMoviePromo} from '../../store/data/selectors';
import {fetchPromoMovie} from '../../store/api-actions';
import Header from '../header/header';
import AddToMylistButton from '../add-to-mylist-button/add-to-mylist-button';

const MoviePromo = ({moviePromo, isPromoLoaded, onLoadData}) => {
  useEffect(() => {
    if (!isPromoLoaded) {
      onLoadData();
    }
  }, [isPromoLoaded]);

  return (
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
              <Link to={`/player/${moviePromo.id}`} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </Link>
              <AddToMylistButton movie={moviePromo}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MoviePromo.propTypes = {
  isPromoLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  moviePromo: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  moviePromo: getMoviePromo(state),
  isPromoLoaded: getPromoStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchPromoMovie());
  }
});

export {MoviePromo};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePromo);
