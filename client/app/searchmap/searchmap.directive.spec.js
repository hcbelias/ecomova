'use strict';

describe('Directive: searchmap', function () {

  // load the directive's module and view
  beforeEach(module('ecomovaApp'));
  beforeEach(module('app/searchmap/searchmap.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<searchmap></searchmap>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the searchmap directive');
  }));
});
