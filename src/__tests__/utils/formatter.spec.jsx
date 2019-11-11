import { toPersianNumber, toPrice } from "../../utils/formatter";

describe("Formatter", () => {
  describe("toPersianNumber", () => {
    it("should work", function() {
      expect(toPersianNumber(123)).toEqual("۱۲۳");
    });
  });
  describe("toPrice", () => {
    it("should work", function() {
      expect(toPrice(20)).toEqual("۲۰ تومان");
      expect(toPrice(5300)).toEqual("۵٫۳ هزار تومان");
      expect(toPrice(4500000)).toEqual("۴٫۵ میلیون تومان");
      expect(toPrice(450000000)).toEqual("۴۵۰ میلیون تومان");
      expect(toPrice(9000000000)).toEqual("۹ میلیارد تومان");
      expect(toPrice(1000000000)).toEqual("۱ میلیارد تومان");
      expect(toPrice(1000000000000)).toEqual("۱ هزار میلیارد تومان");
    });
  });
});
