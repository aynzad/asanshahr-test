import { GET_OFFERS } from "../actionTypes/offerActionType";

const offerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_OFFERS:
      if (action.clear) {
        return action.payload;
      }
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default offerReducer;
