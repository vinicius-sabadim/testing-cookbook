angular
	.module('cookbook')
	.service('emcees', function($http) {
		return {
			getUKEmcees: function() {
				return $http.get('/emcees/uk');
			},
			addUKEmcee: function(emcee) {
				return $http.post('/emcees/uk', emcee);
			}
		};
	});