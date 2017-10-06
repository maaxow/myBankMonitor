define(function(require){
	require('angular');
	var Chart = require('chart');

	return angular.module('bm.controller.table', [])
	.controller('TableController', ['$scope', '$timeout', function($scope, $timeout) {

			$scope.query = {
				order : 'date',
				limit : 5,
				page : 1
			};

			$scope.money = [];

			$scope.totalEntries = 0;

			var success = function(money){
				$scope.money = money;
			};

			$scope.update = function(){
				console.log("update");
			};

			$scope.remove(id){
				console.log("remove", id)
			};

	}]);
});
