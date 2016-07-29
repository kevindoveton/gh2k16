/*===========   Home    ===========*/
// TODO:
// Load Background Image
angular.module('starter.controllers').controller('HomeCtrl', function($ionicPlatform,$scope, $rootScope, $state, dataService, $localstorage, $window, $cordovaGoogleAnalytics) {
	$scope.todayReading = "\b"; // blank line before data loads

	dataService.async().then(function(d) {
		$scope.data = d;
		$scope.todayReading = $scope.data.todayReading[0].bibleReading;
	});

	$rootScope.$on('todaysReadingQuickAction', function(event, mass) {
		todaysReading.async().then(function(d) {
			$scope.data = d;
			$scope.todayReading = $scope.data.todayReading[0].bibleReading;
		});

	 	$state.go('app.reading', {
	 		id: 0
	 	});
	 });

	// Tracking
	if (typeof analytics !== 'undefined') {
		analytics.trackView('Home')
	}


})
