var app = angular.module('photoApp', ['ngRoute', 'firebase', 'ui.bootstrap', 'ngTagsInput']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/register.html',
    controller: 'AuthCtrl'
  })
  .when('/welcome', {
    templateUrl: 'partials/welcome.html'
  })
  .when('/myProfile', {
    templateUrl: 'partials/myProfile.html',
    controller: 'photoCtrl'
  });
}]);

app.controller("photoCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

// Just like in the RequireJS version of Music History, make a reference
var ref = new Firebase("https://photo-apps.firebaseio.com/");

// Instead of snapshot.val(), use this syntax to get photos
console.log("$firebaseArray(ref)", $firebaseArray(ref));
$scope.photos = $firebaseArray(ref);

}]);