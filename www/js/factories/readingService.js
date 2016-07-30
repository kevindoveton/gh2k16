/*===========   Reading Service    ===========*/
angular.module('starter').factory('dataService', function($http, $localstorage)
{
	//TODO: Cache - just for this session.
	
	var dataService = {
		
		async: function() {
			var items = [];
			var promise = $.get('../../whatsOn.xml', function(data) {
			}).then(function (response)
			{
				var $xml = $(response);
				$xml.find("item").each(function() {
					var $this = $(this),
			        	item = {
							title: $this.find("image").find("title").text(),
							description: $this.find("description").text(),
							link: $this.find("link").text(),
							date: $this.find("date").text(),
							imageUrl: $this.find("image").find("url").text(),
							category: $this.find("category").text(),
						}
					items.push(item);
				});
				return items;
			});
			
			console.log(promise);
			return promise;
			}
		};

	return dataService;
	
})

angular.module('starter').factory('weatherService', function($http, $localstorage)
{
	//TODO: Cache - just for this session.
	
	var dataService = {
		
		async: function() {
			var items = [];
			var promise = $http.get('http://clients.kdoveton.com/govhack/?q=ftp://ftp.bom.gov.au/anon/gen/fwo/IDS10034.xml', function(data) {
			}).then(function (response)
			{
				var $xml = $(response);
				$xml.find("item").each(function() {
					var $this = $(this),
			        	item = {
							date: $this.find("area").find("title").text(),
							description: $this.find("description").text(),
							link: $this.find("link").text(),
							date: $this.find("date").text(),
							imageUrl: $this.find("image").find("url").text(),
						}
					items.push(item);
				});
				return items;
			});
			
			// console.log(promise);
			return promise;
			}
		};

	return dataService;
	
})
