import * as React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import LoginPage from "./Login";
import { MemoryRouter } from "react-router-dom";

React.useLayoutEffect = React.useEffect;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  auth: {
    isLoggedIn: false,
    token: null,
    user: {}
  },
  offer: []
};

it("renders without crashing", () => {
  const store = mockStore(initialState);
  const app = shallow(
    <Provider store={store}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>
  );
  expect(app).toBeTruthy();
  expect(app.html().includes("علیرضا اصفهانی")).toBe(true);
  expect(app.html().includes("نام کاربری")).toBe(true);
  expect(app.html().includes("رمز عبور")).toBe(true);
  expect(app.html().includes("ورود به آسان شهر")).toBe(true);
  expect(app.html().includes("ایمیل")).toBe(false);
});
