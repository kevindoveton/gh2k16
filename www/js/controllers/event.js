angular.module('starter.controllers').controller('EventCtrl', function($ionicPlatform,$scope, $rootScope, $state, dataService, weatherService, $localstorage, $stateParams) {

	
	dataService.async().then(function(d) {
		$scope.data = d[$stateParams.id];
		
		var date = new Date($scope.data.date);
		$scope.date = (date);


	});

	weatherService.async().then(function(d) {
		console.log($scope.data);
		var weatherPrecis = "No Weather Available";
		var weatherTemp = "";
		d.forEach( function (arrayItem)
		{
			var weatherDate = arrayItem['date'].split("T")[0];
			var eventDate = $scope.data['date'].split("T")[0];

				if (weatherDate === eventDate)
				{
					weatherPrecis = arrayItem['precis'];
					weatherTemp = arrayItem['maxTemp'];
				}
		});
		$scope.weatherPrecis = weatherPrecis;
		$scope.weatherTemp = weatherTemp;
	});
	
	

	// console.log($stateParams.id);


})
