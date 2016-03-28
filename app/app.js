'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.header',
  'myApp.body',
  'myApp.footer'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
    	template: ' ',
    	controller: function($routeParams, $location, $rootScope) {
    		$rootScope.$broadcast('showHomeView', true);
    		$rootScope.$broadcast('showFullscreenArticle', -1);
    	}
    })
    .when('/actu/:id', {
    	template: ' ',
    	controller: function($routeParams, $location, $rootScope) {
    		$rootScope.$broadcast('showHomeView', false);
    		$rootScope.$broadcast('showFullscreenArticle', $routeParams.id);
    	}
    })
}]);

window.location.hash = "#/home";