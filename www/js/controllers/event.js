angular.module('starter.controllers').controller('EventCtrl', function($ionicPlatform,$scope, $rootScope, $state, dataService, weatherService, $localstorage, $stateParams) {

	
	dataService.async().then(function(d) {
		$scope.data = d[$stateParams.id];
		console.log($scope.data.date);
		var date = new Date($scope.data.date);
		$scope.date = (date.toDateString());


	});

	weatherService.async().then(function(d) {
		// $scope.data = d[$stateParams.id];
		$scope.weather = '';
	});
	
	

	// console.log($stateParams.id);


})
