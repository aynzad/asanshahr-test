import reducer from "../../../stores/reducers/offer";
import * as types from "../../../stores/actionTypes/offerActionType";

describe("offerReducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it("should handle offerReducer (first time)", () => {
    const offers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(
      reducer([], {
        type: types.GET_OFFERS,
        payload: offers
      })
    ).toEqual(offers);
  });
  it("should handle offerReducer (clear initial states)", () => {
    const offers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(
      reducer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], {
        type: types.GET_OFFERS,
        clear: true,
        payload: offers
      })
    ).toEqual(offers);
  });
});
