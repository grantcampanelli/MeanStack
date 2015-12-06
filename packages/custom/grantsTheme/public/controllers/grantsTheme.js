'use strict';

/* jshint -W098 */
angular.module('mean.grantsTheme').controller('GrantsThemeController', ['$scope', 'Global', 'GrantsTheme',
  function($scope, Global, GrantsTheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'grantsTheme'
    };
  }
]);
