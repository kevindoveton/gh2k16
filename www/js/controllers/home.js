/*===========   Home    ===========*/
// TODO:
// Load Background Image
angular.module('starter.controllers').controller('HomeCtrl', function($ionicPlatform, $http, $scope, $rootScope, $state, dataService, $localstorage, $window, weatherService, parkingService) { 
	dataService.async().then(function(d) {
		$scope.data = d;
		$scope.apply;
	});

	weatherService.async().then(function(d) {
		// $scope.data = d;
		// $scope.apply;
	});
	
	// console.log(parkingService.async());


})
