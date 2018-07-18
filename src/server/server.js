import path from 'path';
import compression from 'compression';
import express from 'express';
import favicon from 'serve-favicon';
import {} from './env';
import rawdocs from './rawdocs';
import rawicons from './rawicons';
import createSSR from './SSR/createSSR';
import config from './../app/config';

const { host, port } = config.server;
const app = express();

export default function (parameters) {
  if (config.isProd) {
    app.use(compression());
  }
  app.disable('etag');
  app.disable('x-powered-by');
  app.use('/', express.static('static', { etag: false }));
  app.use(favicon(path.join('static', 'favicons', 'favicon.ico')));

  app.use((req, res, next) => {
    if (config.ssl) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        res.redirect(302, 'https://' + req.hostname + req.originalUrl);
      } else {
        next();
      }
    } else {
      next();
    }
  });

  app.get('/api/docs', (req, res) => {
    res.json({
      records: [
        { source: rawdocs(req.query) }
      ]
    });
  });

  app.get('/api/icons', (req, res) => {
    res.json({
      records: [
        { source: rawicons(req.query) }
      ]
    });
  });

  app.get('/api/users', (req, res) => {
    res.json({
      records: [
        { id: 1, name: 'Justin Timberlake' },
        { id: 2, name: 'Kanye West' }
      ]
    });
  });

  app.get('*', createSSR(parameters && parameters.chunks()));

  const server = app.listen(port, (err) => { // eslint-disable-line
    if (err) {
      return console.error(err);
    }
    console.info(`Listening at ${host}:${port}`);
  });

  return {
    server,
    app
  };
}
