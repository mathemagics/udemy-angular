
// MODULE
var angularApp = angular.module('myApp', []);

// CONTROLLERS
angularApp.controller('mainController', [
  '$scope',
  '$filter',
  function ($scope, $filter) {
    $scope.handle = '';
    $scope.characters = 5
    $scope.lowercasehandle = function() {
      return $filter('lowercase')($scope.handle)
    }
}]);
