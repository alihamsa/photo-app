app.controller('navController', ['$uibModal', function($uibModal){
	console.log('navController hooked up');

  this.addPhotoModal = function(){
  	console.log('addPhotoModal run');
    $uibModal.open({
      templateUrl: '/partials/addPhoto.html',
      controller: 'addPhotoController as addPhotoCtrl'
    });
  };

}]);