angular.module('starter.controllers').controller('EventCtrl', function($ionicPlatform,$scope, $rootScope, $state, dataService, $localstorage, $stateParams) {

	
	dataService.async().then(function(d) {
		$scope.data = d[$stateParams.id];

	});
	
	// var dateFormat = $scope.data.date ;

	// console.log($stateParams.id);
})
