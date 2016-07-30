angular.module('starter.controllers').controller('CategoriesCtrl', function($ionicPlatform,$scope, $rootScope, $state, dataService, weatherService, $localstorage, $stateParams) {

	
	dataService.async().then(function(d) {
		var categoryData = [];
		for (var i = 0; i < d.length; i++) {
			if (d[i].category === $stateParams.name) {
				categoryData.push(d[i]);
			}
		}
		$scope.data = categoryData;
		$scope.categoryName = $stateParams.name;

	});

	


})
