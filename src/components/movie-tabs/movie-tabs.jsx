import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchReviews} from '../../store/api-actions';
import {FilmTabNames} from "../../const";
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';

const MovieTabs = ({film, reviewsById, reviewsByIdLoaded, onLoadReviews}) => {
  const [activeTab, setActiveTab] = useState(FilmTabNames.OVERVIEW);

  useEffect(() => {
    if (!reviewsByIdLoaded || reviewsById.id !== film.id) {
      onLoadReviews(film.id);
    }
  }, [film.id]);

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
            reviews={reviewsById}
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
  film: PropTypes.object.isRequired,
  reviewsById: PropTypes.array.isRequired,
  reviewsByIdLoaded: PropTypes.bool.isRequired,
  onLoadReviews: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  reviewsById: state.reviewsById,
  reviewsByIdLoaded: state.reviewsByIdLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadReviews(reviews) {
    dispatch(fetchReviews(reviews));
  }
});

export {MovieTabs};

export default connect(mapStateToProps, mapDispatchToProps)(MovieTabs);
