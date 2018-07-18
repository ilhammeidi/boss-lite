import * as types from './actionTypes';

export const fetchAction = items => ({
  type: types.FETCH_CONTACT_DATA,
  items,
});

export const showDetailAction = item => ({
  type: types.SHOW_DETAIL_CONTACT,
  item,
});

export const hideDetailAction = {
  type: types.HIDE_DETAIL,
};

export const submitAction = (newData, avatar) => ({
  type: types.SUBMIT_CONTACT,
  newData,
  avatar
});

export const addAction = {
  type: types.ADD_CONTACT,
};

export const editAction = item => ({
  type: types.EDIT_CONTACT,
  item,
});

export const searchAction = keyword => ({
  type: types.SEARCH_CONTACT,
  keyword,
});

export const removeAction = item => ({
  type: types.DELETE_CONTACT,
  item,
});

export const closeAction = {
  type: types.CLOSE_CONTACT_FORM,
};

export const addToFavoriteAction = item => ({
  type: types.TOGGLE_FAVORITE,
  item,
});

export const closeNotifAction = {
  type: types.CLOSE_NOTIF
};
