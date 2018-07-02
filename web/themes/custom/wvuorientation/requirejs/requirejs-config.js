// js/requirejs-config.js

require.config({
  paths: {
    // 'jquery': '../node_modules/jquery/dist/jquery.min',
    'lodash': '../node_modules/lodash/lodash.min',
    // 'bootstrap-native': '../../../node_modules/bootstrap.native/dist/bootstrap-native-v4',
    'bootstrap-native': '../node_modules/bootstrap.native/dist/bootstrap-native-v4',

    'main': '../components/js/main'
  }
});
debugger;
require(['main']);
require(['bootstrap-native']);
