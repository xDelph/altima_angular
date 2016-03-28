'use strict';

angular.module('myApp.footer', [])

.directive('footerView', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'template/footer.html',
		controller: 'FooterCtrl'
    };
})

.controller('FooterCtrl', ['$scope', function($scope) {

}]);