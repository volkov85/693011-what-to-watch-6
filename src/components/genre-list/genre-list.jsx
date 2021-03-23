import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {resetMovieList, changeGenre, getMovieList} from '../../store/action';
import {getUniqueGenres} from '../../utils/utils';

const GenreList = ({genres, selectedGenre, handleSelectGenre}) => {
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((item, index) => (
          <li key={`genre-${index}`} className={`catalog__genres-item ${item === selectedGenre ? `catalog__genres-item--active` : ``}`}>
            <a href="#" className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                handleSelectGenre(item);
              }}>
              {item}
            </a>
          </li>
        ))
      }
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.array.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  handleSelectGenre: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  genres: getUniqueGenres(DATA.initialFilms),
  selectedGenre: DATA.selectedGenre
});

const mapDispatchToProps = (dispatch) => ({
  handleSelectGenre(genre) {
    dispatch(resetMovieList());
    dispatch(changeGenre(genre));
    dispatch(getMovieList());
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
