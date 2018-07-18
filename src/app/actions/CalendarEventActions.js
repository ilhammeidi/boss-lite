import * as types from './actionTypes';

export const fetchAction = items => ({
  type: types.FETCH_CALENDAR_DATA,
  items,
});

export const addAction = {
  type: types.ADD_EVENT
};

export const discardAction = {
  type: types.DISCARD_EVENT
};

export const submitAction = newEvent => ({
  type: types.SUBMIT_EVENT,
  newEvent,
});

export const deleteAction = event => ({
  type: types.DELETE_EVENT,
  event,
});

export const closeNotifAction = {
  type: types.CLOSE_NOTIF
};
