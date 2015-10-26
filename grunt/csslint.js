module.exports = function () {
	return {
		options: {
			csslintrc: 'grunt/conf/csslintrc.json'
		},
		all: {
			src: [
				'src/*.css',
        'page/*.css'
			]
		}
	};
};
