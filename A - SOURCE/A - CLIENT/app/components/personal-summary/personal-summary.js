'use strict';

angular.module('personal-summary', [
    'ngRoute',
    'general-info-service'
])
    .directive('personalSummary', function () {
        return {
            restrict: "E"
        };
    })
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/personal-summary', {
                controller: "PersonalSummaryController",
                templateUrl: "components/personal-summary/personal-summary.html"
            });
    }])
    .controller('PersonalSummaryController', ['GeneralInfoService', '$scope', function (GeneralInfoService, $scope) {

        // Personal mission.
        $scope.mission = null;

        // Personal summary.
        $scope.summary = null;

        // List of certificates.
        $scope.certificates = null;

        // Callback which is fired when personal summary directive is initially loaded.
        $scope.init = function () {

            // Reload personal mission.
            $scope.reloadPersonalMission();

            // Reload personal summary information.
            $scope.reloadPersonalSummary();

            // Reload certificates.
            $scope.reloadCertifications();
        };

        // Reload personal mission.
        $scope.reloadPersonalMission = function(){
            // Find personal mission.
            GeneralInfoService.getPersonalMission()
                .then(function (x) {

                    // Find response data.
                    var data = x.data;
                    if (data == null)
                        return;

                    // Find items list.
                    $scope.mission = data;
                })
                .catch(function (x) {

                });
        };

        // Reload personal summary.
        $scope.reloadPersonalSummary = function () {
            // Find personal summary.
            GeneralInfoService.getPersonalSummary()
                .then(function (x) {
                    var data = x.data;
                    if (data == null)
                        return;

                    $scope.summary = data;
                })
                .catch(function (x) {
                });
        };

        // Reload list of certificates.
        $scope.reloadCertifications = function () {

            // Find certificates list.
            GeneralInfoService.getCertificates()
                .then(function (x) {
                    var data = x.data;
                    if (data == null)
                        return;

                    var items = data.items;
                    if (items == null || items.length < 1)
                        return;

                    $scope.certificates = items;
                })
                .catch(function (x) {
                });
        }
    }]);