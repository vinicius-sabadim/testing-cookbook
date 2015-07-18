describe('How to test navigation and routing', function() {

	// describe('ngRoute', function() {

	// 	describe('Routes', function() {
	// 		var route;
	// 		beforeEach(module('cookbook'));
	// 		beforeEach(inject(function($templateCache, $rootScope, $location, $route) {
	// 			$templateCache.put('home.html', 'Some template content');
	// 			$location.path('/home');
	// 			$rootScope.$apply();
	// 			route = $route;
	// 		}));
	// 		it('route controller should be mapped to HomeCtrl', function() {
	// 			expect(route.current.controller).toEqual('HomeCtrl');
	// 		});
	// 		it('route templateUrl should be home.html', function() {
	// 			expect(route.current.templateUrl).toEqual('home.html');
	// 		});
	// 	});

	// 	describe('Route parameter', function() {
	// 		var $scope;
	// 		beforeEach(module('cookbook'));
	// 		beforeEach(inject(function($controller, $rootScope) {
	// 			$scope = $rootScope.$new();
	// 			$controller('EmceesCtrl', {
	// 				$scope: $scope,
	// 				$routeParams: {
	// 					id: '1'
	// 				}
	// 			});
	// 		}));
	// 		it('should assign routeParams to scope', function() {
	// 			expect($scope.id).toEqual('1');
	// 		});
	// 	});
	// });

	describe('ui-router', function() {
		var scope;
		var state;

		beforeEach(module('cookbook'));
		beforeEach(inject(function($templateCache, $rootScope, $state) {
			$templateCache.put('home.html', 'Some template content');
			state = $state;
		}));

		describe('Routes', function() {
			beforeEach(inject(function($rootScope) {
				$rootScope.$apply();
			}));

			it('state controller should be mapped to HomeCtrl', function() {
				expect(state.current.controller).toEqual('HomeCtrl');
			});
			it('state templateUrl should be home.html', function() {
				expect(state.current.templateUrl).toEqual('home.html');
			});
		});

		describe('Transition', function() {
			beforeEach(inject(function($rootScope) {
				scope = $rootScope.$new();
				$rootScope.$apply();
			}));

			it('default state should be home', function() {
				expect(state.current.name).toEqual('home');
			});
		});

	});

});