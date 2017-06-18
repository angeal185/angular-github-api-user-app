(function() {
	var app = angular.module('myApp', []);
	var usr = '//api.github.com/users/angeal185';
	var url1 = '//api.github.com/users/angeal185/repos?page=1';
	var url2 = '//api.github.com/users/angeal185/repos?page=2';
	var url3 = '//api.github.com/users/angeal185/repos?page=3';
	app.controller('myCtrl', function($scope, $http) {
		$http.get(usr).then(function(response) {
			$scope.content = response.data;
			$scope.statuscode = response.status;
			$scope.statustext = response.statusText;
		});
		$http.get(url1).then(function(response) {
			$scope.content1 = response.data;
		});
		$http.get(url2).then(function(response) {
			$scope.content2 = response.data;
		});
		$http.get(url3).then(function(response) {
			$scope.content3 = response.data;
		});
	});
}).call(this);