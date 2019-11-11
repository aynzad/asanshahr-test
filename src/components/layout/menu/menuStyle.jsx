import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    maxHeight: "50px"
  },
  linksWrapper: {
    display: "flex",
    flexDirection: "row-reverse"
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
  },
  toolbar: {
    padding: 0,
    justifyContent: "space-between"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontWeight: "bold",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    flexGrow: 1
  },
  link: {
    marginLeft: theme.spacing(2)
  }
}));
