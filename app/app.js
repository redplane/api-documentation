'use strict';

// Declare app level module which depends on views, and components
angular
    .module('api-documentation', [
        'ngRoute',
        'pascalprecht.translate',

        // Components.
        'navigation-bar',
        'sidebar',
        'personal-summary',
        'personal-technical-skill',
        'project-summary',

        // Services.
        'message-service',
        'api-setting-service',
        'general-info-service',

        // 3rd libraries.
        'ngAnimate',
        'toastr'
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
        function (GeneralInfoService, $scope) {
    }]);
