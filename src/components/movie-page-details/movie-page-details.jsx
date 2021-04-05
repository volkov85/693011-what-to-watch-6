import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uniqueKey} from 'uuid';

const MoviePageDetails = ({genre, released, director, starring, runTime}) => {
  const correctRunTime = (incorrectTime) => {
    return `${Math.floor(incorrectTime / 60) ? Math.floor(incorrectTime / 60) + `h` : ``} ${incorrectTime - (Math.floor(incorrectTime / 60)) * 60}m`;
  };

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((item) => <React.Fragment key={uniqueKey()}>{item}{<br />}</React.Fragment>)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{correctRunTime(runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

MoviePageDetails.propTypes = {
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  runTime: PropTypes.number.isRequired
};

export default MoviePageDetails;
