'use strict';

// Import css files.
require('./app.css');

// Module declaration.
var ngModule = angular.module('ngApp', ['ui.bootstrap', 'ui.router', 'pascalprecht.translate', 'ngSanitize']);
ngModule.config(function($urlRouterProvider, $translateProvider, $httpProvider, urlStateConstant){

    // API interceptor
    $httpProvider.interceptors.push('apiInterceptor');

    // Url router config.
    var urlStatePersonalInfo = urlStateConstant.personalInfo;
    var urlStatePersonalInfoSummary = urlStatePersonalInfo.summary;
    $urlRouterProvider.otherwise(function($injector, $location){
        var $state = $injector.get('$state');
        $state.go(urlStatePersonalInfoSummary.name);
    });

    // Translation config.
    $translateProvider.useStaticFilesLoader({
        prefix: './assets/dictionary/',
        suffix: '.json'
    });

    // en-US is default selection.
    $translateProvider.use('en-US');

});

// Constants import.
require('./constants')(ngModule);

// Factories import.
require('./factories')(ngModule);

// Services import.
require('./services')(ngModule);

// Directive requirements.
require('./directives')(ngModule);

// Module requirements.
require('./modules')(ngModule);