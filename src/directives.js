angular
	.module('cookbook')
	.directive('emcee', function() {
		return {
			restrict: 'E',
			link: function(scope, element) {
				scope.onClick = function() {
					element.text('Step up ' + scope.emcee + '!');
				};
			}
		};
	})
	.directive('writers', function() {
		return {
			restrict: 'E',
			link: function(scope, element) {
				element.text('Graffiti artist: ' + scope.artist);
			}
		};
	})
	.directive('emcees', function() {
		return {
			restrict: 'E',
			templateUrl: 'src/view/emcees.html',
			link: function(scope, element) {
				scope.emcee = scope.emcees[0];
			}
		};
	})
	.directive('deejays', function() {
		return {
			restrict: 'E',
			templateUrl: 'src/view/deejays.html'
		};
	})
	.directive('breakers', function() {
		return {
			restrict: 'E',
			templateUrl: 'src/view/breakers.html',
			link: function(scope) {
				scope.onSubmit = function(event) {
					if (event.which === 13) {
						var input = event.target;
						scope.breakers.push({
							name: input.value
						});
					}
				}
			}
		};
	});