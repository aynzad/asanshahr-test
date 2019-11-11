import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    marginBottom: theme.spacing(3),
    color: "rgb(64, 64, 64)"
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
