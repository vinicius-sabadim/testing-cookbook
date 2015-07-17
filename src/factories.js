angular
	.module('cookbook')
	.factory('Artists', ['imageStore',
		function(imageStore) {
			return {
				thumb: function(id) {
					return imageStore.thumbnailUrl(id);
				}
			};
		}
	]).factory('deejays', function($rootScope, scratch) {
		return {
			originator: 'DJ Kool Herc',
			technique: scratch.technique()
		};
	})
	.factory('scratch', function($rootScope) {
		console.log('Called scratch!');
		return {
			technique: function() {
				return 'breakbeat';
			}
		};
	});