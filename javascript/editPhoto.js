app.controller('editPhotoController', ['$scope', '$firebaseArray', '$routeParams', 'Auth', '$location', function($scope, $firebaseArray, $routeParams, Auth, $location){

  $scope.photoID = $routeParams.photoID;
  $scope.selectedPhoto = null;

  $scope.userAuthData = Auth.$getAuth();
  var userPhotoList = new Firebase('https://photo-apps.firebaseio.com/users/' + $scope.userAuthData.uid + '/photos');
  $scope.photoList = $firebaseArray(userPhotoList);
  console.log("$scope.photoList", $scope.photoList);

  $scope.photoList.$loaded()
  .then(function(){
    $scope.selectedPhoto = $scope.photoList.$getRecord($scope.photoID);
    console.log("$scope.selectedPhoto", $scope.selectedPhoto);
  }).catch(function(error){
    console.log("error", error);
  });

  $scope.updatePhoto = function(){
    $scope.photoList.$save($scope.selectedPhoto)
    .then(function(obj){
      console.log("Photo updated", obj);
    });
  };

  $scope.deletePhoto = function(){
    console.log('deletePhoto run');
    $scope.photoList.$remove($scope.selectedPhoto)
    .then(function(obj){
      console.log("Photo deleted", obj);
    });
    $location.url("/myProfile");
  };

}]);