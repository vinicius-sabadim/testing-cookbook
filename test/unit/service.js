describe('service emcees', function() {
	var emcees;

	beforeEach(module('cookbook'));

	beforeEach(inject(function($injector) {
		emcees = $injector.get('emcees');
	}));

	it('should have a method defined', function() {
		expect(emcees.getUKEmcees).toBeDefined();
	});

	describe('http get method', function() {
		var emcees;
		var $httpBackend;
		var url;

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

	describe('http post method', function() {
		var emcees;
		var $httpBackend;
		var url;

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

});