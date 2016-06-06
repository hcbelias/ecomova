'use strict';

angular.module('ecomovaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>',
        authenticate: true
      });
  });
