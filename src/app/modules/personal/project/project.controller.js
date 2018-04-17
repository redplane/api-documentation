module.exports = function (ngModule) {
    ngModule.controller('projectSummaryController', function ($scope, $personalInfo) {
        $scope.projects = {};

        // This callback is fired when component has been loaded successfully.
        $scope.init = function () {
            $scope.reloadProjects();
        };

        // Reload projects list.
        $scope.reloadProjects = function () {
            $personalInfo.getProjects()
                .then(function (x) {
                    var data = x.data;
                    if (data == null)
                        return;

                    $scope.projects = data.projects;
                })
                .catch(function (x) {

                });
        };

        // Check whether url is valid or not. If the url is not valid, fallback url will be used.
        $scope.getLink = function (url) {
            if (url == null || url.length < 1)
                return "javascript:void(0);";

            return url;
        }
    });
};