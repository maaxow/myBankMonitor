define(function(require){
	require("angular");

	return angular.module('cw.service.example', [])

	.service('$example', ['$http','$q', function($http, $q) {

		var _lastUpdate = new Date(),
		proccessing = false;
		var start = function(){
			processing = true;
		},
		stop = function(){
			processing = false;
		}
		notify = function(){
			start();
			_lastUpdate = new Date();
			stop();
		};

		return {
			getLastUpdate : function(){
				return _lastUpdate
			},
			isProccessing : function(){
				return proccessing;
			}
		}
	}]);
});
