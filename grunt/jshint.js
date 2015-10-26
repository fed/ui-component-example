module.exports = function () {
	return {
		files: [
			'Gruntfile.js',
			'grunt/{,**/}*.js',
			'test/{,**/}*.js',
			'src/{,**/}*.js',
      'page/{,**/}*.js'
		],
		options: {
			jshintrc: 'grunt/conf/jshintrc.json'
		}
	};
};
