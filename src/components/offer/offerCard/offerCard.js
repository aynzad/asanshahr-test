import React from "react";
import PropTypes from "prop-types";
import {
  toPersianNumber,
  toPrice,
  calculateAge
} from "../../../utils/formatter";
import imagePlaceholder from "../../../assets/images/image-placeholder.png";
//MUI
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./offerCardStyle";

const OfferCard = React.memo(function({ data }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea className={classes.cardAction}>
          <CardMedia
            className={classes.media}
            image={
              data.images.length > 0 ? data.images[0].path : imagePlaceholder
            }
            title={data.address}
          />
          <CardContent>
            <Grid container direction="row" justify="space-between">
              <Typography gutterBottom variant="h6" component="h6">
                {data.submitterUser &&
                  `${data.submitterUser.firstName} ${data.submitterUser.lastName}`}
                {data.inviter &&
                  ` (${data.inviter.firstName} ${data.inviter.lastName})`}
              </Typography>
              <Typography>#{data.fileNumber}</Typography>
            </Grid>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              className={classes.address}
            >
              {data.address}
            </Typography>
            <Grid
              className={classes.attrs}
              container
              direction="column"
              justify="flex-start"
            >
              {data.preRent > 0 && (
                <Attr title="رهن" value={toPrice(data.preRent)} />
              )}
              {data.preRent > 0 && (
                <Attr title="اجاره" value={toPrice(data.rent)} />
              )}
              {data.totalPrice > 0 && (
                <Attr title="قیمت کل" value={toPrice(data.totalPrice)} />
              )}
              {data.pricePerSquareMeter > 0 && (
                <Attr
                  title="قیمت متری"
                  value={toPrice(data.pricePerSquareMeter)}
                />
              )}
              <Attr
                title="متراژ"
                value={toPersianNumber(data.area)}
                unit="متر مربع"
              />
              <Attr
                title="سن بنا"
                value={toPersianNumber(calculateAge(data.buildDate))}
                unit="سال"
              />
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
      <Typography className={classes.key}>{title}</Typography>
      <Typography className={classes.value}>
        {value} {unit && <span>{unit}</span>}
      </Typography>
    </Grid>
  );
});
OfferCard.propTypes = {
  data: PropTypes.object
};

export default OfferCard;
