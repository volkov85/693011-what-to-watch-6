import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MovieList from '../movie-list/movie-list';
import {MOVIE_PAGE_FILMS_COUNT} from '../../const';
import {getDataStatus, getFilms} from '../../store/data/selectors';
import {fetchMovies} from '../../store/api-actions';

const MoreLikeThis = ({films, isDataLoaded, onLoadData, id}) => {
  const film = films.find((item) => item.id === parseInt(id, 10));

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <MovieList films = {films.filter((item) => item.genre === film.genre).slice(0, MOVIE_PAGE_FILMS_COUNT)} />

    </section>
  );
};

MoreLikeThis.propTypes = {
  films: PropTypes.array.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  isDataLoaded: getDataStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMovies());
  }
});

export {MoreLikeThis};
export default connect(mapStateToProps, mapDispatchToProps)(MoreLikeThis);
