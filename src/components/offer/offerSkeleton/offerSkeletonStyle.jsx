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
    width: 'unset'
  },
  attr: {
    marginTop: theme.spacing(1),
  },
  key: {
    flip: false,
    borderRadius: '0 4px 4px 0',
    width: '30%',
    backgroundColor: '#e8e6e6'
  },
  value: {
    flip: false,
    borderRadius: '4px 0 0 4px',
    width: '70%',
    backgroundColor: '#efefef'

  }
}));
