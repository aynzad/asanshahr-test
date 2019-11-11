import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    color: "rgb(64, 64, 64)",
    borderBottom: "1px solid #adadad"
  },
  links: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  link: {
    margin: "0 10px",
    padding: "10px 80px",
    fontSize: "1rem"
  }
}));
