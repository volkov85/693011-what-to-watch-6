import React from 'react';
import Review from '../review/review';
import PropTypes from 'prop-types';

const MoviePageReviews = ({reviews}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.slice(0, Math.ceil(reviews.length / 2)).map((item) =>
          <Review
            key={item.id}
            rating={item.rating}
            comment={item.comment}
            user={item.user}
            date={item.date}
          />)}
      </div>

      <div className="movie-card__reviews-col">
        {reviews.slice(Math.ceil(reviews.length / 2)).map((item) =>
          <Review
            key={item.id}
            rating={item.rating}
            comment={item.comment}
            user={item.user}
            date={item.date}
          />)}
      </div>
    </div>
  );
};

MoviePageReviews.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default MoviePageReviews;
