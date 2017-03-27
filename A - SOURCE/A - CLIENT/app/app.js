'use strict';

// Declare app level module which depends on views, and components
angular
    .module('api-documentation', [
        'ngRoute',
        'pascalprecht.translate',

        'navigation-bar',
        'sidebar',
        'personal-summary',
        'personal-technical-skill',
        'project-summary',

        'message-service',
        'api-setting-service',
        'general-info-service'
    ])
    .config(['$locationProvider', '$routeProvider', '$translateProvider',
        function ($locationProvider, $routeProvider, $translateProvider) {

            // Use static files loader.
            $translateProvider.useStaticFilesLoader({
                prefix: 'assets/data/language/locale-',
                suffix: '.json'
            });

            // Url hash configuration
            $locationProvider
                .hashPrefix('!');

            // Fallback url.
            $routeProvider.otherwise({redirectTo: '/personal-summary'});

        }])
    .controller('ApiDocumentationController', ['GeneralInfoService', '$scope',
        function (GeneralInfoService, $scope) {        // This function is called when directive has been initialized successfully.
        $scope.clickSidebarItem = function(item, i){
            console.log(item);
        };

        $scope.init = function () {

        };
    }]);
