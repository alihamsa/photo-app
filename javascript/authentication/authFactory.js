  angular.module("PhotoApp")

    .factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
      var ref = new Firebase("https://photo-apps.firebaseio.com/");
      return $firebaseAuth(ref);
    }
  ]);







