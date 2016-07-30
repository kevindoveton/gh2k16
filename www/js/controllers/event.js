angular.module('starter.controllers').controller('EventCtrl', function($ionicPlatform,$scope, $rootScope, $state, dataService, $localstorage, $stateParams) {
	console.log("hi");
	$scope.title = 'a';
	dataService.async().then(function(d) {
		$scope.data = d[$stateParams.id];

	});
	
	// console.log($stateParams.id);
})
