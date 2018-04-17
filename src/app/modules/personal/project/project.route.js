'use strict';

module.exports = function (ngModule) {

    // Import module html.
    var ngModuleHtml = require('./project.html');

    ngModule.config(function (urlStateConstant,
                              $stateProvider) {

        var urlStatePersonalInfo = urlStateConstant.personalInfo;
        var urlStateProjectSummary = urlStatePersonalInfo.projects;
        var urlStateMasterLayout = urlStatePersonalInfo.masterLayout;

        $stateProvider
            .state(urlStateProjectSummary.name, {
                url: urlStateProjectSummary.url,
                controller: "projectSummaryController",
                template: ngModuleHtml,
                parent: urlStateMasterLayout.name
            });
    });
};

