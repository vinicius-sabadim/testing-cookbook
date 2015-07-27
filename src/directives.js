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
	.directive('writers', function($window) {
		return {
			restrict: 'E',
			link: function(scope, element) {
				element.text('Graffiti artist: ' + scope.artist);

				function onResize(e) {
					scope.windowWidth = $window.innerWidth;
					scope.$digest();
				}

				angular.element($window).bind('resize', onResize);
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
	.directive('deejay', function($window) {
		return {
			restrict: 'E',
			template: '<div ng-show="showBooth" class="deejay-booth" ng-class="{popup: isPopup === true}"><h2 id="deejay_name">{{deejay.name}}</h2><p class="deejay-style">{{deejay.style}}</p><button class="hide-btn" ng-click="hideBooth()">Hide Booth</button></div>',
			link: function(scope) {
				scope.isPopup = $window.name.search(/popup/) >= 0;
				scope.showBooth = true;
				scope.hideBooth = function() {
					scope.showBooth = false;
				};
			}
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
	})
	.directive('jwplayer', function(jwplayer) {
		return {
			restrict: 'EA',
			link: function(scope, element) {
				scope.ready = false;
				jwplayer()
					.onReady(scope.readyHandler);
				scope.readyHandler = function() {
					scope.ready = true;
				}
			}
		};
	})
	.directive('stopWatch', function(secondsToTimeFilter) {
		return {
			require: 'ngModel',
			link: function(scope) {
				var timerInterval;
				var timerOffset;
				scope.timer = {
					current: 0,
					running: false
				};
				scope.start = function() {
					timerOffset = Date.now();
					timerInterval = setInterval(scope.update, 10);
				};
				scope.update = function() {
					scope.timer.current += scope.delta();
					scope.$digest();
				};
				scope.stop = function() {
					clearInterval(timerInterval);
				};
				scope.delta = function() {
					var now = Date.now();
					var delta = now - timerOffset;
					timerOffset = now;
					return delta;
				};
				// Listeners
				scope.onStartTimer = function() {
					scope.timer.running = !scope.timer.running;
					if (scope.timer.running) {
						scope.start();
					} else {
						scope.stop();
					}
				};
				scope.onResetTimer = function() {
					scope.timer.current = 0;
				};
			}
		};
	});