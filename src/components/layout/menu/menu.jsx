import React from "react";
import Container from "@material-ui/core/Container";
import Logo from "../../../assets/images/logo.png";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import useStyles from "./menuStyle";
import Routes from "../../../utils/routes";
import { Link } from "react-router-dom";
// redux imports
import { logout } from "../../../stores/actions/authAction";
import { useSelector, useDispatch } from "react-redux";

export default function() {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <div className={classes.logoWrapper}>
              <img className={classes.logo} src={Logo} alt="logo" />
              <Typography
                variant="h6"
                color="primary"
                className={classes.title}
              >
                آسان‌شهر
              </Typography>
            </div>
            <div className={classes.linksWrapper}>
              {store.auth.isLoggedIn && (
                <>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={handleLogout}
                  >
                    خروج
                  </Button>
                </>
              )}
              {Routes.map(
                item =>
                  (store.auth.isLoggedIn === item.auth ||
                    item.auth === null) && (
                    <Button
                      className={classes.link}
                      color={item.button ? "secondary" : "inherit"}
                      variant={item.button ? "contained" : "text"}
                      key={item.href}
                      component={Link}
                      to={item.href}
                    >
                      {item.title}
                    </Button>
                  )
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
