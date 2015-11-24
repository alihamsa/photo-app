
app.controller("AuthCtrl", ["$scope", "Auth", function($scope, Auth) { 


  	$scope.createUser = function() {
  		  $scope.message = null;
        $scope.error = null;
        console.log("Hell Yeah!!")

			  Auth.$createUser({
			  email: $scope.email,
			  password: $scope.password
			}).then(function(userData) {
			   console.log("User " + userData.uid + " created successfully!");
			   console.log();
				}).catch(function(error) {

				});
        

		}; //end register

		$scope.logIn = function(){
    	Auth.$authWithPassword({
			  email: $scope.email,
			  password: $scope.password
			}).then(function(authData) {
				$location.url('/welcome');
				console.log("User: ", Auth.$authWithPassword)
			}).catch(function(error) {
			  console.error("Something's amiss:", error);
			});
    }; // login

    $scope.logOut = function(){
    	// console.log('logged out');
			$scope.auth.$unauth();
			$location.path( "/");
		}; // logout

}]);


