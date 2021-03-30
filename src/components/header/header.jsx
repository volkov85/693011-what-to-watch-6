import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../const';
import {logout} from '../../store/api-actions';
import {getUserInfo, getAuthorizationStatus} from '../../store/user/selectors';

const Header = ({userInfo, authorizationStatus, handleLogoutClick, isMyList = false}) => {
  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {
        isMyList ? <h1 className="page-title user-page__title">My list</h1> : ``
      }
      <div className="user-block">
        {
          authorizationStatus === AuthorizationStatus.AUTH &&
          <>
            <div className="user-block__avatar">
              <img src={userInfo.avatar_url} alt="User avatar" width="63" height="63"/>
            </div>
            <Link to="/mylist" className="catalog__title">{userInfo.email}</Link>
            <div>
              <a className="catalog__title" href="#" onClick={handleLogoutClick}>  Log out</a>
            </div>
          </>
        }
        {
          authorizationStatus === AuthorizationStatus.NO_AUTH &&
          <Link to="/login" className="user-block__link">Sign in</Link>
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userInfo: PropTypes.object,
  handleLogoutClick: PropTypes.func.isRequired,
  isMyList: PropTypes.bool
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userInfo: getUserInfo(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleLogoutClick() {
    dispatch(logout());
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
