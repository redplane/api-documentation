module.exports = function (ngModule) {
    ngModule.controller('personalMasterLayoutController',
        function (urlStateConstant,
                  $scope,
                  $state) {

            //#region Methods

            /*
            * Called when module is initiated
            * */
            $scope.init = function () {
                $scope.translation[urlStatePersonalInfo.summary.name] = 'PERSONAL_SUMMARY';
                $scope.translation[urlStatePersonalInfo.projects.name] = 'PROJECTS';
                $scope.translation[urlStatePersonalInfo.technicalSkill.name] = 'TECHNICAL_SKILL';
            };

            //#endregion

            //#region Properties

            // Get personal profile state.
            var urlStatePersonalInfo = urlStateConstant.personalInfo;

            // Import state translation.
            $scope.translation = {};

            // Service reflection.
            $scope.$state = $state;

            //#endregion
        });
};