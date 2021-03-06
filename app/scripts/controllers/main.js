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
        'Responding to new RFPs',
        'Team - Status Update',
        'Interviews'
    ];
    
//     $scope.formSub = function(index) {
//         if (index){
//             console.log('Index is:'+index)
//             $scope.todos.splice(index, 1);    
//         } else {
//             $scope.todos.push($scope.todo);
//             console.log($scope.todos);
//             $scope.todo='';    
//         }
//     };
        
    $scope.addTodo = function() {   
        $scope.todos.push($scope.todo);
        console.log($scope.todos);
        $scope.todo='';
    };

    $scope.removeTodo = function(index){
        $scope.todos.splice(index, 1);
        console.log('Index Selected:' + index + ':::::: Revised Array :'+$scope.todos);
    };

}]);