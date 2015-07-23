describe('directive emcee', function() {
	var scope, element;

	beforeEach(module('cookbook'));
	beforeEach(inject(function($rootScope, $compile) {
		rootScope = $rootScope;
		scope = $rootScope.$new();
		scope.emcee = 'Izzy Ice';
		element = angular.element('<emcee></emcee>');
		$compile(element)(scope);
		scope.$digest();
	}));

	it('should assign scope emcee to element text when the onClick handler is called ', function() {
		scope.onClick();
		expect(element.text()).toBe('Step up Izzy Ice!');
	});
});

describe('directive writers', function() {
	var scope;
	var element;
	var artist;

	beforeEach(module('cookbook'));
	beforeEach(function() {
		artist = 'Amara Por Dios';
	});
	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();

		element = angular.element('<writers></writers>');
		scope.artist = artist;
		$compile(element)(scope);
		scope.$digest();
	}));
	it('should display correct text in the DOM', function() {
		expect(element.text()).toBe('Graffiti artist: ' + artist);
	});
});

describe('directive emcees', function() {
	var scope;
	var element;
	var template = '<h1>{{emcees[0]}}</h1>';
	var emcees = ['Roxanne Shante', 'Mc Lyte'];
	var h2;

	beforeEach(module('cookbook'));
	beforeEach(inject(function($rootScope, $compile, $templateCache) {
		scope = $rootScope.$new();
		scope.emcees = emcees;

		$templateCache.put('src/view/emcees.html', template);

		element = angular.element('<emcees></emcees>');
		$compile(element)(scope);
		scope.$digest();
	}));

	it('should show the correct emcee', function() {
		var h1 = element.find('h1');
		expect(h1.text()).toBe(emcees[0]);
	});

});

describe('directive emcees', function() {
	var scope;
	var element;
	var template = '<h2>{{deejay.name}}</h2>';
	var deejay = {
		name: 'Shortee',
		style: 'turntablism'
	};
	var h2;

	beforeEach(module('cookbook'));
	beforeEach(inject(function($rootScope, $compile, $templateCache) {
		scope = $rootScope.$new();
		scope.deejay = deejay;

		$templateCache.put('src/view/deejays.html', template);

		element = angular.element('<deejays></deejays>');
		$compile(element)(scope);
		scope.$digest();
	}));

	it('should return an element using find()', function() {
		h2 = element.find('h2');
		expect(h2[0]).toBeDefined();
	});

	it('should display correct deejay data in the DOM', function () {
		h2 = element.find('h2');
		expect(h2.html()).toBe(deejay.name);
	});

});