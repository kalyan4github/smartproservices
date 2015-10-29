angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$state) {
    $scope.needCameraForm= function () {
        $state.go('tab.needcameraform');
    }
})

.controller('AboutusCtrl', function($scope) {
})

.controller('CallCtrl', function($scope) {
	$scope.phoneno="0000000000";
});

