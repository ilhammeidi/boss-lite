/* eslint-disable react/no-danger */
import React from 'react';
import { object, node } from 'prop-types';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import config from './../../app/config';

const Html = ({
  assets,
  component,
  store,
}) => {
  const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}`;
  const head = Helmet.rewind();
  const ie = '<!--[if lte IE 9]><div class="browsehappy"><div class="browsehappy__inner"><div class="browsehappy__message">You are using an <strong>outdated</strong> browser.Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</div></div></div><![endif]-->';
  const content = component ? renderToString(component) : null;
  return (
    <html lang="en">
      <head>
        {head.base.toComponent()}
        <title>Boss Lite - Material Admin Dashboard</title>
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        <meta charSet="utf-8" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
        {/* favicons */}
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        {/*
        <title>Bossku - Material Admin Dashboard</title>
        <meta name="description" content="" />
        */}
        {/* facebook */}
        <meta property="author" content="bossku" />
        <meta property="og:site_name" content="boss.ux-maestro.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.jpg" />
        {/*
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        */}
        {/* twitter */}
        <meta property="twitter:site" content="boss.ux-maestro.com" />
        <meta property="twitter:domain" content="boss.ux-maestro.com" />
        <meta property="twitter:creator" content="bossku" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:image:src" content="/logo.jpg" />
        {/*
        <meta property="twitter:title" content="" />
        <meta property="twitter:description" content="" />
        */}
        {/* styles (will be present only in production with webpack extract text plugin) */}
        {assets.styles && Object.keys(assets.styles).map(
          c => <link href={assets.styles[c]} key={c} rel="stylesheet" type="text/css" />
        )}
        {/* styles will be preloaded */}
        {config.isProd && assets.styles && Object.keys(assets.styles).map(
          c => <link rel="preload" href={assets.styles[c]} key={c} as="style" />
        )}
        {config.isProd && <link rel="preload" href={assets.javascript.vendor} as="script" />}
        {config.isProd && <link rel="preload" href={assets.javascript.main} as="script" />}
      </head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: ie }} />
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} style={{ height: '100%' }} />
        <script dangerouslySetInnerHTML={{ __html: initialState }} />
        {config.isProd && <script defer src={assets.javascript.vendor} />}
        <script defer src={assets.javascript.main} />
      </body>
    </html>
  );
};

Html.defaultProps = {
  component: null
};

Html.propTypes = {
  assets: object.isRequired,
  component: node,
  store: object.isRequired
};

export default Html;
