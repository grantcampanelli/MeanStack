'use strict';

angular.module('mean.grantsTheme').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
       .state('example', {
         url: '/example',
         templateUrl: 'grantsTheme/views/index.html'
       })
       .state('rosters', {
         url: '/rosters',
         templateUrl: 'grantsTheme/views/rosters.html'
       });
  }
]);
