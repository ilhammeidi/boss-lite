import { reducer as form } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutablejs';
import { routerReducer as router } from 'react-router-redux';

import ui from './modules/ui';
import treeTable from './modules/treeTable';
import crudTable from './modules/crudTable';
import initval from './modules/initForm';
import login from './modules/login';
import ecommerce from './modules/ecommerce';
import contact from './modules/contact';
import calendar from './modules/calendar';

function branchReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { branch } = action;
    const isInitializationCall = state === undefined;
    if (branch !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}

export default function createReducer() {
  return combineReducers({
    form,
    router,
    ui,
    initval,
    login,
    calendar,
    ecommerce,
    contact,
    treeTableArrow: branchReducer(treeTable, 'treeTableArrow'),
    treeTablePM: branchReducer(treeTable, 'treeTablePM'),
    crudTableDemo: branchReducer(crudTable, 'crudTableDemo'),
  });
}
