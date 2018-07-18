import { fromJS, List } from 'immutable';
import notif from 'ba-utils/notifMessage';
import {
  FETCH_PRODUCT_DATA,
  ADD_TO_CART,
  DELETE_CART_ITEM,
  CHECKOUT,
  SHOW_DETAIL_PRODUCT,
  SEARCH_PRODUCT,
  CLOSE_NOTIF
} from './../../actions/actionTypes';

const initialState = {
  productList: List([]),
  cart: List([]),
  totalItems: 0,
  totalPrice: 0,
  productIndex: 0,
  keywordValue: '',
  notifMsg: '',
};

let itemId = [];

const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case FETCH_PRODUCT_DATA:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('productList', items);
      });
    case SEARCH_PRODUCT:
      return state.withMutations((mutableState) => {
        action.keyword.persist();
        const keyword = action.keyword.target.value.toLowerCase();
        mutableState.set('keywordValue', keyword);
      });
    case ADD_TO_CART:
      return state.withMutations((mutableState) => {
        const item = fromJS(action.item);
        const qty = Number(item.get('quantity'));
        const price = item.get('price');
        const index = itemId.indexOf(action.item.id);
        if (index > -1) {
          // If item already added to cart
          mutableState.update('cart', cart => cart.setIn(
            [index, 'quantity'],
            state.getIn(['cart', index, 'quantity']) + qty
          ));
        } else {
          // item not exist in cart
          itemId.push(action.item.id);
          mutableState.update('cart', cart => cart.push(item));
        }
        mutableState
          .set('totalItems', state.get('totalItems') + qty)
          .set('totalPrice', state.get('totalPrice') + (price * qty))
          .set('notifMsg', notif.addCart);
      });
    case DELETE_CART_ITEM:
      return state.withMutations((mutableState) => {
        const index = state.get('cart').indexOf(action.item);
        const qty = Number(action.item.get('quantity'));
        const price = action.item.get('price');
        itemId = itemId.filter(item => item !== action.item.get('id'));
        mutableState
          .update('cart', cart => cart.splice(index, 1))
          .set('totalItems', state.get('totalItems') - qty)
          .set('totalPrice', state.get('totalPrice') - (price * qty))
          .set('notifMsg', notif.removed);
      });
    case CHECKOUT:
      itemId = [];
      return state.withMutations((mutableState) => {
        mutableState
          .set('cart', List([]))
          .set('totalItems', 0)
          .set('totalPrice', 0)
          .set('notifMsg', notif.checkout);
      });
    case SHOW_DETAIL_PRODUCT:
      return state.withMutations((mutableState) => {
        const index = state.get('productList').indexOf(action.item);
        mutableState.set('productIndex', index);
      });
    case CLOSE_NOTIF:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}
