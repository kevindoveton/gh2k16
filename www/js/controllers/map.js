angular.module('starter.controllers').controller('MapCtrl', function($ionicPlatform,$scope, $rootScope, $state, dataService, parkingService, $localstorage, $stateParams) {

	
	// dataService.async().then(function(d) {
	// 	$scope.data = d[$stateParams.id];
		
	// 	var date = new Date($scope.data.date);
	// 	$scope.date = (date);


	// });

	// weatherService.async().then(function(d) {
	// 	console.log($scope.data);
	// 	var weatherPrecis = "Weather will be available 7 days before the event.";
	// 	var weatherTemp = "";
	// 	d.forEach( function (arrayItem)
	// 	{
	// 		var weatherDate = arrayItem['date'].split("T")[0];
	// 		var eventDate = $scope.data['date'].split("T")[0];

	// 			if (weatherDate === eventDate)
	// 			{
	// 				weatherPrecis = arrayItem['precis'];
	// 				weatherTemp = arrayItem['maxTemp'];
	// 			}
	// 	});
	// 	$scope.weatherPrecis = weatherPrecis;
	// 	$scope.weatherTemp = weatherTemp;
	// });

	var items = [];
	var urls = [
		'http://opendata.adelaidecitycouncil.com/upark/UPark%20Space%20Availability%20by%20Carpark%20-%20Central%20Market.xml',
		'http://opendata.adelaidecitycouncil.com/upark/UPark%20Space%20Availability%20by%20Carpark%20-%20Frome.xml',
		'http://opendata.adelaidecitycouncil.com/upark/UPark%20Space%20Availability%20by%20Carpark%20-%20Gawler%20Place.xml',
		'http://opendata.adelaidecitycouncil.com/upark/UPark%20Space%20Availability%20by%20Carpark%20-%20Grote%20Street.xml',
		'http://opendata.adelaidecitycouncil.com/upark/UPark%20Space%20Availability%20by%20Carpark%20-%20Light%20Square.xml',
		'http://opendata.adelaidecitycouncil.com/upark/UPark%20Space%20Availability%20by%20Carpark%20-%20Pirie-Flinders.xml',
		'http://opendata.adelaidecitycouncil.com/upark/UPark%20Space%20Availability%20by%20Carpark%20-%20Rundle%20Street.xml',
		'http://opendata.adelaidecitycouncil.com/upark/UPark%20Space%20Availability%20by%20Carpark%20-%20Topham%20Mall.xml',
		'http://opendata.adelaidecitycouncil.com/upark/UPark%20Space%20Availability%20by%20Carpark%20-%20Wyatt%20Street.xml'
	];
	for (var i = 0; i < urls.length; i++)
	{

		parkingService.async(urls[i]).then(function(d) {
		// 	// $scope.data = d;
		// // 	// $scope.apply;
			items.push(d);
		});
	}
	
	$scope.items = items;
	
	

	// console.log($stateParams.id);


})
