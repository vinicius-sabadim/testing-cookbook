describe('Routes using ui-router', function() {
	var state;
	beforeEach(module('cookbook'));
	beforeEach(inject(function($templateCache, $rootScope, $state) {
		$templateCache.put('home.html', 'Some template content');
		$rootScope.$apply();
		state = $state;
	}));
	it('state controller should be mapped to HomeCtrl', function() {
		expect(state.current.controller).toEqual('HomeCtrl');
	});
	it('state templateUrl should be home.html', function() {
		expect(state.current.templateUrl).toEqual('home.html');
	});
});