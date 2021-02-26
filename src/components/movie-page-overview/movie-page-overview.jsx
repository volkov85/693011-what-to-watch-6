import React from 'react';
import PropTypes from 'prop-types';
import {RatingName, RatingScope} from '../../const';

const MoviePageOverview = ({rating, scoresCount, description, director, starring}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{String(rating).replace(`.`, `,`)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{RatingName[Object.keys(RatingScope).find((item) => RatingScope[item] >= rating)]}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.slice(0, 4).join(`, `)} and other</strong></p>
      </div>
    </>
  );
};

MoviePageOverview.propTypes = {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  director: PropTypes.string.isRequired
};

export default MoviePageOverview;
