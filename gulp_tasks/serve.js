module.exports = function(gulp, plugins, config){
  return function () {
    plugins.browserSync.init(config.browserSync);

    gulp.watch('src/js/**/*.js', ['js:copy']).on('change', plugins.browserSync.reload);
    gulp.watch("src/sass/**/*.scss", ['sass']);
    gulp.watch(config.markupFileType).on('change', plugins.browserSync.reload);
  }
};