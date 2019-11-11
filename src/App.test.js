import * as React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render } from "enzyme";
import AppPage from "./App";

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
  const app = render(
    <Provider store={store}>
      <AppPage />
    </Provider>
  );

  expect(app).toBeTruthy();
});
