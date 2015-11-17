module.exports = function (gulp, plugins, config) {
  return function () {
    gulp.src(config.deploy + 'static/css/*.css')
      .pipe(plugins.postcss(config.processors))
      .pipe(gulp.dest(config.deploy + 'static/css/'))
      .pipe(plugins.browserSync.stream());
  }
}