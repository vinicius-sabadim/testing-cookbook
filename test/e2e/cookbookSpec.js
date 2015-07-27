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

	it('should navigate to emcees page on click of the load button', function() {
		var button = element(by.buttonText('load'));
		button.click();
		expect(browser.getLocationAbsUrl()).toContain('/emcees');
	});

	it('should redirect to home page if an unknown url is provided', function() {
		browser.get('http://0.0.0.0:8000/#/dummy');
		expect(browser.getLocationAbsUrl()).toContain('/home');
	});

	describe('Página inicial', function() {

		describe('favourite rapper', function() {

			it('should bind to input', function() {
				var emceeInput = element(by.model('emcee'));
				var emceeOutput = element(by.binding('emcee'));
				expect(emceeOutput.getText()).toBe('Kool G Rap');
				emceeInput.clear();
				emceeInput.sendKeys('Aesop Rock');
				expect(emceeOutput.getText()).toBe('Aesop Rock');
			});
		});

		describe('deejay directive', function() {

			it('should show content on page load', function() {
				var deejayBooth = $('[ng-show=showBooth].deejay-booth');
				expect(deejayBooth.isDisplayed()).toBeTruthy();
			});

			it('should hide content on button click', function() {
				var deejayBooth = $('[ng-show=showBooth].deejay-booth');
				$('.hide-btn').click();
				expect(deejayBooth.isDisplayed()).toBeFalsy();
			});
		});

		describe('filter on user event', function() {

			it('should display the correct decimal value', function() {
				var button = element(by.buttonText('Filter'));
				var decimalText = element(by.model('decimal'));
				decimalText.clear();
				decimalText.sendKeys('55.55');
				button.click();
				expect(decimalText.getAttribute('value')).toBe('55.6');
			});

		});

		describe('filter on event based', function() {

			it('should display the correct time format', function() {
				var button = element(by.partialButtonText('St'));
				var timeText = element(by.binding('timer.current'));
				button.click();
				button.click();
				expect(timeText.getText()).toMatch(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/);
			});
		});

	});
});