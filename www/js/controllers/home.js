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

	// parkingService.async.then(function(d) {
	// 	// $scope.data = d;
	// 	// $scope.apply;
	// 	// console.log(d);
	// });
	// console.log(parkingService.async());

	

	// var promise = $http.get('http://clients.kdoveton.com/govhack?q=http://www.adelaidecitycouncil.com/whats-on/event/alpine-winter-village-1', function(data) {
	// 		}).then(function (response)
	// 		{
	// 			var $html = $($.parseHTML(response.data));
	// 			// console.log()
	// 			$html.find("section.venue").each(function() {
	// 				var $this = $(this);
	// 				console.log($this.find("span.val").text());
	// 			});
	// 		});

})
