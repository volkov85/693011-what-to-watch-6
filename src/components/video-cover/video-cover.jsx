import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const VideoCover = ({previewImage, name, id}) => {
  return (
    <>
      <Link to={`/films/${id}`}>
        <div className="small-movie-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </>
  );
};

VideoCover.propTypes = {
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default VideoCover;
