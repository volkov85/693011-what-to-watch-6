import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {MAIN_PAGE_FILMS_COUNT} from '../../const';
import MovieList from '../movie-list/movie-list';
import GenreList from '../genre-list/genre-list';
import LoadingScreen from '../loading-screen/loading-screen';
import ShowMore from '../show-more/show-more';
import {fetchMovies, addToFavorites} from "../../store/api-actions";
import {getFilms, getDataStatus} from '../../store/data/selectors';
import MoviePromo from '../movie-promo/movie-promo';

const MainPage = ({films, isDataLoaded, onLoadData}) => {
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
      <MoviePromo />
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
  handleAddToFavoriteClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  isDataLoaded: getDataStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMovies());
  },
  handleAddToFavoriteClick(id, status) {
    dispatch(addToFavorites(id, status));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
