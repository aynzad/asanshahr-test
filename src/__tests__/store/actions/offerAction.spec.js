import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../../stores/actions/offerAction";
import * as types from "../../../stores/actionTypes/offerActionType";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("offerAction", () => {
  it("getOffersAction() should work (one time)", () => {
    const offers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expectedAction = {
      type: types.GET_OFFERS,
      payload: offers,
      clear: false
    };
    expect(actions.getOffersAction(offers, false)).toEqual(expectedAction);
  });
});
