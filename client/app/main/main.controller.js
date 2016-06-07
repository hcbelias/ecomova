'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, uiGmapGoogleMapApi) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    this.uiGmapGoogleMapApi = uiGmapGoogleMapApi;
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });

    this.uiGmapGoogleMapApi.then(function(maps) {
      debugger;
    });
  }
}

angular.module('ecomovaApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
