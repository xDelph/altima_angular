'use strict';

angular.module('myApp.header', [
	'myApp.login',
	'myApp.menu'
])

.directive('headerView', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'template/header.html',
		controller: 'HeaderCtrl'
    };
})

.controller('HeaderCtrl', ['$scope', function($scope) {

}]);