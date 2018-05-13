angular.module('InputApp', [])
  .controller('InputAppCtrl', InputAppCtrl);

InputAppCtrl.$inject = ['$scope'];

function InputAppCtrl($scope) {
  $scope.enter = "Sign in!";

  $scope.warning = function (mes) {
    return 'The field ' + mes + ' is required';
  }

  $scope.submitForm = function () {
    if ($scope.userForm.$valid) {
      alert('You did everything right! You are  guru!');
      this.user = {};
    }
  }
}