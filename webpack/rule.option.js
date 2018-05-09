exports = module.exports = {
    /*
    * Get configuration options.
    * */
    get: () => {

        // List of rules.
        let rules = [];

        //#region Css loader

        rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        });

        //#endregion

        //#region Asset loader

        rules.push({
            test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            ]
        });

        //#endregion

        //#region Html loader

        rules.push({
            test: /\.html$/, // Only .html files
            loader: 'html-loader' // Run html loader
        });

        //#endregion

        return rules;
    }
};