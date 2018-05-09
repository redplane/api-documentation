const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

exports = module.exports = {
    /*
    * Get configuration options.
    * */
    get: (paths, bProductionMode) => {

        let plugins = [];

        //#region Clean plugin

        // Items to be cleaned.
        const oCleanedItems = [paths.dist];

        const oCleanOption = {
            // Absolute path to your webpack root folder (paths appended to this)
            // Default: root of your package
            root: paths.root,

            // Write logs to console.
            verbose: true,

            // Use boolean "true" to test/emulate delete. (will not remove files).
            // Default: false - remove files
            dry: false,

            // If true, remove files on recompile.
            // Default: false
            watch: false,

            // Instead of removing whole path recursively,
            // remove all path's content with exclusion of provided immediate children.
            // Good for not removing shared files from build directories.
            exclude: null,

            // allow the plugin to clean folders outside of the webpack root.
            // Default: false - don't allow clean folder outside of the webpack root
            allowExternal: false
        };

        // Clean fields before publishing packages.
        plugins.push(new CleanWebpackPlugin(oCleanedItems, oCleanOption));

        //#endregion

        //#region Clean obsolete chunk plugin

        plugins.push(new CleanObsoleteChunks({
            // Write logs to console.
            // Default: true
            verbose: true,

            // Clean obsolete chunks of webpack child compilations.
            // Default: false
            deep: true
        }));

        //#endregion

        //#region Copy plugin

        // Source items that will be copied.
        const oSourceCopiedItems = ['assets'];
        let oCopiedItems = [];

        for (let item of oSourceCopiedItems){
            oCopiedItems.push({
                from: `${paths.app}\\${item}`,
                to: `${paths.dist}\\${item}`
            });
        }

        plugins.push(new CopyWebpackPlugin(oCopiedItems));

        //#endregion

        // Enlist plugins which should be run on production mode.
        if (bProductionMode) {

            //Automatically add annotation to angularjs modules.
            // Bundling can affect module initialization.
            plugins.push(new ngAnnotatePlugin({add: true}));

            // Bundle source files.
            plugins.push(new webpack.optimize.UglifyJsPlugin({
                compress: {warnings: true}
            }));
        } else {

            console.log('Starting webpack dev server');

            // Require original index file.
            let browserSyncPlugin = new BrowserSyncPlugin({
                // browse to http://localhost:3000/ during development,
                // ./public directory is being served
                host: 'localhost',
                port: 8000,
                files: [
                    `${paths.source}\\'index.html`
                ],
                server: {
                    baseDir: [
                        paths.dist
                    ]
                }
            });

            // Push plugins into list.
            plugins.push(browserSyncPlugin);
        }


        //#region Html plugin

        //Automatically inject chunks into html files.
        plugins.push(new HtmlWebpackPlugin({
            inject: false,
            template: `${paths.source}\\${'index.html'}`
        }));

        //#endregion

        return plugins;

    }
};