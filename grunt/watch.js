module.exports = function () {
	return {
		files: [
			'model/*.json',
			'src/{,**/}*.{mustache,css,sass,scss,js}',
			'test/{,**/}*.js',
			'page/{,**/}*.{html,css,js}'
		],
		options: {
			livereload: true
		},
		tasks: ['build']
	};
};
