// describe('Página inicial', function() {

// 	describe('favourite rapper', function() {
// 		it('should bind to input', function() {
// 			browser.get('');
// 			var emceeInput = element(by.model('emcee'));
// 			var emceeOutput = element(by.binding('emcee'));
// 			expect(emceeOutput.getText()).toBe('Kool G Rap');
// 			emceeInput.clear();
// 			emceeInput.sendKeys('Aesop Rock');
// 			expect(emceeOutput.getText()).toBe('Aesop Rock');
// 		});
// 	});

// });

describe('Roteamento', function() {
	beforeEach(function() {
		browser.get('http://0.0.0.0:8000/');
	});
	it('should default to home page', function() {
		expect(browser.getLocationAbsUrl()).toContain('/home');
	});

	it('should show a load button on home page', function() {
		var button = element(by.buttonText('load'));
		expect(button.isPresent()).toBeTruthy();
	});
});