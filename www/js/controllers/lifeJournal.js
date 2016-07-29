/*===========   Life Journal    ===========*/
angular.module('starter.controllers').controller('LifeJournalCtrl', function($scope, dataService) {
	dataService.async().then(function(d) {
		$scope.data = d;
		$scope.readings = $scope.data.lifeJournal;
	});

	if (typeof analytics !== 'undefined') {
		analytics.trackView('LifeJournal')
	}
})
