module.exports = function(ngModule){

    var ngModuleTemplate = require('./master-layout.html');

    ngModule.config(function(urlStateConstant,
                             $stateProvider){

        var urlStateShared = urlStateConstant.shared;
        var urlStateSharedMasterLayout = urlStateShared.masterLayout;
        var urlStatePersonalInfo = urlStateConstant.personalInfo;
        var urlStateMasterLayout = urlStatePersonalInfo.masterLayout;

        $stateProvider
            .state(urlStateMasterLayout.name, {
                url: urlStateMasterLayout.url,
                controller: "personalMasterLayoutController",
                template: ngModuleTemplate,
                parent: urlStateSharedMasterLayout.name
            });
    });
};