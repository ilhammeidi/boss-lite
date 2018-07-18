import { fromJS, List, Map } from 'immutable';
import notif from 'ba-utils/notifMessage';
import {
  FETCH_CALENDAR_DATA,
  ADD_EVENT,
  DISCARD_EVENT,
  SUBMIT_EVENT,
  DELETE_EVENT,
  CLOSE_NOTIF
} from './../../actions/actionTypes';

const initialState = {
  events: List([]),
  openFrm: false,
  formValues: Map(),
  notifMsg: '',
};

const initForm = Map({
  title: '',
  start: new Date(),
  end: new Date(),
  hexColor: 'F8BBD0',
});

const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case FETCH_CALENDAR_DATA:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('events', items);
      });
    case ADD_EVENT:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', true)
          .set('formValues', initForm);
      });
    case DISCARD_EVENT:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', false)
          .set('formValues', Map())
          .set('notifMsg', notif.discard);
      });
    case SUBMIT_EVENT:
      return state.withMutations((mutableState) => {
        const initItem = Map(action.newEvent);
        const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        const newItem = initItem.update('id', (val = id) => val);
        mutableState.update('events', events => events.push(newItem));
        mutableState
          .set('formValues', Map())
          .set('openFrm', false)
          .set('notifMsg', notif.saved);
      });
    case DELETE_EVENT:
      return state.withMutations((mutableState) => {
        const eventItem = state.get('events')
          .find(obj => (
            obj.get('id') === action.event.id
          ));
        const index = state.get('events').indexOf(eventItem);
        mutableState
          .update('events', events => events.splice(index, 1))
          .set('notifMsg', notif.removed);
      });
    case CLOSE_NOTIF:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}
