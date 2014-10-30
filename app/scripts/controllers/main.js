'use strict';

/**
 * @ngdoc function
 * @name angularPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPocApp -- the basics
 */

angular.module('angularPocApp',[])
    .controller('MainCtrl',['$scope', function ($scope){
    $scope.todos = [
        'To Do Item No. 1',
        'To Do Item No. 2',
        'To Do Item No. 3'
    ];
        
      $scope.addTodo = function() {
        $scope.todos.push($scope.todo);
        console.log($scope.todos);
        $scope.todo='';
      };
    
}]);

