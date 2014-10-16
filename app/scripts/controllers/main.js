'use strict';

/**
 * @ngdoc function
 * @name angularPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPocApp
 */

angular.module('angularPocApp')
    .controller('MainCtrl',function ($scope){
    $scope.cars = [
        'Audi',
        'Lexus',
        'Jaguar',
        'Benz',
        'BMW'
    ];
    $scope.todos = [
        'To Do Item No. 1',
        'To Do Item No. 2',
        'To Do Item No. 3',
        'To Do Item No. 4'
    ];
    $scope.addTodo = function(){
      //$scope.todos.push($scope.todo);
      //$scope.todo='';
      console.log('function addTodo called........................');
      $scope.todos.push($scope.todo);
    };
});
