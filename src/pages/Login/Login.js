import React, { useState } from "react";
import { useHistory } from 'react-router'
//MUI
import Avatar from "@material-ui/core/Avatar";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./LoginStyle";
//REDUX
import { connect } from "react-redux";
import { login } from "../../stores/actions/authAction";

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" className={classes.whiteText} align="center">
      {"کپی‌رایت © "}
      <Link color="inherit" href="http://gonjeshk.ir/">
        علیرضا اصفهانی
      </Link>{" "}
      {new Date().toLocaleDateString("fa-IR", { year: "numeric" })}
      {"."}
    </Typography>
  );
}

const LoginPage = React.memo(function(props) {
  const classes = useStyles();
  let history = useHistory();
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = event => {
    setEmail(event.target.value);
  };
  const onChangePassword = event => {
    setPassword(event.target.value);
  };
  const onClickLogin = e => {
    e.preventDefault();
    props
      .login({ email, password })
      .then(response => {
        history.push('/')
      })
      .catch(error => {
        setPassword("");
        setErrorOpen(true);
        setErrorMessage(error);
      });
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.whiteText}>
            ورود کاربران
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.ltr}
              value={email}
              onChange={onChangeEmail}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="نام کاربری"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              className={classes.ltr}
              value={password}
              onChange={onChangePassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="ذخیره کردن"
            />
            <Button
              type="button"
              onClick={onClickLogin}
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              className={classes.submit}
            >
              ورود به آسان شهر
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      <Snackbar
        className={classes.error}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        onClose={() => {
          setErrorOpen(false);
        }}
        open={errorOpen}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={() => {
              setErrorOpen(false);
            }}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
        message={
          <span id="client-snackbar" className={classes.message}>
            <ErrorIcon className={classes.icon} />
            {errorMessage}
          </span>
        }
      />
    </>
  );
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data))
});
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
