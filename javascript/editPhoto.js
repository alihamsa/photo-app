app.controller('editPhotoController', ['$uibModal', function($uibModal){

  this.editPhotoModal = function(photo){
    this.photo = photo;
  	$uibModal.open({
  		templateUrl: '/partials/editPhoto.html'
  	});
  };

  this.dismissPhotoModal = function(){
    $uibModalInstance.dismiss('dismiss');
  };


}]);