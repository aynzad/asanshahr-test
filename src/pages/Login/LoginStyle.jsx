import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  ltr: {
    flip: false,
    direction: "ltr"
  },

  error: {
    "& .MuiSnackbarContent-root": {
      backgroundColor: theme.palette.error.dark
    }
  },
  icon: {
    fontSize: 20,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));
