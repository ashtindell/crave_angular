'use strict';

/**
 * @ngdoc function
 * @name craveAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the craveAngularApp
 */
angular.module('craveAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });