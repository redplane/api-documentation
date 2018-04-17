module.exports = function (ngModule) {

    // Load module html.
    var ngModuleHtml = require('./master-layout.html');

    ngModule.config(function ($stateProvider, urlStateConstant) {

        var urlStateReport = urlStateConstant.report;
        var urlStateReportMasterLayout = urlStateReport.masterLayout;
        var urlStateShared = urlStateConstant.shared;
        var urlStateSharedMasterLayout = urlStateShared.masterLayout;

        $stateProvider
            .state(urlStateReportMasterLayout.name, {
                url: urlStateReportMasterLayout.url,
                controller: 'reportMasterLayoutController',
                template: ngModuleHtml,
                parent: urlStateSharedMasterLayout.name
            });
    });
};