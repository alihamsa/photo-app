app.controller('addPhotoController', ['$scope', '$firebaseArray', 'Auth', '$uibModal', '$uibModalInstance', function($scope, $firebaseArray, Auth, $uibModal, $uibModalInstance){

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
			tags: this.tags,
			dtTaken: this.dtTaken.getTime(),
			dtAdded: Date.now()
		});
		// this.newPhoto = {};
		this.dismissPhotoModal();
	};

	this.dismissPhotoModal = function(){
		$uibModalInstance.dismiss('dismiss');
	};






	this.today = function() {
		this.dtTaken = new Date();
	};
	this.today();

	$scope.open = function($event) {
		$scope.status.opened = true;
	};

	$scope.setDate = function(year, month, day) {
		this.dtTaken = new Date(year, month, day);
	};

	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];

	$scope.status = {
		opened: false
	};

	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	var afterTomorrow = new Date();
	afterTomorrow.setDate(tomorrow.getDate() + 2);
	$scope.events =
		[{
				date: tomorrow,
				status: 'full'
			},
			{
				date: afterTomorrow,
				status: 'partially'
			}];

	$scope.getDayClass = function(date, mode) {
		if (mode === 'day') {
			var dayToCheck = new Date(date).setHours(0,0,0,0);

			for (var i=0;i<$scope.events.length;i++){
				var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

				if (dayToCheck === currentDay) {
					return $scope.events[i].status;
				}
			}
		}

		return '';
	};








}]);