describe('Routes', function() {
	var route;
	beforeEach(module('cookbook'));
	beforeEach(inject(function($templateCache, $rootScope, $location, $route) {
		$templateCache.put('home.html', 'Some template content');
		$location.path('/home');
		$rootScope.$apply();
		route = $route;
	}));
	it('route controller should be mapped to HomeCtrl', function() {
		expect(route.current.controller).toEqual('HomeCtrl');
	});
	it('route templateUrl should be home.html', function() {
		expect(route.current.templateUrl).toEqual('home.html');
	});
});