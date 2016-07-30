/*===========   Reading Service    ===========*/
angular.module('starter').factory('dataService', function($http, $localstorage)
{
	//TODO: Cache - just for this session.
	var dataService = {
		async: function() {
			var url = "http://www.adelaidecitycouncil.com/Ajax/whats_on_rss_feed";
			var promise = $http.get(url, {cache: true}).then(function (response)
			{
				console.log(response);
				return response.data;
			});
			return promise;
		}
	};

	return dataService;
})
