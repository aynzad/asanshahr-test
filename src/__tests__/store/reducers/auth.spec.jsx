import reducer from "../../../stores/reducers/auth";
import * as types from "../../../stores/actionTypes/authActionType";

describe("authReducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoggedIn: false,
      token: null,
      user: {}
    });
  });
  it("should handle AUTHENTICATE", () => {
    const user = { email: "aynzad@gmail.com", id: "1", name: "علیرضا اصفهانی" };
    const token = "sampletoken";
    expect(
      reducer([], {
        type: types.AUTHENTICATE,
        payload: { user, token }
      })
    ).toEqual({
      isLoggedIn: true,
      token: token,
      user: user
    });
  });
});
