import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default: return state;
  }
};

export {user};
