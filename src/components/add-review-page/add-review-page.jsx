import React from 'react';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AddReviewForm from '../add-review-form/add-review-form';
import {getFilms} from '../../store/data/selectors';

const AddReviewPage = ({films}) => {
  const {id} = useParams();
  const film = films.find((item) => item.id === parseInt(id, 10));

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.background_image} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.poster_image} alt={film.name + ` poster`} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm id={film.id}/>
      </div>

    </section>
  );
};

AddReviewPage.propTypes = {
  films: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state)
});

export default connect(mapStateToProps, null)(AddReviewPage);
