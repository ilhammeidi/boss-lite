process.noDeprecation = true;

import path from 'path';
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';

const rootFolder = path.resolve(__dirname, '..');
const config = {
  context: rootFolder,
  entry: {
    main: './src/client'
  },

  output: {
    path: path.resolve(rootFolder, 'static/assets'),
    publicPath: '/assets/',
    filename: '[name].[hash].js'
  },

  module: {
    rules: [
      /* {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }, */
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        use: 'file-loader'
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader : 'css-loader',
          options:
          {
            sourceMap: true,
            importLoaders: 2,
            modules: true,
            localIdentName: '[local]__[hash:base64:5]'
          }
        },
        {
          loader : 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader : 'sass-loader',
          options: {
            outputStyle: 'expanded',
            sourceMap: true
          }
        }]
      },
      {
        test: /\.(css)$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader : 'css-loader',
          options: {
            importLoaders: 2,
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader'
        }]
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ]
  },

  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  resolve: {
    extensions: ['*', '.js'],
    modules: ['src', 'node_modules'],
    alias: {
      'ba-components': path.join(__dirname, '../src/app/styles/components/'),
      'ba-helpers': path.join(__dirname, '../src/app/styles/helpers/'),
      'ba-utils': path.join(__dirname, '../src/app/utils/'),
      'ba-images': path.join(__dirname, '../static/images/'),
      'ba-vendor': path.join(__dirname, '../node_modules/'),
    }
  }
};

export default config;
