import React, { useEffect, useState } from "react";
import OfferCard from "../../components/offer/offerCard/offerCard";
import OfferSkeleton from "../../components/offer/offerSkeleton/offerSkeleton";
import InfiniteLoader from "react-infinite-loader";
//MUI
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import useStyles from "./AppStyle";
//REDUX
import { connect } from "react-redux";
import { getOffers } from "../../stores/actions/offerAction";

const AppPage = React.memo(function(props) {
  const [page, setPage] = useState(1);
  const [firstLoading, setFirstLoading] = useState(true);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const classes = useStyles();
  const loadNextPage = (clear = false) => {
    props
      .getOffers(9, page, clear)
      .then(response => {
        setPage(page => page + 1);
        setFirstLoading(false);
      })
      .catch(e => {
        setErrorOpen(true);
        setErrorMessage(e);
      });
  };
  useEffect(() => {
    loadNextPage(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h5" color="textPrimary" className={classes.title}>
          لیست آگهی‌های موجود
        </Typography>
      </div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
        spacing={3}
      >
        {props.offers.length > 0 &&
          !firstLoading &&
          props.offers.map(offer => <OfferCard key={offer.id} data={offer} />)}
        {(props.offers.length === 0 || firstLoading) &&
          [0, 1, 2, 3, 4, 5].map(offer => <OfferSkeleton key={offer} />)}
      </Grid>
      {!firstLoading && <InfiniteLoader onVisited={() => loadNextPage()} />}
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

AppPage.defaultProps = {
  offers: [],
  getOffers: () => {}
};

const mapDispatchToProps = dispatch => ({
  getOffers: (pageSize, pageNumber, clear) =>
    dispatch(getOffers(pageSize, pageNumber, clear))
});
const mapStateToProps = state => ({
  offers: state.offer
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPage);
