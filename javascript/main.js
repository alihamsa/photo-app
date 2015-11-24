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
  }).otherwise({redirectTo: '/'});
}]);

app.controller("photoCtrl",
  ["$scope",
  "$firebaseArray", 'Auth',
  function($scope, $firebaseArray, Auth) {

  this.userAuthData = Auth.$getAuth();

  // Just like in the RequireJS version of Music History, make a reference
  var ref = new Firebase('https://photo-apps.firebaseio.com/users/' + this.userAuthData.uid + '/photos');

  // Instead of snapshot.val(), use this syntax to get songs
  $scope.photo = $firebaseArray(ref);

  $scope.editPhoto = function(photo){
    console.log('editPhoto run', photo);
  };

  }

]);