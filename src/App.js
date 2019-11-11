import React from "react";
import Routes from "./utils/routes";
import AppliedRoute from "./components/router/AppliedRoute";
import AuthenticatedRoute from "./components/router/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/router/UnauthenticatedRoute";
import Menu from "./components/layout/menu/menu";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// Material UI imports
import Container from "@material-ui/core/Container";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/theme";
// redux imports
import { useSelector } from "react-redux";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  const store = useSelector(store => store);
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <Router>
          <div>
            <Menu />
            <Container maxWidth="lg">
              <Switch>{Routes.map(item => Route(item, store.auth))}</Switch>
            </Container>
          </div>
        </Router>
      </StylesProvider>
    </ThemeProvider>
  );
}

function Route(item, auth) {
  switch (item.auth) {
    case true:
      return (
        <AuthenticatedRoute
          path={item.href}
          key={item.href}
          auth={auth}
          exact
          component={item.component}
        />
      );
    case false:
      return (
        <UnauthenticatedRoute
          path={item.href}
          key={item.href}
          auth={auth}
          exact
          component={item.component}
        />
      );
    default:
      return (
        <AppliedRoute
          path={item.href}
          key={item.href}
          exact
          component={item.component}
        />
      );
  }
}
export default App;
