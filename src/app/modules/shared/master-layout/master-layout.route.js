module.exports = function (ngModule) {

    // Import module html.
    var ngModuleHtml = require('./master-layout.html');

    ngModule.config(function ($stateProvider,
                              urlStateConstant) {

        var urlStateShared = urlStateConstant.shared;
        var urlStateSharedMasterLayout = urlStateShared.masterLayout;

        $stateProvider
            .state(urlStateSharedMasterLayout.name, {
                abstract: true,
                template: ngModuleHtml
            })
    });
};