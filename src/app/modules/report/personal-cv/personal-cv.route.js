module.exports = function(ngModule){

    // Import module html.
    var ngModuleHtml = require('./personal-cv.html');

    ngModule.config(function($stateProvider,
                             urlStateConstant){

        var urlStateReport = urlStateConstant.report;
        var urlStateReportMasterLayout = urlStateReport.masterLayout;
        var urlStatePersonalCvReport = urlStateReport.personalCv;

        $stateProvider.state(urlStatePersonalCvReport.name, {
            url: urlStatePersonalCvReport.url,
            controller: 'personalCvReportController',
            parent: urlStateReportMasterLayout.name,
            template: ngModuleHtml,
            resolve:{
                candidateProfile: function($personalInfo){
                    return $personalInfo.getFullProfile()
                        .then(function(profile){
                            return profile
                        });
                }
            }
        })
    });
};