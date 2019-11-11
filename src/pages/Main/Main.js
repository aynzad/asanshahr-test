import React from "react";
import Logo from "../../assets/images/logo.png";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import useStyles from "./MainStyle";
import { useSelector } from "react-redux";

function Main() {
  const store = useSelector(store => store);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={Logo} alt="logo" />
      <Typography variant="h4" color="textPrimary" className={classes.title}>
      مرکز طراحی، خرید ، فروش و اجاره آپارتمان
      </Typography>
      <div className={classes.links}>
        {!store.auth.isLoggedIn && (
          <Button
            className={classes.link}
            color="secondary"
            variant="contained"
            size="large"
            component={Link}
            to="/login"
          >
            ورود کاربران
          </Button>
        )}
        {store.auth.isLoggedIn && (
          <Button
            className={classes.link}
            color="secondary"
            variant="contained"
            size="large"
            component={Link}
            to="/app"
          >
            مشاهده آگهی‌ها
          </Button>
        )}
      </div>
    </div>
  );
}

export default Main;
