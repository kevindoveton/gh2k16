/*===========   App Control    ===========*/
angular.module('starter.controllers').controller('AppCtrl', function($scope,
	$ionicModal, $timeout, dataService, $window) {


 $scope.submit = function() {
        if ($scope.searchText) {
          window.location = "#/app/search/"
          
        }
      };

})
