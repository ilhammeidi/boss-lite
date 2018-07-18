import cloneDeep from 'lodash/cloneDeep';
import baseConfig from './webpack.config.server';
import appConfig from '../src/app/config';

const { host, port } = appConfig.webpack.server;
const config = cloneDeep(baseConfig);

config.output.publicPath = `${host}:${port}${config.output.publicPath}`;

export default config;
