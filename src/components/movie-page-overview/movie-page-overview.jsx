import React from 'react';
import PropTypes from 'prop-types';

const MoviePageOverview = ({rating, scoresCount, description, director, starring}) => {
  const ratingName = {
    BAD: `Bad`,
    NORMAL: `Normal`,
    GOOD: `Good`,
    VERY_GOOD: `Very good`,
    AWESOME: `Awesome`,
  };

  const ratingScope = {
    BAD: 3,
    NORMAL: 5,
    GOOD: 8,
    VERY_GOOD: 9,
    AWESOME: 10,
  };

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{String(rating).replace(`.`, `,`)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingName[Object.keys(ratingScope).find((item) => ratingScope[item] >= rating)]}</span>
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
