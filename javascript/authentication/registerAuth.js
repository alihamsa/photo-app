var app = angular.module("PhotoApp", [firebase]);




app.controller("AuthCtrl", ["$scope", "$firebaseAuth",

  function($scope, $firebaseObject, $firebaseAuth, $location) {
    var ref = new Firebase("https://photo-apps.firebaseio.com/");
    var $scope.auth = $firebaseAuth(ref);


  	$scope.$createUser = function() {
			  $scope.auth.$createUser({
			  email: $scope.email,
			  password: $scope.password
			}).then(function(userData) {
			   console.log("User " + userData.uid + " created successfully!");
			   console.log($scope.auth);


			  return $scope.auth.$authWithPassword({
			    email: $scope.email,
			    password: $scope.password
			  });
			}.then(function(authData) {
			  console.log("Logged in as:", authData.uid);
			}).catch(function(error) {
			  console.error("Error: ", error);
			});
		}; //end register





  } 
]); // controller end