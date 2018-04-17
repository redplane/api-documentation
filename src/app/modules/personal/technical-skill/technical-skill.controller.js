'use strict';

module.exports = function (ngModule) {
    ngModule.controller('technicalSkillController',
        function ($personalInfo, $scope) {
            $scope.skillSummary = {};

            // This callback is fired when component has been loaded successfully.
            $scope.init = function () {
                $scope.reloadSkillsSummary();
            };

            // Reload skills summary,
            $scope.reloadSkillsSummary = function () {

                // Load personal technical skills.
                $personalInfo.getTechnicalSkills()
                    .then(function (x) {
                        var data = x.data;
                        if (data == null)
                            return;

                        // Update skill summary.
                        $scope.skillSummary = data;
                    })
                    .catch(function (x) {
                    })
            };

            // Depend on skill point to decide class of progressbar.
            $scope.findProgressbarClass = function (skillPoint) {
                if (skillPoint == null)
                    return "";

                if (skillPoint < 50)
                    return "danger";

                if (50 <= skillPoint && skillPoint <= 60)
                    return "warning";

                if (60 < skillPoint && skillPoint <= 80)
                    return "info";

                return "primary";
            }
        });
};

