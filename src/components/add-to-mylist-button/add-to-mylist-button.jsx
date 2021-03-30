import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addToFavorites} from "../../store/api-actions";

const AddToMylistButton = ({movie, handleAddToFavoriteClick}) => {

  const buttonImage = () => {
    if (!movie.is_favorite) {
      return (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"/>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"/>
        </svg>
      );
    }
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => {
        handleAddToFavoriteClick(movie.id, Number(!movie.is_favorite));
      }}>
      {buttonImage()}
      <span>My list</span>
    </button>
  );
};

AddToMylistButton.propTypes = {
  movie: PropTypes.object.isRequired,
  handleAddToFavoriteClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleAddToFavoriteClick(id, status) {
    dispatch(addToFavorites(id, status));
  }
});

export {AddToMylistButton};
export default connect(null, mapDispatchToProps)(AddToMylistButton);
