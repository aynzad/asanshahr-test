import * as React from "react";
import { shallow } from "enzyme";
import OfferSkeleton from "./offerSkeleton";

it("renders without crashing", () => {
  const app = shallow(<OfferSkeleton />);
  expect(app).toBeTruthy();
});
