module.exports = function(gulp, plugins, config){
  return function(){
    gulp.src([config.root + 'js/**/*.js',
              '!node_modules/**'])
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failAfterError());
  }
};