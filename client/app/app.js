'use strict';

angular.module('ecomovaApp', [
  'ecomovaApp.auth',
  'ecomovaApp.admin',
  'ecomovaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
