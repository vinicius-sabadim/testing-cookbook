angular
	.module('cookbook')
	.service('emcees', function($http) {
		return {
			emcee: {},
			getUKEmcees: function() {
				return $http.get('/emcees/uk');
			},
			getUKEmcee: function(id) {
				var that = this;
				return $http.get('/emcees/uk/' + id)
					.then(function(response) {
						that.emcee = response;
					});
			},
			addUKEmcee: function(emcee) {
				return $http.post('/emcees/uk', emcee);
			}
		};
	});