/*===========   Home    ===========*/
// TODO:
// Load Background Image
angular.module('starter.controllers').controller('HomeCtrl', function($ionicPlatform,$scope, $rootScope, $state, dataService, $localstorage, $window) { 
	dataService.async().then(function(d) {
		$scope.data = d;
		$scope.apply;
	});
})
