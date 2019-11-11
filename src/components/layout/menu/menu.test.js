import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render } from "enzyme";
import Menu from "./menu";

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
      <Router>
        <div>
          <Menu />
        </div>
      </Router>
    </Provider>
  );

  expect(app).toBeTruthy();
});
