app.controller('addPhotoController', ['$firebaseArray', function($firebaseArray){
	console.log('addPhotoController hooked up');

	var firebaseRef = new Firebase('https://photo-apps.firebaseio.com/');

	this.photoList = $firebaseArray(firebaseRef);

	this.newPhoto = {};

	this.addPhoto = function(){
		this.photoList.$add({
			title: this.newPhoto.title,
			album: this.newPhoto.album,
			photoURL: this.newPhoto.photoURL,
			description: this.newPhoto.description
		});
		this.newPhoto = {};
	};
}]);