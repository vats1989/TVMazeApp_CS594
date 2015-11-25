angular.module('show.controller', [])
	.controller('ShowController', function ($scope, show) {
		$scope.show = show;
		/*
    $scope.getNumber = function(arr)  {
      return new Array(arr.length);
    };
		*/
		$scope.getGenre = function(arr){
				if(arr.length > 0)	{
						$scope.genre = "";
						for(var i=0;i<arr.length-1;i++)	{
							$scope.genre += arr[i] + " | ";
						}
						$scope.genre = $scope.genre + arr[arr.length-1];
						return true;
				}else{
						return false;
				}
		};
	});
