'use strict';

var en_I18N = {
  management: 'Management',
  myapp: 'My App',
  rides: 'Rides'
};

angular.module('ecomovaApp.I18N',[]);

angular.module('ecomovaApp', [
  'ecomovaApp.auth',
  'ecomovaApp.admin',
  'ecomovaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match',
  'ngMaterial',
  'ngMessages',
  'pascalprecht.translate',
  'ngMap'
])
  .config(function($urlRouterProvider, $locationProvider, $translateProvider, $mdThemingProvider) {

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    $translateProvider.translations('en', en_I18N);
    $translateProvider.preferredLanguage('en');

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('green')
      .warnPalette('red');



  });
