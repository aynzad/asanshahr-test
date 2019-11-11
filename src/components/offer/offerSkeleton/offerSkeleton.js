import React from "react";
import PropTypes from "prop-types";
//MUI
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import useStyles from "./offerSkeletonStyle";

const OfferCard = React.memo(function({ data }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea className={classes.cardAction}>
          <Skeleton
            className={classes.media}
            variant="rect"
            width="100%"
            height={220}
          />
          <CardContent>
            <Grid container direction="row" justify="space-between">
              <Skeleton variant="text" height={25} width="40%" />
              <Skeleton variant="text" height={10} width="10%" />
            </Grid>
            <Skeleton variant="text" height={10} width="100%" />
            <Skeleton variant="text" height={10} width="40%" />
            <Grid
              className={classes.attrs}
              container
              direction="column"
              justify="flex-start"
            >
              {[0, 1, 2, 3].map(item => (
                <Attr key={item} />
              ))}
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
});

const Attr = React.memo(function({ title, value, unit = null }) {
  const classes = useStyles();
  return (
    <Grid
      className={classes.attr}
      container
      direction="row"
      justify="space-between"
    >
      <Skeleton variant="text" height={20} className={classes.key} />
      <Skeleton variant="text" height={20} className={classes.value} />
    </Grid>
  );
});
OfferCard.propTypes = {
  data: PropTypes.object
};

export default OfferCard;
