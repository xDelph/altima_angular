'use strict';

angular.module('myApp.menu', [])

.directive('menuView', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'template/menu.html',
		controller: 'MenuCtrl',
		controllerAs: 'menuCtrl'
    };
})

.controller('MenuCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	var that = this;

	this.shapeContact = false;
	this.shapeAbout = false;
	this.shapeActu = false;
	this.shapeHome = true;

	$rootScope.$on('showFullscreenArticle', function(event, data) {
		that.resetShape();

		if (data < 0) that.shapeHome = true;
		else that.shapeActu = true;
	});

	this.resetShape = function() {
		that.shapeContact = false;
		that.shapeAbout = false;
		that.shapeActu = false;
		that.shapeHome = false;
	};
}]);