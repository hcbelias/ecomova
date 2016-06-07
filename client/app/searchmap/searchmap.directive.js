'use strict';

angular.module('ecomovaApp')
  .directive('searchMap', function () {
    return {
      templateUrl: 'app/searchmap/searchmap.html',
      restrict: 'A',
      replace: true,
      link: function (scope, element, attrs) {
        debugger;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position){
            scope.$apply(function(){
              scope.position = position;
            });
          });
        }
      }
    };
  });
