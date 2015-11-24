app.controller('navController', ['$uibModal', function($uibModal){

  this.addPhotoModal = function(){
    $uibModal.open({
      templateUrl: '/partials/addPhoto.html',
      controller: 'addPhotoController as addPhotoCtrl'
    });
  };

}]);