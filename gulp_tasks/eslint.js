module.exports = function(gulp, plugins, config){
  return function(){
    gulp.src([config.root + 'static/js/**/*.js',
              '!node_modules/**',
              '!' + config.root + 'static/js/common.min.js'])
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failAfterError());
  }
};