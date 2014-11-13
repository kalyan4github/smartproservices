angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('AboutusCtrl', function($scope) {
})

.controller('CallCtrl', function($scope) {
	$scope.phoneno="0000000000";
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
