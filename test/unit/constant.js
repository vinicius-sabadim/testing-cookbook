describe('Testing constants', function() {
	var MESSAGES;

	beforeEach(module('cookbook'));
	beforeEach(inject(function(_MESSAGES_) {
		MESSAGES = _MESSAGES_;
	}));

	it('should have a MESSAGES constant object', function() {
		expect(MESSAGES).toBeDefined();
	});

	it('should have correct errors.http.ukemcees constant', function() {
		var message = 'There was an error loading emcees based in good old blighty.';
		expect(MESSAGES.errors.ukemcees).toBe(message);
	});

});