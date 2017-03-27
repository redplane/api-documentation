'use strict';

angular.module('sidebar', ['ngRoute', 'general-info-service'])
    .directive('sidebar', function () {
        return {
            restrict: 'E',
            templateUrl: "components/sidebar/sidebar.html",
            controller: 'SidebarController',
            scope: {
                accountProfileName: '@',
                accountProfileImage: '@',
                accountProfileTitle: '@',
                items: '='
            }
        };
    })
    .controller('SidebarController', ['$scope', '$location', function ($scope, $location) {

        // Get location path.
        $scope.getLocation = function(){
          return $location.path();
        };

        // Check whether url is chosen or not.
        $scope.isUrlChosen = function(url){
            if (url == null || url.length < 1)
                return false;

            return url.indexOf($location.path()) == 0;
        }
    }]);