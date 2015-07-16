describe('Factory: artists', function() {
	var url;
	var Artists;
	beforeEach(module('cookbook'));
	beforeEach(module(function($provide) {
		$provide.value('imageStore', {
			thumbnailUrl: function(id) {
				url = '/thumbs/' + id;
			}
		});
	}));
	beforeEach(inject(function($injector) {
		Artists = $injector.get('Artists');
	}));
	it('return the correct artist thumbnailUrl', function() {
		Artists.thumb('1');
		expect(url).toBe('/thumbs/1');
	});
});