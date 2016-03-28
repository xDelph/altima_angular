'use strict';

angular.module('myApp.contact', [])

.directive('contactView', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'template/contact.html',
		controller: 'ContactCtrl',
		controllerAs: 'contactCtrl'
    };
})

.controller('ContactCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	var that = this;

	this.contact = {};
	this.send = false;
	this.show = true;

	$rootScope.$on('showHomeView', function (event, data) {
		that.show = data;
	});

	this.submit = function() {
		this.contact = {};
		$scope.contactForm.$setPristine();

		this.send = true;
	};
}]);