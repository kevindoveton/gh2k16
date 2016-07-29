// Podcast Menu Controller
angular.module('starter.controllers').controller('PodcastMenuCtrl', function($scope, dataService) {
	dataService.async().then(function(d) {
		$scope.data = d;
		$scope.podcasts = $scope.data.podcasts;
	});

	if (typeof analytics !== 'undefined') {
		analytics.trackView('PodcastList')
	}
})
// End Podcast Menu Controller
