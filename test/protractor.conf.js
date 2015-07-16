exports.config = {
	baseUrl: 'http://0.0.0.0:8000/',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['e2e/cookbookSpec.js'],
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};