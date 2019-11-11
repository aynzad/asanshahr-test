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
  address: {
    minHeight: '48px'
  },
  card: {
    height: "100%"
  },
  cardAction: {
    height: "100%",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "stretch",
    display: "flex"
  },
  media: {
    height: 220
  },
  attrs:{
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    marginLeft: theme.spacing(-2),
    width: 'unset'
  },
  attr: {
    marginTop: theme.spacing(1),
  },
  key: {
    flip: false,
    width: '30%',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: '#e8e6e6'
  },
  value: {
    flip: false,
    width: '70%',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: '#efefef'

  }
}));
