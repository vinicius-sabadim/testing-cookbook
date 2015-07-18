angular
	.module('cookbook')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/emcees/:id', {
				controller: 'EmceesCtrl'
			})
			.when('/home', {
				templateUrl: 'home.html',
				controller: 'HomeCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);