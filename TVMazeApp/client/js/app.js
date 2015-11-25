angular.module('app',
	['ngRoute', 'ngResource', 'tvshow.controller', 'tvshow.service','show.controller','show.service'])
	.filter('trustHTML', function($sce) {
    	return function(text){
      		return $sce.trustAsHtml(text);
    	};
  	})
	.config(['$routeProvider', '$locationProvider',
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/tvshow.html',
					controller: 'tvshowController'
				})
				.when('/show/:id',	{
					templateUrl: 'views/show.html',
					controller: 'ShowController',
					resolve:	{
						show: function($route, ShowService)	{
							return ShowService.get({id:$route.current.params.id})
						}
					}
				})
				.otherwise({
					redirectTo: '/'
				});
			$locationProvider.html5Mode(true);
	}]);
