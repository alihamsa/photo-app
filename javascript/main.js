var app = angular.module('photoApp', ['ngRoute', 'firebase']);

	app.config(function ($routeProvider) {
        $routeProvider.
            when('/myProfile', {templateUrl: 'partials/myProfile.html', controller: 'photoCtrl'}).
            otherwise({redirectTo: '/index.html'});
            
    });


 app.controller("photoCtrl", 
  ["$scope", 
   "$firebaseArray", 
  function($scope, $firebaseArray) {

  // Just like in the RequireJS version of Music History, make a reference
    var ref = new Firebase("https://photo-apps.firebaseio.com/");

  // Instead of snapshot.val(), use this syntax to get songs
    $scope.songs = $firebaseArray(ref);

  }
]);