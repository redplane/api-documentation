module.exports = function (ngModule) {

    // Import module html.
    var ngModuleHtml = require('./technical-skill.html');

    ngModule.config(function ($stateProvider,
                              urlStateConstant) {

        var urlStatePersonalInfo = urlStateConstant.personalInfo;
        var urlStateTechnicalSkill = urlStatePersonalInfo.technicalSkill;
        var urlStateMasterLayout = urlStatePersonalInfo.masterLayout;
        $stateProvider
            .state(urlStateTechnicalSkill.name, {
                url: urlStateTechnicalSkill.url,
                controller: "technicalSkillController",
                template: ngModuleHtml,
                parent: urlStateMasterLayout.name
            });
    });
};