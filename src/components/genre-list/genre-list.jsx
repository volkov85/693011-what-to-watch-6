import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {getUniqueGenres} from '../../utils';

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

const mapStateToProps = (state) => ({
  genres: getUniqueGenres(state.initialFilms),
  selectedGenre: state.selectedGenre
});

const mapDispatchToProps = (dispatch) => ({
  handleSelectGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getMovieList());
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
