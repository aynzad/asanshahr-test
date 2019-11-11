import { GET_OFFERS } from "../actionTypes/offerActionType";

export const getOffersAction = (offers, clear) => ({
  type: GET_OFFERS,
  payload: offers,
  clear: clear
});

export const getOffers = (pageSize = 9, pageNumber = 1, clear = false) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      try {
        fetch(
          `http://api.asanshahr.com/api/offers?pageSize=${pageSize}&pageNumber=${pageNumber}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
          .then(req => {
            return req.json();
          })
          .then(offers => {
            dispatch(getOffersAction(offers, clear));
            resolve(offers);
          })
          .catch(e => {
            if (e.toString() === "TypeError: Failed to fetch") {
              reject("خطا در برقراری ارتباط با سرور، کد ۴۸۵");
            } else {
              console.log(e);
              reject("خطای غیرمنتظره، کد ۴۸۶");
            }
          });
      } catch (e) {
        console.log(e);
        reject("خطای غیرمنتظره، کد ۴۸۷");
      }
    });
  };
};
