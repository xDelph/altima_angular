'use strict';

angular.module('myApp.newsletter', [])

.directive('newsletterView', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'template/newsletter.html',
		controller: 'NewsletterCtrl',
		controllerAs: 'newsletterCtrl'
    };
})

.controller('NewsletterCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	var that = this;

	this.newsletter = {};
	this.send = false;
	this.show = true;

	$rootScope.$on('showHomeView', function (event, data) {
		that.show = data;
	});

	this.submit = function() {
		this.newsletter = {};
		$scope.subscribeForm.$setPristine();

		this.send = true;
	};
}]);