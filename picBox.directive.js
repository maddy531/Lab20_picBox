var app = angular.module('myModule');

app.directive('picBox', function() {
  return {
    restrict: 'E',
    templateUrl: 'picBox.html',
    replace: true
  }
});
