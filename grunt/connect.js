module.exports = function () {
	return {
		server: {
			options: {
				hostname: '*',
				port: process.env.PORT || '4567',
				base: '.'
			}
		},
		keepalive: {
			options: {
				hostname: '*',
				port: process.env.PORT || '0',
				base: '.',
				keepalive: true
			}
		}
	};
};
