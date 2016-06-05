'use strict';

angular.module('ecomovaApp.auth', [
  'ecomovaApp.constants',
  'ecomovaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
