'use strict';

module.exports = function (ngModule) {
    ngModule.controller('personalSummaryController',
        function ($personalInfo, $scope,
                  information) {

            //#region Properties

            // Personal objectives.
            $scope.aboutMe = information.aboutMe;

            // Personal summaries.
            $scope.summaries = information.summaries;

            // Personal certificates.
            $scope.certificates = information.certificates;

            //#endregion
        });
};
