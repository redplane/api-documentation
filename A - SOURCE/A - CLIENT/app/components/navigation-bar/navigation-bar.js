'use strict';

angular.module('navigation-bar', ['ngRoute'])
    .directive('navigationBar', function () {
        return {
            restrict: "E",
            controller: "NavigationBarController",
            templateUrl: "components/navigation-bar/navigation-bar.html",
            scope: {
                items: "="
            }
        };
    })
    .controller('NavigationBarController', [function () {

    }]);