'use strict';

angular.module('myApp.body', [
	'myApp.newsletter',
	'myApp.contact',
	'myApp.article',
	'myApp.carousel'
])

.directive('bodyView', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'template/body.html',
		controller: 'BodyCtrl'
    };
})

.controller('BodyCtrl', ['$scope', function($scope) {

}]);