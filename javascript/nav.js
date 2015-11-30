app.controller('navController', ['$uibModal', 'ModalService', function($uibModal, ModalService){

  this.addPhotoModal = function(){
    $uibModal.open({
      templateUrl: '/partials/addPhoto.html',
      controller: 'addPhotoController as addPhotoCtrl'
    });
  };

}]);