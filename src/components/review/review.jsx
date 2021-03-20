import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Review = ({rating, comment, username, date}) => {
  const dateCorrect = dayjs(date).format(`YYYY-MM-DD`);
  const dateCorrectContent = dayjs(date).format(`MMMM DD, YYYY`);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{username}</cite>
          <time className="review__date" dateTime={dateCorrect}>{dateCorrectContent}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Review;
