angular
	.module('cookbook')

// Usando angular-route
// .config(['$routeProvider', function($routeProvider) {
// 	$routeProvider
// 		.when('/emcees/:id', {
// 			controller: 'EmceesCtrl'
// 		})
// 		.when('/home', {
// 			templateUrl: 'home.html',
// 			controller: 'HomeCtrl'
// 		})
// 		.otherwise({
// 			redirectTo: '/'
// 		});
// }]);

// Usando ui-router
.config(['$urlRouterProvider', '$stateProvider',
	function($urlRouterProvider, $stateProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'home.html',
				controller: 'HomeCtrl'
			})
			.state('emcees', {
				url: '/emcees'
			});
		$urlRouterProvider
			.otherwise('/home');
	}
]);