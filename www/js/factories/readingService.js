/*===========   Reading Service    ===========*/
angular.module('starter').factory('dataService', function($http, $localstorage)
{
	//TODO: Cache - just for this session.
	var dataService = {
		async: function() {
			var url = "https://www.familycentre.org.au/cfcapp/cfciphoneapp.php";
			var promise = $http.get(url, {cache: true}).then(function (response)
			{
				console.log(response);
				return response.data;
			});
			return promise;
		}
	};

	// var todaysReading = {
	// 	async: function() {
	// 		var url = "http://rdec.com.au/familycentre/cfciphoneapp.php?numberPodcasts=0&&numberLJ=1";
	// 		var promise = $http.get(url, {
	// 			cache: true
	// 		})
	// 		.then(function (response)
	// 		{
	// 			console.log(response);
	// 			return response.data;
	// 		});
	// 		return promise;
	// 	}
	// };

	return dataService;
})
