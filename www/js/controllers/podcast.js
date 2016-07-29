/*===========   Podcast    ===========*/
angular.module('starter.controllers').controller('PodcastCtrl', function($scope, $stateParams, $ionicModal,
dataService, settingsService) {
	$scope.settings = settingsService.settings;
	dataService.async().then(function(d) {
			$scope.data = d;
			$scope.podcasts = $scope.data.podcasts;
			$scope.podcastId = $stateParams.id;
			podcast = $scope.podcasts[$scope.podcastId];
			$scope.podcast = $scope.podcasts[$scope.podcastId];
	});

	// video
	$scope.playVideo = function() {
		// Play a video with callbacks
		var options = {
			successCallback: function() {
				console.log("Video was closed without error.");
			},
			errorCallback: function(errMsg) {
				console.log("Error! " + errMsg);
			}
		};

		window.plugins.streamingMedia.playVideo($scope.podcast.videoURL, options);
	};

	// Video HD
	$scope.playVideoHD = function() {
		// Play a video with callbacks
		var options = {
			successCallback: function() {
				console.log("Video was closed without error.");
			},
			errorCallback: function(errMsg) {
				console.log("Error! " + errMsg);
			}
		};

		window.plugins.streamingMedia.playVideo($scope.podcast.hdURL, options);
	};

	// Audio
	$scope.playAudio = function() {
		// Play a audio with callbacks
		var options = {
			successCallback: function() {
				console.log("Video was closed without error.");
			},
			errorCallback: function(errMsg) {
				console.log("Error! " + errMsg);
			}
		};

		window.plugins.streamingMedia.playVideo($scope.podcast.audioURL, options);
	};

	if (typeof analytics !== 'undefined') {
		analytics.trackView('Podcast')
	}

	// Potentially may integrate this for a web app but not used
	/*
	$scope.showModal = function(templateURL) {
			$ionicModal.fromTemplateUrl(templateURL, {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.popover = modal;
				$scope.popover.show();
			});
		};
		// Close the video modal
	$scope.closeModal = function() {
		$scope.popover.hide();
		$scope.popover.remove();
	};*/
})
