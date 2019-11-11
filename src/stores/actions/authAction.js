import { AUTHENTICATE, DEAUTHENTICATE } from "../actionTypes/authActionType";

export const authenticateAction = user => {
  return {
    type: AUTHENTICATE,
    payload: user
  };
};

export const deAuthenticateAction = () => {
  return {
    type: DEAUTHENTICATE
  };
};

export const login = ({ email, password }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      try {
        dispatch(deAuthenticateAction());
        if (email.trim() === "" || password.trim === "") {
          reject("لطفا تمامی اطلاعات را تکمیل نمایید.");
        } else if (email === "aynzad@gmail.com" && password === "123") {
          const user = {
            id: "1",
            name: "علیرضا اصفهانی",
            email: "aynzad@gmail.com"
          };
          const token = "sampletoken";
          resolve(dispatch(authenticateAction({ user, token })));
        } else {
          reject("نام کاربری یا رمزعبور مطابق نیستند.");
        }
      } catch (e) {
        dispatch(deAuthenticateAction());
        reject("خطای غیرمنتظره، کد ۴۶۷");
      }
    });
  };
};

export const logout = () => {
  return async dispatch => {
    dispatch(deAuthenticateAction());
  };
};
