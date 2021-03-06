import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';

const MoviePageReviews = ({reviews}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.slice(0, Math.ceil(reviews.length / 2)).map((item) =>
          <Review
            key={item.id}
            rating={item.rating}
            comment={item.comment}
            username={item.user.name}
            date={item.date}
          />)}
      </div>

      <div className="movie-card__reviews-col">
        {reviews.slice(Math.ceil(reviews.length / 2)).map((item) =>
          <Review
            key={item.id}
            rating={item.rating}
            comment={item.comment}
            username={item.user.name}
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
