import { fromJS, List, Map } from 'immutable';
import notif from 'ba-utils/notifMessage';
import {
  FETCH_CONTACT_DATA,
  SEARCH_CONTACT,
  SHOW_DETAIL_CONTACT,
  HIDE_DETAIL,
  EDIT_CONTACT,
  SUBMIT_CONTACT,
  DELETE_CONTACT,
  TOGGLE_FAVORITE,
  ADD_CONTACT,
  CLOSE_CONTACT_FORM,
  CLOSE_NOTIF
} from './../../actions/actionTypes';

const initialState = {
  contactList: List([]),
  formValues: Map(),
  selectedIndex: 0,
  selectedId: '',
  keywordValue: '',
  avatarInit: '',
  openFrm: false,
  showMobileDetail: false,
  notifMsg: '',
};
let editingIndex = 0;

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case FETCH_CONTACT_DATA:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('contactList', items);
      });
    case SEARCH_CONTACT:
      return state.withMutations((mutableState) => {
        action.keyword.persist();
        const keyword = action.keyword.target.value.toLowerCase();
        mutableState.set('keywordValue', keyword);
      });
    case ADD_CONTACT:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', true)
          .set('formValues', Map())
          .set('avatarInit', '');
      });
    case CLOSE_CONTACT_FORM:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', false)
          .set('formValues', Map())
          .set('avatarInit', '')
          .set('notifMsg', notif.discard);
      });
    case EDIT_CONTACT:
      return state.withMutations((mutableState) => {
        editingIndex = state.get('contactList').indexOf(action.item);
        mutableState
          .set('openFrm', true)
          .set('selectedId', action.item.get('id'))
          .set('formValues', action.item)
          .set('avatarInit', action.item.get('avatar'));
      });
    case SUBMIT_CONTACT:
      return state.withMutations((mutableState) => {
        const initItem = Map(action.newData);
        if (state.get('selectedId') === action.newData.get('id')) {
          // Update data
          const avatar = action.avatar !== '' ? action.avatar : state.get('avatarInit');
          const newItem = initItem.update((initUpdated) => (initUpdated.set('avatar', avatar)));
          mutableState
            .update('contactList', contactList => contactList.setIn(
              [editingIndex], newItem
            ))
            .set('notifMsg', notif.updated);
        } else {
          // Insert data
          const avatar = action.avatar !== '' ? action.avatar : '/images/pp_boy.svg';
          const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
          const newItem = initItem
            .update('id', (val = id) => val)
            .update('avatar', (val = avatar) => val)
            .update('favorited', (val = false) => val);
          mutableState
            .update('contactList', contactList => contactList.unshift(newItem))
            .set('selectedIndex', 0)
            .set('notifMsg', notif.saved);
        }
        mutableState
          .set('formValues', Map())
          .set('avatarInit', '')
          .set('openFrm', false);
      });
    case SHOW_DETAIL_CONTACT:
      return state.withMutations((mutableState) => {
        const index = state.get('contactList').indexOf(action.item);
        mutableState
          .set('selectedIndex', index)
          .set('showMobileDetail', true);
      });
    case HIDE_DETAIL:
      return state.withMutations((mutableState) => {
        mutableState.set('showMobileDetail', false);
      });
    case DELETE_CONTACT:
      return state.withMutations((mutableState) => {
        const index = state.get('contactList').indexOf(action.item);
        mutableState
          .update('contactList', contactList => contactList.splice(index, 1))
          .set('notifMsg', notif.removed);
      });
    case TOGGLE_FAVORITE:
      return state.withMutations((mutableState) => {
        const index = state.get('contactList').indexOf(action.item);
        mutableState.update('contactList', contactList => contactList
          .setIn([index, 'favorited'], !state.getIn(['contactList', index, 'favorited']))
        );
      });
    case CLOSE_NOTIF:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}
