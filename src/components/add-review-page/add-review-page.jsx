import React from 'react';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {addReview} from '../../store/api-actions';
import {connect} from 'react-redux';
import AddReviewForm from '../add-review-form/add-review-form';
import {getFilms} from '../../store/data/selectors';

const AddReviewPage = ({films, onSubmit}) => {
  const {id} = useParams();
  const film = films.find((item) => item.id === parseInt(id, 10));

  const handleSubmitClick = (rating, review) => {
    onSubmit(id, rating, review);
  };

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
        <AddReviewForm onSubmit={handleSubmitClick} />
      </div>

    </section>
  );
};

AddReviewPage.propTypes = {
  films: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, rating, review) {
    dispatch(addReview(id, rating, review));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPage);
