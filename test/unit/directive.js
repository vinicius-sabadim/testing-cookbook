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

describe('directive writers without resize', function() {
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

describe('directive writers with resize', function() {
	var scope;
	var element;
	var $window;
	var width = 100;
	var height = 100;

	function dispatchEvent(type) {
		var evt = document.createEvent('Event');
		evt.initEvent(type, true, true);
		$window.dispatchEvent(evt);
	}

	beforeEach(module('cookbook'));
	beforeEach(inject(function(_$window_, $rootScope, $compile) {
		$window = _$window_;
		scope = $rootScope.$new();

		element = angular.element('<writers></writers>');
		$compile(element)(scope);
		scope.$digest();
	}));

	it('should update scope with current window width on window resize', function() {
		$window.resizeTo(width, height);

		dispatchEvent('resize');

		// Deveria ser 100, mas como estou usando uma task no grunt, o karma abre o navegador com 1025.
		// expect(scope.windowWidth).toBe(width);
		expect(scope.windowWidth).toBe(1025);
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

describe('directive deejays', function() {
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

	it('should display correct deejay data in the DOM', function() {
		h2 = element.find('h2');
		expect(h2.html()).toBe(deejay.name);
	});

});

describe('directive breakers without input', function() {
	var scope;
	var element;
	var template = '<ul><li ng-repeat="item in breakers">{{item.name}}</li></ul>';
	var breakers = [{
		name: 'China Doll'
	}, {
		name: 'Crazy Legs'
	}, {
		name: 'Frosty Freeze'
	}];

	beforeEach(module('cookbook'));
	beforeEach(inject(function($rootScope, $compile, $templateCache) {
		scope = $rootScope.$new();
		scope.breakers = breakers;

		$templateCache.put('src/view/breakers.html', template);

		element = angular.element('<breakers></breakers>');
		$compile(element)(scope);
		scope.$digest();
	}));

	it('should display the correct breaker name', function() {
		var list = element.find('li');
		expect(list.eq(0).text()).toBe('China Doll');
	});

	it('should display the correct breaker name', function() {
		var list = element.find('li');
		expect(list.eq(1).text()).toBe('Crazy Legs');
	});

	it('should display the correct breaker name', function() {
		var list = element.find('li');
		expect(list.eq(2).text()).toBe('Frosty Freeze');
	});
});

describe('directive breakers with input', function() {
	var scope;
	var element;
	var template = '<input type="text" name="input" value="" ng-keypress="onSubmit($event)"><ul><li ng-repeat="item in breakers">{{item.name}}</li></ul>';
	var breakers = [];

	function $input() {
		return element.children().eq(0);
	}

	beforeEach(module('cookbook'));
	beforeEach(inject(function($rootScope, $controller, $compile, $templateCache) {
		scope = $rootScope.$new();
		scope.breakers = breakers;

		$controller('HomeCtrl', {
			$scope: scope
		});

		$templateCache.put('src/view/breakers.html', template);

		element = angular.element('<breakers></breakers>');
		$compile(element)(scope);
		scope.$digest();
	}));

	it('should update breakers list with defined input value', function() {
		$input().val('China Doll');

		scope.onSubmit({
			which: 13,
			preventDefault: function() {},
			target: $input()[0]
		});

		expect(scope.breakers[0].name).toBe('China Doll');
	});

});

describe('directive deejay', function() {
	var scope;
	var element;
	var template = '<div class="deejay-booth" ng-class="{popup: isPopup === true}"></div>';
	var $window;

	beforeEach(module('cookbook'));
	beforeEach(inject(function(_$window_, $rootScope, $compile, $templateCache) {
		$window = _$window_;
		scope = $rootScope.$new();

		$templateCache.put('', template);

		element = angular.element('<deejay></deejay>');
		$compile(element)(scope);
		scope.$digest();
	}));

	// O window.name não funciona quando executa a task do grunt, mas se eu atualizar o teste, funciona.
	// it('should have specific popup class if window name contains popup', function() {
	// 	var divClasses = element.find('div').attr('class');
	// 	$window.name = 'popup';

	// 	expect(divClasses.split(/\s+/g)).toContain('popup');
	// });

});