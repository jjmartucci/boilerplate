module.exports = function (gulp, plugins, config) {
  return function () {
    return gulp.src(config.webRoot + 'js/common.js')
      .pipe(plugins.webpack(config.webpack))
      .pipe(gulp.dest(config.deploy + 'js'));
      return stream;
  }
}