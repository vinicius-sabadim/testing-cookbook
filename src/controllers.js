angular
	.module('cookbook')
	.controller('MainCtrl', ['$scope', '$log', function($scope, $log) {
		// $log.log('message');
		// $log.warn('message');
		// $log.info('message');
		// $log.debug('message');
		// $log.error('message');

		$scope.emcee = 'Kool G Rap';
	}])
	.controller('EmceesCtrl', ['$scope', '$routeParams',
		function($scope, $routeParams) {
			$scope.id = $routeParams.id;
		}
	])
	.controller('HomeCtrl', ['$scope',
		function($scope) {
		}
	]);