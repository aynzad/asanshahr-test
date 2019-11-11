import * as React from "react";
import { shallow } from "enzyme";
import OfferCard from "./offerCard";

it("renders without crashing", () => {
  const data = {
    id: 1,
    inviter: {
      firstName: "علیرضا",
      lastName: "اصفهانی"
    },
    images: [],
    fileNumber: 245,
    preRent: 200000000,
    rent: 1500000,
    area: 100,
    buildDate: new Date("last year")
  };
  const app = shallow(<OfferCard data={data} />);
  expect(app.html().includes("علیرضا اصفهانی")).toBe(true);
  expect(app.html().includes("احمد رضایی")).toBe(false);
  expect(app.html().includes("#245")).toBe(true);
  expect(app.html().includes("۲۰۰ میلیون تومان")).toBe(true);
  expect(app.html().includes("۱٫۵ میلیون تومان")).toBe(true);
  expect(app.html().includes("۱۰۰")).toBe(true);
  expect(app).toBeTruthy();
});
