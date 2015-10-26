module.exports = function () {
  return {
    all: {
      src: 'src/**/*.mustache',
      dest: 'page/template.js',
      options: {
        binderName: 'amd'
      }
    }
  };
};
