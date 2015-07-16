describe('directive emcee', function() {
	var scope, element;
	beforeEach(module('cookbook'));
	beforeEach(inject(function($rootScope, $compile) {
		rootScope = $rootScope;
		scope = $rootScope.$new();
		scope.emcee = 'Izzy Ice';
		element = angular.element('<emcee></emcee>');
		$compile(element)(scope);
		scope.$digest();
	}));

	it('should assign scope emcee to element text when the onClick handler is called ', function () {
		scope.onClick();
		expect(element.text()).toBe('Step up Izzy Ice!');
	});
});