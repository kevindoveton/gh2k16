angular.module('starter').factory('notificationService', function($cordovaLocalNotification, $window, $ionicPlatform, $ionicPopup, $state)
{
	return {
		scheduleNotifications: function(value)
		{
			registerNotifications();
			var date = new Date(value * 1000);
			var notificationTime = new Date();
			notificationTime.setHours(date.getUTCHours());
			notificationTime.setMinutes(date.getUTCMinutes());

			console.log(notificationTime.getHours() + ':' + notificationTime.getMinutes());

			$cordovaLocalNotification.schedule({
				id: 1,
				//title: 'Life Journal',
				text: 'Don\'t forget your Life Journal reading today.',
				at: notificationTime,
				every: 'day'
			})
			.then(function (result) {
				console.log('Notifications Scheduled.')
			})

			cordova.plugins.notification.local.on("click", function(notification) {
				alert("clicked: " + notification.id);
				$state.go('/home')
			});
		},

		cancelNotifcations: function()
		{
			$cordovaLocalNotification.cancelAll().then(function (result) {
				console.log('All Nofications Cancelled')
			});
		}
	}

	function registerNotifications() {
		$ionicPlatform.ready(function() {
			// Check device version
			if(device.platform === "iOS") {
				/*cordova.plugins.notification.local.registerPermission(function (granted) {
					console.log(granted);
					if (granted == false) {
						window.plugin.notification.local.hasPermission(function (granted) {
							console.log(granted);
							if (granted == false) {
								$ionicPopup.alert({
									title: 'Notifications',
									template: 'You must enable notifications in settings'
								});
							}
						});
					}
				});*/
				cordova.plugins.notification.local.registerPermission(function (granted) {
					console.log('Permission has been granted: ' + granted);
				});
			}
		})
	}
})