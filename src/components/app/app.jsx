import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from "../main-page/main-page";
import AddReviewPage from "../add-review-page/add-review-page";
import MoviePage from "../movie-page/movie-page";
import MyList from "../mylist-page/mylist-page";
import PlayerPage from "../player-page/player-page";
import SignInPage from "../sign-in-page/sign-in-page";
import NotFoundPage from "../not-found-page/not-found-page";

const App = ({title, genre, year, titles}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            title = {title}
            genre = {genre}
            year = {year}
            titles = {titles}
          />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <MoviePage />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage />
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  titles: PropTypes.array.isRequired
};

export default App;
