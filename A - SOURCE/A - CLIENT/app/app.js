'use strict';

// Declare app level module which depends on views, and components
angular
    .module('api-documentation', [
        'ngRoute',
        'navigation-bar',
        'sidebar',
        'personal-summary',
        'personal-technical-skill',
        'project-summary',

        'message-service',
        'api-setting-service',
        'general-info-service'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    // Url hash configuration
    $locationProvider
        .hashPrefix('!');

    // Fallback url.
    $routeProvider.otherwise({redirectTo: '/personal-summary'});

}])
    .controller('ApiDocumentationController', ['GeneralInfoService', '$scope', function (GeneralInfoService, $scope) {
        $scope.sidebarItems = [];

        // List of navigation bar items.
        $scope.navigationBarItems = [];

        $scope.clickSidebarItem = function(item, i){
            console.log(item);
        };

        $scope.init = function () {

            for (var index = 0; index < 10; index++) {
                var sidebarItem = {};
                var navigationBarItem = {};

                sidebarItem = {
                    enabled: false,
                    href: '#!personal-summary',
                    title: 'Item_' + index,
                    icon: 'glyphicon glyphicon-home'
                };

                navigationBarItem = {
                    enabled: false,
                    title: 'Navigation ' + index,
                    icon: 'glyphicon glyphicon-home'
                };

                $scope.sidebarItems.push(sidebarItem);
                $scope.navigationBarItems.push(navigationBarItem);
            }
        };
    }]);
