const path = require('path');
const webpackRules = require('./webpack/rule.option');
const webpackPlugins = require('./webpack/plugin.option');

// Import webpack settings.
const settings = require('./webpack/webpack-setting');

// Get environment variable.
const env = process.env.NODE_ENV;

// True if built is set to production mode.
// False if built is set to development mode.
const bProductionMode = env && 'production' === env.trim().toLowerCase();

// Build path options.
const paths = {
    root: __dirname,
    source: settings.paths.getSource(__dirname),
    app: settings.paths.getApplication(__dirname),
    dist: settings.paths.getDist(__dirname)
};

/*
* Module export.
* */
module.exports = {
    context: settings.paths.getSource(__dirname),
    entry: {
        'app': path.resolve(paths.app, 'app.js')
    },
    module: {
        rules: webpackRules.get()
    },
    plugins: webpackPlugins.get(paths, bProductionMode),
    output: {
        path: paths.dist,
        filename: '[name].js'
    }
};

// Return module configurations.
return module.exports;