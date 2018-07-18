import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ViewList from '@material-ui/icons/ViewList';
import GridOn from '@material-ui/icons/GridOn';
import ProductCard from './../CardPaper/ProductCard';
import ProductDetail from './ProductDetail';

const styles = theme => ({
  result: {
    margin: theme.spacing.unit
  },
  option: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  button: {
    fontSize: 12,
    '& svg': {
      marginRight: 10
    }
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
});

class ProductGallery extends React.Component {
  state = {
    listView: false,
    open: false,
  }

  handleDetailOpen = (product) => {
    this.setState({ open: true });
    this.props.showDetail(product);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSwitchView = () => {
    this.setState({
      listView: !this.state.listView
    });
  }

  render() {
    const { classes } = this.props;
    const { listView, open } = this.state;
    const {
      dataProduct,
      handleAddToCart,
      productIndex,
      keyword,
    } = this.props;

    const getTotalResult = dataArray => {
      let totalResult = 0;
      for (let i = 0; i < dataArray.size; i += 1) {
        if (dataArray.getIn([i, 'name']) === undefined) {
          return false;
        }
        if (dataArray.getIn([i, 'name']).toLowerCase().indexOf(keyword) !== -1) {
          totalResult += 1;
        }
      }
      return totalResult;
    };

    return (
      <div>
        <ProductDetail
          open={open}
          close={this.handleClose}
          detailContent={dataProduct}
          productIndex={productIndex}
          handleAddToCart={handleAddToCart}
        />
        <section className={classes.option}>
          <Typography variant="caption" className={classes.result}>
            {getTotalResult(dataProduct)} Results
          </Typography>
          <Button onClick={this.handleSwitchView} className={classes.button} size="small">
            {listView ? <GridOn /> : <ViewList />}
            {listView ? 'Grid View' : 'List View'}
          </Button>
        </section>
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={24}
        >
          {
            dataProduct.map((product, index) => {
              if (product.get('name').toLowerCase().indexOf(keyword) === -1) {
                return false;
              }
              const itemAttr = {
                id: product.get('id'),
                name: product.get('name'),
                thumbnail: product.get('thumbnail'),
                price: product.get('price'),
                quantity: 1
              };
              return (
                <Grid item md={listView ? 12 : 4} sm={listView ? 12 : 6} xs={12} key={index.toString()}>
                  <ProductCard
                    list={listView}
                    name={product.get('name')}
                    thumbnail={product.get('thumbnail')}
                    desc={product.get('desc')}
                    ratting={product.get('ratting')}
                    price={product.get('price')}
                    prevPrice={product.get('prevPrice')}
                    discount={product.get('discount')}
                    soldout={product.get('soldout')}
                    detailOpen={() => this.handleDetailOpen(product)}
                    addToCart={() => handleAddToCart(itemAttr)}
                  />
                </Grid>
              );
            })
          }
        </Grid>
      </div>
    );
  }
}

ProductGallery.propTypes = {
  classes: PropTypes.object.isRequired,
  dataProduct: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  showDetail: PropTypes.func.isRequired,
  productIndex: PropTypes.number.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProductGallery);
