import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: C, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !auth.isLoggedIn ? <C {...props} /> : <Redirect to={"/"} />
      }
    />
  );
};
