exports.config = {
	baseUrl: 'http://localhost:8000',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};