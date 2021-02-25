import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import AddReviewPage from '../add-review-page/add-review-page';
import MoviePage from '../movie-page/movie-page';
import MyList from '../mylist-page/mylist-page';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in-page/sign-in-page';
import NotFoundPage from '../not-found-page/not-found-page';

const App = ({films}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            films = {films}
          />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/mylist">
          <MyList
            films = {films}
          />
        </Route>
        <Route exact path="/films/:id?">
          <MoviePage
            films = {films}
          />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage
            backgroundImage = {films[0].background_image}
            name = {films[0].name}
            posterImage = {films[0].poster_image}
          />
        </Route>
        <Route exact path="/player/:id?">
          <PlayerPage
            name = {films[0].name}
            videoLink = {films[0].video_link}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired
};

export default App;
