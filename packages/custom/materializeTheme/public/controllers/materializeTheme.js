'use strict';

/* jshint -W098 */
angular.module('mean.materializeTheme').controller('MaterializeThemeController', ['$scope', 'Global', 'MaterializeTheme',
  function($scope, Global, MaterializeTheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'materializeTheme'
    };
  }
]);
