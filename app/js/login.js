'use strict';

angular.module('myApp.login', [])

.directive('loginView', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'template/login.html',
		controller: 'LoginCtrl',
		controllerAs: 'loginCtrl'
    };
})

.controller('LoginCtrl', ['$scope', function($scope) {
	this.user = {};
	this.authentified = false;

	this.submit = function() {
		this.authentified = true;
	};

	this.logout = function () {
		this.user = {};
		this.authentified = false;
		
		$scope.loginForm.$setPristine();
	}
}]);