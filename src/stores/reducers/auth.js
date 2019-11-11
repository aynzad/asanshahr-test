import {
  AUTHENTICATE,
  DEAUTHENTICATE
} from "../actionTypes/authActionType";

 let initialState = {
  isLoggedIn: false,
  token: null,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEAUTHENTICATE:
      return {
        isLoggedIn: false
      };

    case AUTHENTICATE:
      const authObj = {
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user
      };
      return authObj;
    default:
      return state;
  }
};

export default authReducer;
