/*===========   Home    ===========*/
// TODO:
// Load Background Image
angular.module('starter.controllers').controller('HomeCtrl', function($ionicPlatform, $http, $scope, $rootScope, $state, dataService, $localstorage, $window) { 
	dataService.async().then(function(d) {
		$scope.data = d;
		$scope.apply;
	});

	

	var promise = $http.get('http://clients.kdoveton.com/govhack?q=http://www.adelaidecitycouncil.com/whats-on/event/alpine-winter-village-1', function(data) {
			}).then(function (response)
			{
				var html = $.parseHTML(response.data);
				// console.log()
				var location = html.find("venue").text();
				// console.log(html);
			});

})
