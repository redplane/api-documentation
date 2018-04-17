module.exports = function (ngModule) {
    /*
    * Constants declaration.
    * */
    require('./app-settings.constant')(ngModule);
    require('./url-state.constant')(ngModule);
    require('./api-url.constant')(ngModule);
};