/*===========   Life Journal    ===========*/
angular.module('starter.controllers').controller('connectCtrl', function($scope, connectSettingsService) {
	// dataService.async().then(function(d) {
	// 	$scope.data = d;
	// 	$scope.readings = $scope.data.lifeJournal;
	// });
	if (typeof analytics !== 'undefined') {
		analytics.trackView('Connect')
	}

	// create/load settings
	$scope.settings = connectSettingsService.settings;

	$scope.ageList = [
		{
			text: '13 - 17',
			value: '0'
		},
		{
			text: '18 - 25',
			value: '1'
		},
		{
			text: '26 - 39',
			value: '2'
		},
		{
			text: '40 - 55',
			value: '3'
		},
		{
			text: '56 - 69',
			value: '4'
		},
		{
			text: '70+',
			value: '5'
		},
	]

	$scope.taskList = [
		{
			text: 'I received Christ today',
			value: '0'
		},
		{
			text: 'I need help',
			value: '1'
		},
		{
			text: 'I need prayer',
			value: '2'
		},
		{
			text: 'I want to connect',
			value: '3'
		},
		{
			text: 'I want to join a team',
			value: '4'
		},
		{
			text: 'Other (please provide details)',
			value: '5'
		}
	]

	$scope.ageChange = function(item) {
		$scope.settings['age'] = item.value;
		settingsService.save($scope.settings);
	};

})
