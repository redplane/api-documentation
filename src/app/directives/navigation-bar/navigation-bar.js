'use strict';

module.exports = function (ngModule) {

    // Import module html.
    var ngModuleHtml = require('./navigation-bar.html');

    ngModule.directive('navigationBar', function () {
        return {
            restrict: "E",
            controller: function($scope){
                $scope.alert = function () {
                    alert('Hello world');
                }
            },
            template: ngModuleHtml
        };
    });
};