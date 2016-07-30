angular.module('starter.controllers').controller('CategoriesCtrl', function($ionicPlatform,$scope, $rootScope, $state, dataService, weatherService, $localstorage, $stateParams) {

	
	dataService.async().then(function(d) {
		$scope.data = d[$stateParams.id];

	});

	
})
