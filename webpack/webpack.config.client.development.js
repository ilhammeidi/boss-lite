import webpack from 'webpack';
import merge from 'webpack-merge';
import getBaseConfig from './webpack.config.client';
import appConfig from '../src/app/config';

const { host, port } = appConfig.webpack.server;
const baseConfig = getBaseConfig({
  development: true,
  css_bundle: true
});

const config = {
  devtool: 'eval',

  performance: { hints: false },

  entry: {
    main: [
      `webpack-hot-middleware/client?path=${host}:${port}/__webpack_hmr`,
      'react-hot-loader/patch',
      baseConfig.entry.main
    ]
  },

  output: {
    publicPath: `${host}:${port}${baseConfig.output.publicPath}`
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        SSR: process.env.SSR,
        SSL: process.env.SSL,
        APISSL: process.env.APISSL,
        APIHOST: `"${process.env.APIHOST}"`,
        APIPORT: process.env.APIPORT,
        GOOGLE_ANALITICS_ID: `"${process.env.GOOGLE_ANALITICS_ID}"`
      },
      __CLIENT__: true,
      __SERVER__: false
    })
  ]
};

export default merge(baseConfig, config);
