angular.module('tvshow.controller', [])
	.directive('tvshowSearch', function() {
		return {
			restrict: 'EA',
			scope: {
				data: '='
			},
			templateUrl: '../views/tvshow.search.html'
		}
	})
	.controller('tvshowController', function ($scope, tvshowResource) {
		$scope.getTvShow = function () {
			tvshowResource.query({
				tvshow: $scope.tvshow,
			}, function (response) {
				$scope.fact = response;
			});	
		};

});