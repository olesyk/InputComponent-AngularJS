InputFieldController.$inject = ['$scope'];

function InputFieldController($scope) {
  var self = this;
  this.$onInit = function () {
    this.model.$render = () => {
      this.value = this.model.$viewValue;
    }
  }

  this.onChange = function () {
    if (this.value == "") {
      this.hasError = true;
      this.model.$setValidity("required", false);
    } else {
      this.hasError = false;
      this.model.$setValidity("required", true);
    }
    this.model.$setViewValue(this.value);
  }
}

function inputFieldComponent() {
  return {
    templateUrl: 'inputField.html',
    controller: InputFieldController,
    require: {
      model: "ngModel"
    },
    bindings: {
      id: "@",
      requiredWarning: "&",
      type: '@'
    }
  }
}

angular.module('InputApp')
  .component('inputField', inputFieldComponent());