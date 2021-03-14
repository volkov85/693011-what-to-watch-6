import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = ({onClick}) => {
  return (
    <div className="catalog__more" onClick={onClick}>
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ShowMore;
