/*===========   Reading Service    ===========*/
angular.module('starter').factory('dataService', function($http, $localstorage)
{
	//TODO: Cache - just for this session.
	
	var dataService = {

		async: function() {
			var items = [];
			
			var promise = $http.get('https://www.familycentre.org.au/cfcapp/?q=https://www.familycentre.org.au/cfcapp/whatsOn.xml', {cache: true}).then(function (response)
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
			var items = [];
			
			var promise = $http.get('https://www.familycentre.org.au/cfcapp/?q=ftp://ftp.bom.gov.au/anon/gen/fwo/IDS10034.xml', {cache: true}).then(function (response)
			{
				
				var x2js = new X2JS();
				var data = JSON.parse(JSON.stringify(x2js.xml_str2json(response.data)));
				
				data.product.forecast.area[3]['forecast-period'].forEach( function (arrayItem)
				{
					var item = {
						date: arrayItem['_start-time-local'],
						maxTemp: arrayItem['element'][0]['__text'],
						precis: arrayItem['text'][0]['__text'],
					};
					// console.log(item);
					// console.log(data.product.forecast.area[3]['forecast-period']);
					items.push(item);
				});

				return items;
				// return (data.product.forecast.area[3]['forecast-period']);
				
			});
			return promise;
		}
			
	};
		
	return weatherService;

})

angular.module('starter').factory('parkingService', function($http, $localstorage)
{
	//TODO: Cache - just for this session.
	
	var parkingService = {
		
		async: function(url) {
			var items = [];
			// var url = 'http://opendata.adelaidecitycouncil.com/upark/UPark Space Availability by Carpark - Central Market.xml';
			var promise = $http.get(url).then(function (response)
			{
				var x2js = new X2JS();
				var data = JSON.parse(JSON.stringify(x2js.xml_str2json(response.data)));
				var d = data['Report']['table1']['CarparkName_Collection']['CarparkName'];
				var item = {
					carpark: d['_Textbox31'],
					spaces: d['_Textbox32'],
				};
				items.push(item);
				return item;

					
			});
			
			return promise;
			
		}
	
	};


	return parkingService;

})
