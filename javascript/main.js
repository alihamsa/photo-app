var app = angular.module('photoApp', ['ngRoute', 'firebase']);

app.config(function ($routeProvider) {
  $routeProvider.
  when('/myProfile', {templateUrl: 'partials/myProfile.html', controller: 'photoCtrl'}).
  otherwise({redirectTo: '/index.html'});
  });

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://photo-apps.firebaseio.com/");
    return $firebaseAuth(ref);
  }
]);

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