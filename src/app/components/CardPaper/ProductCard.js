import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Star from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import Type from 'ba-components/Typography.scss';
import styles from './cardStyle-jss';

class ProductCard extends React.Component {
  render() {
    const {
      classes,
      discount,
      soldout,
      thumbnail,
      name,
      desc,
      ratting,
      price,
      prevPrice,
      list,
      detailOpen,
      addToCart,
      width,
    } = this.props;
    return (
      <Card className={classNames(classes.cardProduct, isWidthUp('sm', width) && list ? classes.cardList : '')}>
        <div className={classes.status}>
          {discount !== '' && (
            <Chip label={'Discount ' + discount} className={classes.chipDiscount} />
          )}
          {soldout && (
            <Chip label="Sold Out" className={classes.chipSold} />
          )}
        </div>
        <CardMedia
          className={classes.mediaProduct}
          image={thumbnail}
          title={name}
        />
        <CardContent className={classes.floatingButtonWrap}>
          {!soldout && (
            <Tooltip title="Add to cart" placement="top">
              <Button variant="fab" onClick={addToCart} mini color="secondary" aria-label="add" className={classes.buttonAdd}>
                <AddShoppingCart />
              </Button>
            </Tooltip>
          )}
          <Typography noWrap gutterBottom variant="headline" className={classes.title} component="h2">
            {name}
          </Typography>
          <Typography component="p" className={classes.desc}>
            {desc}
          </Typography>
          <div className={classes.ratting}>
            {ratting} <Star className={classes.star} />
          </div>
        </CardContent>
        <CardActions className={classes.price}>
          <Typography variant="headline">
            <span>${price}</span>
          </Typography>
          {prevPrice > 0 && (
            <Typography variant="caption" component="h5">
              <span className={Type.lineThrought}>${prevPrice}</span>
            </Typography>
          )}
          <div className={classes.rightAction}>
            <Button size="small" variant="outlined" color="secondary" onClick={detailOpen}>
              See Detail
            </Button>
            {!soldout && (
              <Tooltip title="Add to cart" placement="top">
                <IconButton color="secondary" onClick={addToCart} className={classes.buttonAddList}>
                  <AddShoppingCart />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </CardActions>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  discount: PropTypes.string,
  width: PropTypes.string.isRequired,
  soldout: PropTypes.bool,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  ratting: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  prevPrice: PropTypes.number,
  list: PropTypes.bool,
  detailOpen: PropTypes.func,
  addToCart: PropTypes.func,
};

ProductCard.defaultProps = {
  discount: '',
  soldout: false,
  prevPrice: 0,
  list: false,
  detailOpen: () => (false),
  addToCart: () => (false),
};

const ProductCardResponsive = withWidth()(ProductCard);
export default withStyles(styles)(ProductCardResponsive);
