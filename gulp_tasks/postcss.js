module.exports = function (gulp, plugins, config) {
  return function () {
    gulp.src(config.deploy + 'css/*.css')
      .pipe(plugins.postcss(config.processors))
      .pipe(gulp.dest(config.deploy + 'css/'))
      .pipe(plugins.browserSync.stream());
  }
}