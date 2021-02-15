import React, {useState} from 'react';
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
        <a className="small-movie-card__link" href="movie-page.html">{name + ` TestID ` + cardId}</a>
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
