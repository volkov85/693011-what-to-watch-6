import React, {useState} from 'react';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import reviews from '../../mocks/reviews';
import {FilmTabNames} from "../../const";

const MovieTabs = ({film}) => {
  const [activeTab, setActiveTab] = useState(FilmTabNames.OVERVIEW);

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
          <MoviePageReviews
            reviews={reviews.filter((item) => item.film_id === film.id)}
          />
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
          <li className={`movie-nav__item` + (activeTab === FilmTabNames.OVERVIEW ? ` movie-nav__item--active` : ``)}>
            <Link to="#" className="movie-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setActiveTab(FilmTabNames.OVERVIEW);
              }}>
              {FilmTabNames.OVERVIEW}
            </Link>
          </li>
          <li className={`movie-nav__item` + (activeTab === FilmTabNames.DETAILS ? ` movie-nav__item--active` : ``)}>
            <Link to="#" className="movie-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setActiveTab(FilmTabNames.DETAILS);
              }}>
              {FilmTabNames.DETAILS}
            </Link>
          </li>
          <li className={`movie-nav__item` + (activeTab === FilmTabNames.REVIEWS ? ` movie-nav__item--active` : ``)}>
            <Link to="#" className="movie-nav__link"
              onClick={(evt)=> {
                evt.preventDefault();
                setActiveTab(FilmTabNames.REVIEWS);
              }}>
              {FilmTabNames.REVIEWS}
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
