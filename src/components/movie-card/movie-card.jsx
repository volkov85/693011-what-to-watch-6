import React, {useState} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const MovieCard = ({id, name, previewImage}) => {
  const [cardId, setActiveCard] = useState(id);

  const onMouseEnter = () => {
    setActiveCard(` `);
  };
  const onMouseLeave = () => {
    setActiveCard(id);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/:id" className="small-movie-card__link">{name + ` TestID ` + cardId}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired
};

export default MovieCard;
