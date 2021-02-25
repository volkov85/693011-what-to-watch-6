import React, {useState} from 'react';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import {Link} from "react-router-dom";

const MovieTabs = () => {
  const [activeTab, setActiveTab] = useState(`Overview`);

  const getActiveTabContent = () => {
    switch (activeTab) {
      case `Details`:
        return (
          <MoviePageDetails />
        );
      case `Reviews`:
        return (
          <MoviePageReviews />
        );
      case `Overview`:
      default:
        return (
          <MoviePageOverview />
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

export default MovieTabs;
