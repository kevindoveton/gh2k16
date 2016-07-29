/*===========   Settings    ===========*/
angular.module('starter.controllers').controller('SettingsCtrl', function($scope, settingsService, notificationService, $ionicPlatform, $window) {
	$scope.settings = settingsService.settings;
	updateTimeString();
	// Media List
	$scope.mediaList = [
		{
			text: 'Audio',
			value: 'audio'
		}, {
			text: 'Video',
			value: 'video'
		},
		{
			text: 'Video (HD)',
			value: 'videoHD'
		}
	];
	$scope.mediaChange = function(item) {
		$scope.settings['mediaType'] = item.value;
		settingsService.save($scope.settings);
	};

	// Bible List
	$scope.bibleList = [{
		text: 'NIV',
		value: 'NIV'
	}, {
		text: 'KJV',
		value: 'KJV'
	}, {
		text: 'NLT',
		value: 'NLT'
	}, {
		text: 'MSG',
		value: 'MSG'
	}, {
		text: 'CEV',
		value: 'CEV'
	}];
	
	$scope.versionChange = function(item) {
		$scope.settings['bibleVersion'] = item.value;
		settingsService.save($scope.settings);
	};

	// WOJ Red Text
	$scope.redTextList = [{
		text: 'Yes',
		value: 'yes'
	}, {
		text: 'No',
		value: 'no'
	}];
	$scope.redTextChange = function(item) {
		$scope.settings['redText'] = item.value;
		settingsService.save($scope.settings);
	};

	// Font Size
	$scope.increaseFont = function(increase) {
		var currentSize = $scope.settings['fontSize'];
		if (increase) {
			if (currentSize !== 28) {
				currentSize++;
			}
			// wrap around
			else {
				currentSize = 15;
			}
		} else {
			if (currentSize !== 15) {
				currentSize--;
			}
			// wrap around
			else {
				currentSize = 28;
			}
		}
		$scope.settings['fontSize'] = currentSize;
		settingsService.save($scope.settings);
	};

	$scope.notificationList = [
		{
			text: 'On',
			value: 'on'
		},

		{
			text: 'Off',
			value: 'off'
		}
	]

	$scope.notificationChange = function(item) {
		settingsService.save($scope.settings);
		if (item.value == 'on') {
			notificationService.scheduleNotifications(settingsService.settings['notificationTime']);
		}

		if (item.value == 'off') {
			notificationService.cancelNotifcations();
		}
	}

	$scope.timePickerObject = {
		inputEpochTime: (settingsService.settings['notificationTime']),  //Optional
		step: 15,  //Optional
		format: 24,  //Optional
		titleLabel: 'Notification Time',  //Optional
		setLabel: 'Save',  //Optional
		closeLabel: 'Cancel',  //Optional
		setButtonType: 'button-positive',  //Optional
		closeButtonType: 'button-stable',  //Optional
		callback: function (val) {    //Mandatory
			timePickerCallback(val);
		}
	};


	function timePickerCallback(val) {
		if (typeof (val) === 'undefined') {
			console.log('Time not selected');
		}
		else {
			var selectedTime = new Date(val * 1000);
			$scope.settings['notificationTime'] = val;
			settingsService.save($scope.settings);
			$scope.timePickerObject.inputEpochTime = val
			console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
			updateTimeString();

			if (settingsService.settings['notification'] == 'on') {
				notificationService.cancelNotifcations;
				notificationService.scheduleNotifications(settingsService.settings['notificationTime']);
			}
		}
	}

	function updateTimeString() {
		function pad(n) {
			return n<10 ? '0'+n : n
		}

		notificationTimeDate = new Date(settingsService.settings['notificationTime']*1000);
		$scope.notificationTimeString = pad(notificationTimeDate.getUTCHours()) + ':' + pad(notificationTimeDate.getUTCMinutes());
	}

});
