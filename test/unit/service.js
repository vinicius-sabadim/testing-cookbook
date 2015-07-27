describe('service emcees', function() {

	describe('api', function() {
		var emcees;

		beforeEach(module('cookbook'));

		beforeEach(inject(function($injector) {
			emcees = $injector.get('emcees');
		}));

		it('should have a method defined', function() {
			expect(emcees.getUKEmcees).toBeDefined();
		});
	});

	describe('http get method', function() {
		var emcees;
		var $httpBackend;
		var url;

		beforeEach(module('cookbook'));

		beforeEach(inject(function($injector) {
			emcees = $injector.get('emcees');
			$httpBackend = $injector.get('$httpBackend');
			url = '/emcees/uk';

			$httpBackend.when('GET', url).respond({
				data: ['kamanchi-sly', 'el-eye', 'rola']
			});
		}));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		it('should make a GET request', function() {
			$httpBackend.expectGET(url);
			emcees.getUKEmcees();
			$httpBackend.flush();
		});
	});

	describe('http get using spies', function() {
		var emcees;
		var httpMock;

		beforeEach(module('cookbook', function($provide) {
			httpMock = jasmine.createSpyObj('$http', ['get']);
			$provide.value('$http', httpMock);
		}));

		beforeEach(inject(function($injector) {
			emcees = $injector.get('emcees');
		}));

		it('should make a GET request', function() {
			emcees.getUKEmcees();
			expect(httpMock.get).toHaveBeenCalled();
			expect(httpMock.get).toHaveBeenCalledWith('/emcees/uk');
		});
	});

	describe('http post method', function() {
		var emcees;
		var $httpBackend;
		var url;

		beforeEach(module('cookbook'));

		beforeEach(inject(function($injector) {
			emcees = $injector.get('emcees');
			$httpBackend = $injector.get('$httpBackend');
			url = '/emcees/uk';
		}));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		it('should make a POST request', function() {
			var emcee = {
				'name': 'ids'
			};
			$httpBackend.expectPOST(url, emcee).respond(201, '');
			emcees.addUKEmcee(emcee);
			$httpBackend.flush();
		});
	});

	describe('http post using spies', function() {
		var emcees;
		var httpMock;
		var url;

		beforeEach(module('cookbook', function($provide) {
			httpMock = jasmine.createSpyObj('$http', ['post']);
			$provide.value('$http', httpMock);
		}));

		beforeEach(inject(function($injector) {
			emcees = $injector.get('emcees');
			url = '/emcees/uk';
		}));

		it('should make a POST request', function() {
			var emcee = {
				'name': 'alkaline'
			};
			emcees.addUKEmcee(emcee);
			expect(httpMock.post).toHaveBeenCalled();
		});

		it('should make a POST request with correct data', function() {
			var emcee = {
				'name': 'tlp'
			};
			emcees.addUKEmcee(emcee);
			expect(httpMock.post).toHaveBeenCalledWith(url, emcee);
		});
	});

	describe('testing service data using mock helpers', function() {
		var emcees;
		var httpMock;
		var $q;
		var $scope;

		beforeEach(module('cookbook', function($provide) {
			httpMock = jasmine.createSpyObj('$http', ['get']);
			$provide.value('$http', httpMock);
		}));

		beforeEach(inject(function($injector) {
			emcees = $injector.get('emcees');
			$q = $injector.get('$q');
			$scope = $injector.get('$rootScope').$new();
		}));

		it('should store the response from the HTTP GET request', function() {
			var defer = $q.defer();
			var emcee = jasmine.mockData.emcee();
			defer.resolve(emcee);
			httpMock.get.and.returnValue(defer.promise);
			emcees.getUKEmcee('1');
			$scope.$digest();
			expect(emcees.emcee.name).toBe(emcee.name);
		});
	});

});