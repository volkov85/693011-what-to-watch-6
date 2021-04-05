import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ReviewLength} from "../../const";
import {getReviewFormDisabled, getReviewFormError} from "../../store/data/selectors";
import {addReview} from "../../store/api-actions";
import {RATING_STARS_NUMBER} from "../../const";

const AddReviewForm = ({handlePostReview, id, isReviewFormDisabled, reviewFormError}) => {
  const [review, setReview] = useState(``);
  const [rating, setRating] = useState(5);

  const isDisabled = (review.toString().length < ReviewLength.MIN || review.toString().length > ReviewLength.MAX);

  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    handlePostReview(id, rating, review);
  };

  const starsFiller = new Array(RATING_STARS_NUMBER).fill(``).map((item, index)=>index);

  const stars = starsFiller.map((item) =>
    <Fragment key={item}>
      <input
        className="rating__input"
        id={`star-${item}`}
        type="radio" name="rating"
        value={item + 1}
        checked={item + 1 === rating}
        onChange={() => setRating(item + 1)}
        disabled={isReviewFormDisabled}
      />
      <label className="rating__label" htmlFor={`star-${item}`}>Rating {item + 1} </label>
    </Fragment>
  );

  return (
    <>
      <form action="#" className="add-review__form" onSubmit={handleSubmitClick}>
        <div className="rating">
          <div className="rating__stars">
            {stars}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review"
            id="review"
            placeholder="Review text"
            value={review}
            disabled={isReviewFormDisabled}
            onChange={(evt) => setReview(evt.target.value)}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isDisabled || isReviewFormDisabled}>Post</button>
          </div>
        </div>
        { (reviewFormError !== ``) ? <p>You can not post review. Error - {`${reviewFormError}`}</p> : ``}
      </form>
    </>
  );
};

AddReviewForm.propTypes = {
  handlePostReview: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isReviewFormDisabled: PropTypes.bool.isRequired,
  reviewFormError: PropTypes.string
};

const mapStateToProps = (state) => ({
  isReviewFormDisabled: getReviewFormDisabled(state),
  reviewFormError: getReviewFormError(state)
});

const mapDispatchToProps = (dispatch) => ({
  handlePostReview(id, rating, review) {
    dispatch(addReview(id, rating, review));
  }
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
