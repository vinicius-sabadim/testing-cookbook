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
	.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
		$scope.loadEmcee = function(id) {
			$state.go('emcees');
		};

		$scope.showWuEmcee = function(emceeName) {
			$scope.$broadcast('showWuEmcee', emceeName);
		};
	}]);