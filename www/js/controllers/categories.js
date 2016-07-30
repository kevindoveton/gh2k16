angular.module('starter.controllers').controller('CategoriesCtrl', function($ionicPlatform,$scope, $rootScope, $state, dataService, weatherService, $localstorage, $stateParams) {

	function merge_options(obj1,obj2){
    	var obj3 = {};
    	for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    	for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    	return obj3;
	}


	dataService.async().then(function(d) {
		var categoryData = [];
		for (var i = 0; i < d.length; i++) {
			if (d[i].category === $stateParams.name) {
				id = {id: i};
				
				var data = merge_options(d[i], id, data);

				categoryData.push(data);
			}
		}
		$scope.data = categoryData;
		$scope.categoryName = $stateParams.name;

	});

	


})
