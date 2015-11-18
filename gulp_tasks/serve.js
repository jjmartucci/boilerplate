module.exports = function(gulp, plugins, config){
  return function () {
    plugins.browserSync.init(config.browserSync);

    gulp.watch(config.root + 'js/**/*.js', ['js:copy']).on('change', plugins.browserSync.reload);
    gulp.watch(config.root + "sass/**/*.scss", ['sass']);
    gulp.watch(config.markupFileType).on('change', plugins.browserSync.reload);
  }
};