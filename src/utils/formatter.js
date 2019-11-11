import Intl from "intl";
import "intl/locale-data/jsonp/fa-IR";
export const toPersianNumber = number =>
  new Intl.NumberFormat("fa-IR").format(parseFloat(number));
export const toPrice = number => {
  const divToUnit = {
    1: "تومان",
    10: "هزار تومان",
    100: "میلیون تومان",
    1000: "میلیارد تومان",
    10000: "هزار میلیارد تومان"
  };
  let divNmber = number;
  let div = 1;
  while (divNmber >= 1000 && div < 10000) {
    divNmber /= 1000;
    div *= 10;
  }
  return (
    new Intl.NumberFormat("fa-IR", { useGrouping: false }).format(
      parseFloat(divNmber)
    ) +
    " " +
    divToUnit[div]
  );
};
export const calculateAge = date => {
  var ageDifMs = Date.now() - new Date(date);
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
