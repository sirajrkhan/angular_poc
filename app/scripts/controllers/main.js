'use strict';

/**
 * @ngdoc function
 * @name angularPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPocApp
 */
angular.module('angularPocApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
