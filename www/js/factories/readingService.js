/*===========   Reading Service    ===========*/
angular.module('starter').factory('dataService', function($http, $localstorage)
{
	//TODO: Cache - just for this session.
	
	var dataService = {

		async: function() {
			var items = [];
			
			var promise = $http.get('https://www.familycentre.org.au/cfcapp/whatsOn.xml').then(function (response)
			{
				var $xml = $($.parseXML(response.data));
				// console.log($xml);
				$xml.find("item").each(function() {
					var $this = $(this),
			        	item = {
							title: $this.find("image").find("title").text(),
							description: $this.find("description").text(),
							link: $($this.find("link")[0]).text(),
							date: $this.find("date").text(),
							imageUrl: $this.find("image").find("url").text(),
							category: $this.find("category").text(),
						}
					items.push(item);
					// console.log(item);
				});
				// console.log(items);
				return items;
			});
			
			// console.log(promise);
			return promise;
			}
		};

	return dataService;
	
})

angular.module('starter').factory('weatherService', function($http, $localstorage)
{
	//TODO: Cache - just for this session.
	
	var weatherService = {
		
		async: function() {
			var item = {};
			var promise = $http.get('https://www.familycentre.org.au/cfcapp/?q=ftp://ftp.bom.gov.au/anon/gen/fwo/IDS10034.xml').then(function (response)
			{
				// var $xml = $($.parseXML(response.data));
			
				// $xml.find("area[aac='SA_PT001']").each(function() {
				// 	var $this = $(this);
					
				// 	$this.find("forecast-period").each(function() {
	   // 		     		var $this = $(this);
				// 		console.log($this.find("start-time-local").text())
	   // 		     		item = {
				// 			date: $this.find("start-time-local").text(),
				// 			precis: $this.find("precis").text(), 
				// 			airMax: $this.find("air_temperature_maximum").text(),
				// 		}
				// 		console.log(item);
				// 	});
					var x2js = new X2JS();
					console.log(x2js.xml_str2json(response.data));
					
				});
				// console.log(items)
				
				return item;
			}
			
			// console.log(promise);
			// return promise;
			};
			return weatherService;

	
	
})
