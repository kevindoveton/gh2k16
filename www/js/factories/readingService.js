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
