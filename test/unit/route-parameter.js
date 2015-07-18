describe('EmceesCtrl', function() {
	var $scope;
	beforeEach(module('cookbook'));
	beforeEach(inject(function($controller, $rootScope) {
		$scope = $rootScope.$new();
		$controller('EmceesCtrl', {
			$scope: $scope,
			$routeParams: {
				id: '1'
			}
		});
	}));
	it('should assign routeParams to scope', function() {
		expect($scope.id).toEqual('1');
	});
});