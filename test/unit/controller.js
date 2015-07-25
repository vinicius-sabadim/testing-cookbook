describe('MainCtrl', function() {
	var mainCtrl, $scope;

	beforeEach(module('cookbook'));
	beforeEach(inject(function($controller, $rootScope) {
		$scope = $rootScope.$new();
		$controller('MainCtrl', {
			$scope: $scope
		});
	}));

	it('should assign the correct rapper to scope', function() {
		expect($scope.emcee).toEqual('Kool G Rap');
	});

});

describe('HomeCtrl', function() {
	var mainCtrl, $scope;
	var wuTangClan = ['RZA', 'GZA', 'Method Man', 'Raekwon', 'Ghostface Killah', 'Inspectah Deck', 'U-God', 'Masta Killa', 'Cappadonna', 'ODB'];

	beforeEach(module('cookbook'));
	beforeEach(inject(function($controller, $rootScope) {
		$scope = $rootScope.$new();
		$controller('HomeCtrl', {
			$scope: $scope
		});

		spyOn($scope, '$broadcast');
	}));

	it('should call $broadcast', function() {
		$scope.showWuEmcee();
		expect($scope.$broadcast).toHaveBeenCalled();
	});

	it('should call $broadcast with correct event name and emcee', function() {
		$scope.showWuEmcee(wuTangClan[0]);
		expect($scope.$broadcast).toHaveBeenCalledWith('showWuEmcee', wuTangClan[0]);
	});

	it('should call $broadcast with specific argument', function() {
		$scope.showWuEmcee(wuTangClan[0]);
		expect($scope.$broadcast.calls.argsFor(0)).toContain(wuTangClan[0]);
	});

});