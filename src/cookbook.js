angular
	.module('cookbook', [])
	.controller('MainCtrl', ['$scope', '$log', function($scope, $log) {
		// $log.log('message');
		// $log.warn('message');
		// $log.info('message');
		// $log.debug('message');
		// $log.error('message');

		$scope.emcee = 'Kool G Rap';
	}])
	.directive('emcee', function() {
		return {
			restrict: 'E',
			link: function(scope, element) {
				scope.onClick = function() {
					element.text('Step up ' + scope.emcee + '!');
				};
			}
		};
	})
	// .factory('Artists', ['imageStore',
	// 	function(imageStore) {
	// 		// API
	// 		return {
	// 			thumb: function(id) {
	// 				return imageStore.thumbnailUrl(id);
	// 			}
	// 		};
	// 	}
	// ]);