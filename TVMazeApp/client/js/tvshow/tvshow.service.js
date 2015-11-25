angular.module('tvshow.service', [])
	.factory('tvshowResource', function ($resource) {
		return $resource('/api');
	});