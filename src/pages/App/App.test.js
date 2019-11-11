import * as React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import AppPage from "./App";

React.useLayoutEffect = React.useEffect;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  auth: {
    isLoggedIn: true,
    token: "sampletoken",
    user: {
      email: "aynzad@gmail.com",
      id: "1",
      name: "علیرضا اصفهانی"
    }
  },
  offer: []
};

it("renders without crashing", () => {
  const store = mockStore(initialState);
  const app = shallow(
    <Provider store={store}>
      <MemoryRouter>
        <AppPage />
      </MemoryRouter>
    </Provider>
  );
  expect(app).toBeTruthy();
  expect(app.html().includes("لیست آگهی‌های موجود")).toBe(true);
});
