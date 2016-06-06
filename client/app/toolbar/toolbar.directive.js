'use strict';

angular.module('ecomovaApp')
  .directive('toolbar', function () {
    return {
      templateUrl: 'app/toolbar/toolbar.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.showSearch = false;
        scope.toggleSearch = function(element) {
          scope.showSearch = !scope.showSearch;
        };

        scope.toggleSidenav = function(menuId) {
  //        $mdSidenav(menuId).toggle();
        };


      }
    };
  });
