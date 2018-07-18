import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ss from 'ba-utils/screenshoot';
import 'ba-components/vendors/slick-carousel/slick-carousel.css';
import 'ba-components/vendors/slick-carousel/slick.css';
import 'ba-components/vendors/slick-carousel/slick-theme.css';
import styles from './product-jss';
import MarketingAds from './../MarketingAds/MarketingAds';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ProductDetail extends React.Component {
  render() {
    const {
      classes,
      open,
      close,
      detailContent,
      productIndex
    } = this.props;

    return (
      <Dialog
        fullScreen
        open={open}
        onClose={close}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {detailContent.getIn([productIndex, 'name'])}
            </Typography>
            <IconButton color="inherit" onClick={() => close()} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <MarketingAds title="Product Detail" preview={ss.ecommerce} link="http://boss.ux-maestro.com/app/pages/ecommerce" />
      </Dialog>
    );
  }
}

ProductDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  detailContent: PropTypes.object.isRequired,
  productIndex: PropTypes.number,
};

ProductDetail.defaultProps = {
  productIndex: undefined
};

export default withStyles(styles)(ProductDetail);
