import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../../stores/actions/authAction";
import * as types from "../../../stores/actionTypes/authActionType";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("authAction", () => {
  it("authenticateAction() should work", () => {
    const user = { email: "aynzad@gmail.com", password: "123" };
    const expectedAction = {
      type: types.AUTHENTICATE,
      payload: user
    };
    expect(actions.authenticateAction(user)).toEqual(expectedAction);
  });

  it("deAuthenticateAction() should work", () => {
    const expectedAction = {
      type: types.DEAUTHENTICATE
    };
    expect(actions.deAuthenticateAction()).toEqual(expectedAction);
  });

  it("login() should work", () => {
    const store = mockStore({});
    const user = { email: "aynzad@gmail.com", password: "123" };
    const expectedAction = [
      { type: "DEAUTHENTICATE" },
      {
        type: types.AUTHENTICATE,
        payload: {
          token: "sampletoken",
          user: { email: "aynzad@gmail.com" , id: "1", name: "علیرضا اصفهانی" }
        }
      }
    ];
    store.dispatch(actions.login(user)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("logout() should work", () => {
    const store = mockStore({});
    const expectedAction = [
      { type: "DEAUTHENTICATE" }
    ];
    store.dispatch(actions.logout()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
