import * as React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import MainPage from "./Main";

React.useLayoutEffect = React.useEffect;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("renders without crashing (guest)", () => {
  const state = {
    auth: {
      isLoggedIn: false,
      token: null,
      user: {}
    },
    offer: []
  };
  const store = mockStore(state);
  const app = shallow(
    <Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>
  );
  expect(app).toBeTruthy();
  expect(app.html().includes("ورود کاربران")).toBe(true);
  expect(app.html().includes("مشاهده آگهی‌ها")).toBe(false);
});

it("renders without crashing (logged in)", () => {
  const state = {
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

  const store = mockStore(state);
  const app = shallow(
    <Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>
  );
  expect(app).toBeTruthy();
  expect(app.html().includes("ورود کاربران")).toBe(false);
  expect(app.html().includes("مشاهده آگهی‌ها")).toBe(true);
});
