module.exports = function(gulp, plugins, config){
  return function () {
    gulp.src(config.root + 'js/*.js')
      .pipe(plugins.babel())
      .pipe(plugins.uglifyAndRename())
      .pipe(gulp.dest(config.deploy + 'js'));
  }
};