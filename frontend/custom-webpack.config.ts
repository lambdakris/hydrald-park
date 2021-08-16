import { Configuration } from 'webpack';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

export default {
  plugins: [
    new NodePolyfillPlugin()
  ]
} as Configuration;