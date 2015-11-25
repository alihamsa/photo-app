app.controller('editPhotoController', ['$uibModal', function($uibModal){

  this.editPhotoModal = function(photo){
    /**
     *I'm expecting this next assignment is creating editPhotoController.photo in the parent scope of the function, but it does not show in the DOM or ngInspector.
     *
     * Since the call site is in the HTML, I'm not sure where I would
     *
     * WHAT IS THIS?!?!?!?
     */
    this.photo = photo;


    console.log("this.photo", this.photo);
  	$uibModal.open({
  		templateUrl: '/partials/editPhoto.html',
      controller: "editPhotoController as editPhotoCtrl"
  	});
  };

  this.dismissPhotoModal = function(){
    $uibModalInstance.dismiss('dismiss');
  };


}]);