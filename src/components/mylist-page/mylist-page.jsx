import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import Header from '../header/header';
import {getFavoriteMovies, getFavoriteLoadStatus} from '../../store/data/selectors';
import {fetchFavoriteMovies} from "../../store/api-actions";
import LoadingScreen from "../loading-screen/loading-screen";

const MyList = ({favoriteFilms, onLoadData, isFavoriteLoaded}) => {
  const [filmActive, setFilmActive] = useState(null);
  const isMyList = true;

  useEffect(() => {
    if (!isFavoriteLoaded) {
      onLoadData();
    }
  }, [isFavoriteLoaded]);

  if (!isFavoriteLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const handleMouseEnterCard = (id) => {
    setFilmActive(id);
  };

  return (
    <div className="user-page">
      <Header isMyList={isMyList}/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {
            favoriteFilms.map((item) => <MovieCard
              key={item.id}
              name={item.name}
              previewImage={item.preview_image}
              id={item.id}
              previewVideoLink={item.preview_video_link}
              handleMouseEnterCard={handleMouseEnterCard}
              showVideo={filmActive === item.id}
            />)
          }
        </div>
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
  );
};

MyList.propTypes = {
  favoriteFilms: PropTypes.array.isRequired,
  isFavoriteLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteMovies(state),
  isFavoriteLoaded: getFavoriteLoadStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteMovies());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
