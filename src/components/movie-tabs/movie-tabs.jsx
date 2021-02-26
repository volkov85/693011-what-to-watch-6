import React, {useState} from 'react';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieTabs = ({film}) => {
  const [activeTab, setActiveTab] = useState(`Overview`);

  const getActiveTabContent = () => {
    switch (activeTab) {
      case `Details`:
        return (
          <MoviePageDetails
            genre={film.genre}
            released={film.released}
            director={film.director}
            starring={film.starring}
            runTime={film.run_time}
          />
        );
      case `Reviews`:
        return (
          <MoviePageReviews />
        );
      case `Overview`:
      default:
        return (
          <MoviePageOverview
            rating={film.rating}
            scoresCount={film.scores_count}
            description={film.description}
            starring={film.starring}
            director={film.director}
          />
        );
    }
  };

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item` + (activeTab === `Overview` ? ` movie-nav__item--active` : ``)}>
            <Link to="#" className="movie-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setActiveTab(`Overview`);
              }}>Overview
            </Link>
          </li>
          <li className={`movie-nav__item` + (activeTab === `Details` ? ` movie-nav__item--active` : ``)}>
            <Link to="#" className="movie-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setActiveTab(`Details`);
              }}>Details
            </Link>
          </li>
          <li className={`movie-nav__item` + (activeTab === `Reviews` ? ` movie-nav__item--active` : ``)}>
            <Link to="#" className="movie-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setActiveTab(`Reviews`);
              }}>Reviews
            </Link>
          </li>
        </ul>
      </nav>
      {getActiveTabContent(activeTab)}
    </>
  );
};

MovieTabs.propTypes = {
  film: PropTypes.object.isRequired
};

export default MovieTabs;
