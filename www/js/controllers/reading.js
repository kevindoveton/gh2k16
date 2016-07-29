/*===========   Reading Controller    ===========*/
// TODO:
// Force reload somehow
angular.module('starter.controllers').controller('ReadingCtrl', function($scope, $stateParams, $http,
$ionicLoading, dataService, settingsService) {
	dataService.async().then(function(d) {
		$scope.data = d;

		var readingId = $stateParams.id;
		$scope.reading = $scope.data.lifeJournal[readingId];

		//Request Reading
		var reading = $scope.reading.bibleReading;
		var date = $scope.reading.date;
		$scope.date = $scope.reading.date;
		var readingUrlParam = reading.replace(/ /g, "+");
		var redParams = "&redText=" + settingsService.settings['redText'];
		var versionParams = "&version=" + settingsService.settings['bibleVersion'];

		var readingData = "https://www.familycentre.org.au/cfcapp/search.php?ref=" + readingUrlParam + versionParams + redParams;
		console.log($scope.readingData);
		console.log(readingData);

		$http.get(readingData, {
			cache: true
		})


		.success(function(data, status, headers, config) {
			$scope.data = data;
			$scope.htmlData = data;
		})

		.error(function(data, status, headers, config) {
			//TODO: display error message
			console.log("error loading reading");
		});

		//Setup the font size
		$scope.fontSize = settingsService.settings['fontSize'];
	});

	if (typeof analytics !== 'undefined') {
		analytics.trackView('Reading')
	}
})
