// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ionic-timepicker'])

.config(function($httpProvider, $sceProvider)
{
	$httpProvider.interceptors.push(function($rootScope){
		return {
			request: function(config) {
				$rootScope.$broadcast('loading:show')
			return config
			},

			response: function(response) {
				$rootScope.$broadcast('loading:hide')
			return response
			}
		}
	})
	$sceProvider.enabled(false);
})



.run(function($ionicPlatform, $rootScope, $ionicLoading, $window, QuickActionService, $cordovaGoogleAnalytics)
{
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}

		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
		// // 3D touch
		// QuickActionService.configure();

		// // Tracking
		// if (typeof analytics !== 'undefined') {
		// 	// get devices uuid
		// 	var uuid = device.uuid;
		// 	console.log(uuid);

		// 	analytics.debugMode();
		// 	analytics.startTrackerWithId('UA-61041772-3');
		// 	analytics.setUserId(uuid);
		// }

	});

	//Loading indicators and callbacks
	$rootScope.$on('loading:show', function() {
		$ionicLoading.show({
			template: '<ion-spinner></ion-spinner>'
		});
		// $ionicLoading.show({template:'hey'});
	})

	$rootScope.$on('loading:hide', function() {
		$ionicLoading.hide();
	})
})



/*===========   Routes    ===========*/
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})

	.state('app.event', {
		url: '/event/:id',
		views: {
			'menuContent': {
				templateUrl: 'templates/event.html',
				controller: 'EventCtrl'
			}
		}
	})

	.state('app.categories', {
		url: '/categories/:name',
		views: {
			'menuContent': {
				templateUrl: 'templates/categories.html',
				controller: 'CategoriesCtrl'
			}
		}
	})
	
	.state('app.search', {
		url: '/search/:name',
		views: {
			'menuContent': {
				templateUrl: 'templates/search.html',
				controller: 'SearchCtrl'
			}
		}
	})

	.state('app.home', {
		url: '/home',
		views: {
			'menuContent': {
				templateUrl: 'templates/home.html',
				controller: 'HomeCtrl'
			}
		}
	})

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');
});
