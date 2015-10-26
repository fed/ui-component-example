module.exports = function () {
  return {
    all: {
      src: ['src/**/*.mustache', 'page/**/*.mustache'],
      dest: 'page/template.js',
      options: {
        binderName: 'amd'
      }
    }
  };
};
