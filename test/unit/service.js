describe('service emcees', function() {
	var emcees;

	beforeEach(module('cookbook'));

	beforeEach(inject(function($injector) {
		emcees = $injector.get('emcees');
	}));

	it('should have a method defined', function() {
		expect(emcees.getUKEmcees).toBeDefined();
	});

});