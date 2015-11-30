app.controller("AuthCtrl", ["$scope", "Auth", '$location', function($scope, Auth, $location) {

	$scope.createUser = function() {
		$scope.message = null;
		$scope.error = null;
		console.log("Hell Yeah!!");

		Auth.$createUser({
			email: $scope.email,
			password: $scope.password
		}).then(function(userData) {
			console.log("User " + userData.uid + " created successfully!");
		}).catch(function(error) {
			console.log(error);
		});
	}; //end register

	$scope.logIn = function(){
		Auth.$authWithPassword({
			email: $scope.email,
			password: $scope.password
		}).then(function(authData) {
			console.log("User: ", Auth.$authWithPassword);
			$location.url('/welcome');
		}).catch(function(error) {
			console.error("Something's amiss:", error);
		});
	}; // login

	$scope.logOut = function(){
		console.log('logged out');
		$scope.auth.$unauth();
		$location.path("/register");
	}; // logout

}]);