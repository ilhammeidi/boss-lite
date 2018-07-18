import React from 'react';
import { object, oneOfType, array } from 'prop-types';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ConnectedRouter } from 'react-router-redux';
import {} from './normalize.scss';
import {} from './../app/styles/layout/_base.scss';

const Root = ({
  history,
  routes,
  store
}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  history: object.isRequired,
  store: object.isRequired,
  routes: oneOfType([
    array,
    object,
  ]).isRequired
};

export default Root;
