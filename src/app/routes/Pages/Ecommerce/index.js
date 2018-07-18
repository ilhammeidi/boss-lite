import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import data from 'ba-utils/productData';
import { SearchProduct, ProductGallery, Notification } from './../../../components';
import {
  fetchAction,
  addAction,
  removeAction,
  checkoutAction,
  detailAction,
  searchAction,
  closeNotifAction
} from './../../../actions/EcommerceActions';

class Ecommerce extends React.Component {
  componentDidMount() {
    this.props.fetchData(data);
  }

  render() {
    const title = brand.name + ' - Ecommerce';
    const description = brand.desc;
    const {
      dataProduct,
      handleAddToCart,
      dataCart,
      removeItem,
      checkout,
      showDetail,
      productIndex,
      totalItems,
      totalPrice,
      search,
      keyword,
      closeNotif,
      messageNotif
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <Notification close={() => closeNotif()} message={messageNotif} />
        <SearchProduct
          dataCart={dataCart}
          removeItem={removeItem}
          checkout={checkout}
          totalItems={totalItems}
          totalPrice={totalPrice}
          search={search}
        />
        <ProductGallery
          dataProduct={dataProduct}
          showDetail={showDetail}
          handleAddToCart={handleAddToCart}
          productIndex={productIndex}
          keyword={keyword}
        />
      </div>
    );
  }
}

Ecommerce.propTypes = {
  fetchData: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  showDetail: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  dataProduct: PropTypes.object.isRequired,
  dataCart: PropTypes.object.isRequired,
  productIndex: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};

const reducer = 'ecommerce';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  keyword: state.getIn([reducer, 'keywordValue']),
  dataProduct: state.getIn([reducer, 'productList']),
  dataCart: state.getIn([reducer, 'cart']),
  productIndex: state.getIn([reducer, 'productIndex']),
  totalItems: state.getIn([reducer, 'totalItems']),
  totalPrice: state.getIn([reducer, 'totalPrice']),
  messageNotif: state.getIn([reducer, 'notifMsg']),
});

const constDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  search: bindActionCreators(searchAction, dispatch),
  handleAddToCart: bindActionCreators(addAction, dispatch),
  removeItem: bindActionCreators(removeAction, dispatch),
  showDetail: bindActionCreators(detailAction, dispatch),
  checkout: () => dispatch(checkoutAction),
  closeNotif: () => dispatch(closeNotifAction),
});

const EcommerceMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(Ecommerce);

export default EcommerceMapped;
