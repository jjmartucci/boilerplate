module.exports = function(gulp, plugins, config){
  return function(){
    gulp.src(config.root + 'static/sass/**/*.scss')
      .pipe(plugins.plumber({errorHandler: plugins.notify.onError("Error: <%= error.message %>")}))
      .pipe(plugins.sass(config.sass))
      .pipe(gulp.dest(config.deploy + 'static/css'))
      .pipe(plugins.postcss(config.processors))
      .pipe(gulp.dest(config.deploy + 'static/css/'))
      .pipe(plugins.if(config.notify, plugins.notify('<%= file.relative %> compiled')))
      .pipe(plugins.browserSync.stream());
  }
};