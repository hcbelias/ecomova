'use strict';

angular.module('ecomovaApp')
  .directive('toolbar', function (Auth, $mdSidenav) {
    let auth = Auth,
      mdSidenav = $mdSidenav;
    return {
      templateUrl: 'app/toolbar/toolbar.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.showSearch = false;
        scope.isLoggedIn = auth.isLoggedIn;
        scope.mdSidenav = mdSidenav;
        scope.toggleSearch = function(element) {
          scope.showSearch = !scope.showSearch;
        };

        scope.toggleSidenav = function(menuId) {
          debugger;
          scope.mdSidenav(menuId).toggle();
        };


      }
    };
  });
