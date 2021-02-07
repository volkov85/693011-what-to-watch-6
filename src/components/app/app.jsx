import React from 'react';
import PropTypes from 'prop-types';
import MainPage from "../main-page/main-page";

const App = ({title, genre, year, titles}) => {
  return (
    <MainPage
      title = {title}
      genre = {genre}
      year = {year}
      titles = {titles}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  titles: PropTypes.array.isRequired
};

export default App;
