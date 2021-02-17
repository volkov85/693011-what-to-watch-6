import React, {useState} from 'react';

const AddReviewForm = () => {
  const STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [userForm, setUserForm] = useState({
    review: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setUserForm({...userForm, [name]: value});
  };

  const {review} = userForm;
  return (
    <>
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {
              STARS.map((star, index) => (
                <React.Fragment key={index}>
                  <input className="rating__input" id={`star-` + star} type="radio" name="rating" value={star}/>
                  <label className="rating__label" htmlFor={`star-` + star}>
                    {`Rating ` + star}
                  </label>
                </React.Fragment>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review" id="review" placeholder="Review text" onChange={handleFieldChange}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
          <p>Testing Review State: {review}</p>
        </div>
      </form>
    </>
  );
};

export default AddReviewForm;
