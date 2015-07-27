angular
	.module('cookbook')
	.filter('decimalAdjust', function() {
		return function(type, value, exp) {
			if (typeof exp === 'undefined' || +exp === 0) {
				return Math[type](value);
			}
			value = +value;
			exp = +exp;
			// If the value is not a number or the exp is not an integer...
			if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
				return NaN;
			}
			// Shift
			value = value.toString().split('e');
			value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
			// Shift back
			value = value.toString().split('e');
			return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
		};
	})
	.filter('secondsToTime', function() {
		return function(value) {
			var seconds = Math.floor(value % 60).toString();
			var minutes = Math.floor(value / 60 % 60).toString();
			var hours = Math.floor(value / 60 / 60 % 24).toString();

			function pad(t) {
				if (t && t.length < 2) {
					return '0' + t;
				}
				return t;
			}
			return pad(hours > 0 ? hours.concat(':') : '').concat(pad(minutes), ':', pad(seconds));
		};
	});