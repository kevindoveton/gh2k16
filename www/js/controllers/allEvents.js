/*===========   Podcast    ===========*/
angular.module('starter.controllers').controller('EventPageCtrl', function($scope, $stateParams, $ionicModal,
dataService, settingsService) {
	
})

$.get('./whatsOn.xml', function(data) {
	var $xml = $(data);

	$xml.find("item").each(function() {
		var $this = $(this),
        	item = {
				title: $this.find("image").find("title").text(),
				description: $this.find("description").text(),
				link: $this.find("link").text(),
				date: $this.find("date").text(),
				imageUrl: $this.find("image").find("url").text(),
			}
			console.log(item);
    });
});
