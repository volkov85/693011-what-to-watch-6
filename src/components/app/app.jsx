import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';
import AddReviewPage from '../add-review-page/add-review-page';
import MoviePage from '../movie-page/movie-page';
import MyList from '../mylist-page/mylist-page';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in-page/sign-in-page';
import NotFoundPage from '../not-found-page/not-found-page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <PrivateRoute exact path="/mylist" render={() => <MyList /> }/>
        <Route exact path="/films/:id?">
          <MoviePage />
        </Route>
        <PrivateRoute exact path="/films/:id/review" render={() => <AddReviewPage />}/>
        <Route exact path="/player/:id?">
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
