import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter, Redirect} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {connect} from 'react-redux';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';
import AddReviewPage from '../add-review-page/add-review-page';
import MoviePage from '../movie-page/movie-page';
import MyList from '../mylist-page/mylist-page';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in-page/sign-in-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {AuthorizationStatus} from "../../const";
import {getAuthorizationStatus} from "../../store/user/selectors";

const App = ({authorizationStatus}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path={`/login`} render={() => {
          return (
            authorizationStatus === AuthorizationStatus.AUTH
              ? <Redirect to={`/`} />
              : <SignInPage />
          );
        }}
        />
        <PrivateRoute exact path="/mylist" render={() => <MyList />}/>
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

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps, null)(App);
