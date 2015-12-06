'use strict';

angular.module('mean.materializeTheme').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('materializeTheme example page', {
      url: '/materializeTheme/example',
      templateUrl: 'materializeTheme/views/index.html'
    });
  }
]);
