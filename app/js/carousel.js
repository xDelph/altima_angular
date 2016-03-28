'use strict';

angular.module('myApp.carousel', ['angular-carousel'])

.directive('carouselView', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'template/carousel.html',
		controller: 'CarouselCtrl',
		controllerAs: 'carouselCtrl'
    };
})

.controller('CarouselCtrl', ['$scope', function($scope) {
	this.images = [
		["http://fakeimg.pl/50x40/eee/c33/?retina=true",
		"http://fakeimg.pl/50x40/eee/693/?retina=true"],
		["http://fakeimg.pl/50x40/eee/e33/?retina=true",
		"http://fakeimg.pl/50x40/eee/c33/?retina=true"],
		["http://fakeimg.pl/50x40/eee/693/?retina=true",
		"http://fakeimg.pl/50x40/eee/e33/?retina=true"],
		["http://fakeimg.pl/50x40/eee/c33/?retina=true",
		"http://fakeimg.pl/50x40/eee/693/?retina=true"],
		["http://fakeimg.pl/50x40/eee/e33/?retina=true"]
	];
}]);