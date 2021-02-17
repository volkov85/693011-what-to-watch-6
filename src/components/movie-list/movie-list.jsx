import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const MovieList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {
        films.map((item) => <MovieCard
          key={item.id}
          name={item.name}
          previewImage={item.preview_image}
          id={item.id}
        />)
      }
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired
};

export default MovieList;
