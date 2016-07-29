/*===========   Podcast Video    ===========*/
angular.module('starter.controllers').controller('PodcastVideoPopover', function($scope, $stateParams,
dataService) {

	dataService.async().then(function(d) {
		$scope.data = d;
		$scope.podcast = $scope.data.podcasts[$stateParams.id];
	});
})podca