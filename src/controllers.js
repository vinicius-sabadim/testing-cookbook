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
	.controller('HomeCtrl', ['$scope', '$state', '$filter', function($scope, $state, $filter) {
		$scope.UNKNOWN_NAME = 'Unknown emcee';

		$scope.loadEmcee = function(id) {
			$state.go('emcees');
		};

		$scope.showWuEmcee = function(emceeName) {
			$scope.$broadcast('showWuEmcee', emceeName);
		};

		$scope.onShowWuEmcee = function(e, emceeName) {
			if (!emceeName) {
				$scope.wuWho = $scope.UNKNOWN_NAME;
				return;
			}
			$scope.wuWho = emceeName;
		};

		$scope.doFilter = function() {
			$scope.decimal = $filter('decimalAdjust')('round', $scope.decimal, -1);
		}

		$scope.$on('showWuEmcee', $scope.onShowWuEmcee);
	}]);