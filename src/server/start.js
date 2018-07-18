import { server } from 'universal-webpack';
import settings from './../../webpack/universal-webpack-settings.json';
import config from './../../webpack/webpack.config';

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;

server(config, settings);
