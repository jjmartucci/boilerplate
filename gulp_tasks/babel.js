module.exports = function(gulp, plugins, config){
  return function () {
    gulp.src(config.root + 'static/js/common.js')
      .pipe(plugins.babel())
      .pipe(plugins.uglifyAndRename())
      .pipe(gulp.dest(config.deploy + 'static/js'));
  }
};