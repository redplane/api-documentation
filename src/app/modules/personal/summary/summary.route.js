module.exports = function (ngModule) {

    // Import module html template.
    var ngModuleTemplate = require('./summary.html');

    ngModule.config(function ($stateProvider,
                              urlStateConstant) {

        var urlStatePersonalInfo = urlStateConstant.personalInfo;
        var urlStateMasterLayout = urlStatePersonalInfo.masterLayout;
        var urlStatePersonalSummary = urlStatePersonalInfo.summary;

        $stateProvider
            .state(urlStatePersonalSummary.name, {
                url: urlStatePersonalSummary.url,
                controller: "personalSummaryController",
                template: ngModuleTemplate,
                parent: urlStateMasterLayout.name,
                resolve: {
                    'information': function ($personalInfo) {

                        // Initiate promises list.
                        var promises = [];
                        promises.push($personalInfo.getAboutMe());
                        promises.push($personalInfo.getProfessionalSummaries());
                        promises.push($personalInfo.getCertificates());

                        // Resolve all promises to display information.
                        return Promise.all(promises)
                            .then(function success(results) {
                                return {
                                    aboutMe: results[0].data,
                                    summaries: results[1].data,
                                    certificates: results[2].data
                                }
                            });
                    }
                }
            });
    });
};