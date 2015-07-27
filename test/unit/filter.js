describe('filter decimalAdjust', function() {
	var decimalAdjustFilter;

	beforeEach(module('cookbook'));
	beforeEach(inject(function($filter) {
		decimalAdjustFilter = $filter('decimalAdjust');
	}));

	it('should adjust decimal correctly using round', function() {
		expect(decimalAdjustFilter('round', 55.55, -1)).toBe(55.6);
	});

});

describe('filter secondsToTime', function() {
	var secondsToTimeFilter;

	beforeEach(module('cookbook'));
	beforeEach(inject(function($filter) {
		secondsToTimeFilter = $filter('secondsToTime');
	}));

	it('should return a time formatted string (seconds)', function() {
		expect(secondsToTimeFilter(1)).toBe('00:01');
		expect(secondsToTimeFilter(103)).toBe('01:43');
		expect(secondsToTimeFilter(9504)).toBe('2:38:24');
	});

});