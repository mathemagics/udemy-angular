
// MODULE
var angularApp = angular.module('myApp', []);

// CONTROLLERS
angularApp.controller('mainController', [
  '$scope',
  '$timeout',
  function ($scope, $timeout) {
    $scope.name= 'Paul';
    $timeout(function() {
       $scope.name = 'Everyone';
    }, 3000)
}]);
