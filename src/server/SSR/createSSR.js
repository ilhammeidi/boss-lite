import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import getRoutes from './../../app/routes';
import Html from './html';
import ApiClient from './../../helpers/ApiClient';
import configureStore from './../../app/redux/store';
import config from './../../app/config';

export default function createSSR(assets) {
  return (req, res) => {
    const context = {};
    const history = createMemoryHistory({
      initialEntries: [req.url]
    });
    const client = new ApiClient(req);
    const store = configureStore(history, client);
    const routes = getRoutes(store);

    const hydrateOnClient = () => {
      res.send(
        `<!doctype html>\n${renderToString(
          <Html
            assets={assets}
            store={store}
          />
        )}`
      );
    };

    if (!config.ssr) {
      hydrateOnClient();
      return;
    }

    if (context.status === 302) {
      res.redirect(302, context.url);
      return;
    }

    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({ route: { component: { fetchData } } }) => {
      if (fetchData instanceof Function) {
        return fetchData(store)
          .then(
            () => {},
            () => {}
          );
      }
      return Promise.resolve();
    });

    Promise.all(promises).then(() => {
      const component = (
        <Provider store={store}>
          <StaticRouter
            location={req.url}
            context={context}
          >
            {renderRoutes(routes)}
          </StaticRouter>
        </Provider>
      );

      const content = renderToString(
        <Html
          assets={assets}
          component={component}
          store={store}
        />
      );

      if (context.status) {
        res.status(context.status);
      } else {
        res.status(200);
      }

      return res.send(`<!doctype html>\n${content}`);
    });
  };
}
