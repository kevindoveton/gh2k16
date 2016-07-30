/*===========   App Control    ===========*/
angular.module('starter.controllers').controller('AppCtrl', function($scope,
	$ionicModal, $timeout, dataService, $window) {


 $scope.submit = function() {
 	console.log($scope.searchText);
        if ($scope.searchText) {
          window.location = "#/app/search/";
          console.log('search');
        }
      };

})
