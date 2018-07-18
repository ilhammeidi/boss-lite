import * as types from './actionTypes';

export const fetchAction = items => ({
  type: types.FETCH_PRODUCT_DATA,
  items,
});

export const searchAction = keyword => ({
  type: types.SEARCH_PRODUCT,
  keyword,
});

export const addAction = item => ({
  type: types.ADD_TO_CART,
  item,
});

export const removeAction = item => ({
  type: types.DELETE_CART_ITEM,
  item,
});

export const checkoutAction = ({
  type: types.CHECKOUT,
});

export const detailAction = item => ({
  type: types.SHOW_DETAIL_PRODUCT,
  item
});

export const closeNotifAction = {
  type: types.CLOSE_NOTIF
};
