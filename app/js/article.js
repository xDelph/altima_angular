'use strict';

angular.module('myApp.article', [])

.directive('articleView', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'template/article.html',
		controller: 'ArticleCtrl',
		controllerAs: 'articleCtrl'
    };
})

.controller('ArticleCtrl', ['$scope', '$http', '$sce', '$rootScope', '$location', function($scope, $http, $sce, $rootScope, $location) {
	var that = this;

	this.articles = {};
	this.fullscreen = false;
	this.fullscreenArticle = -1;

	$rootScope.$on('showFullscreenArticle', function(event, data) {
		if (data > that.articles.length - 1 || data < 0) $location.path('/home');
		else {
			that.fullscreen = true;
			that.fullscreenArticle = data;
		}
	});

	$rootScope.$on('showHomeView', function(event, data) {
		if (data) {
			that.fullscreen = false;
			that.fullscreenArticle = -1;
		}
	});

	$http.get('api/articles.json').success(function(data) {
		that.articles = data;
	});

	this.trustAsHtml = function(value) {
	  return $sce.trustAsHtml(value);
	};

	this.isFullscreen = function(index) {
		return this.fullscreen && this.fullscreenArticle == index;
	};

	this.isVisible = function(index) {
		return this.fullscreenArticle == index || this.fullscreen == false; 
	};
}]);