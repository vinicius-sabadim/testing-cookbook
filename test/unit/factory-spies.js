describe('Service: deejays', function() {
	beforeEach(module('cookbook'));

	beforeEach(module(function($provide) {
		$provide.value('scratch', jasmine.createSpyObj('scratch', ['technique']));
	}));

	var deejays;
	beforeEach(inject(function($injector) {
		deejays = $injector.get('deejays');
	}));
	it('should return the correct originator', function() {
		expect(deejays.originator).toBe('DJ Kool Herc');
	});
});