app.controller('addPhotoController', ['$firebaseArray', 'Auth', '$uibModal', '$uibModalInstance', function($firebaseArray, Auth, $uibModal, $uibModalInstance){

	this.userAuthData = Auth.$getAuth();

	var userPhotoList = new Firebase('https://photo-apps.firebaseio.com/users/' + this.userAuthData.uid + '/photos');

	this.photoList = $firebaseArray(userPhotoList);

	this.newPhoto = {};

	this.addPhoto = function(){
		this.photoList.$add({
			title: this.newPhoto.title,
			album: this.newPhoto.album,
			photoURL: this.newPhoto.photoURL,
			description: this.newPhoto.description,
			tags: []
		});
		this.newPhoto = {};
		this.cancelAddPhoto();
	};

	this.cancelAddPhoto = function(){
		console.log('cancelAddPhoto');
		$uibModalInstance.dismiss('dismiss');
	};

}]);