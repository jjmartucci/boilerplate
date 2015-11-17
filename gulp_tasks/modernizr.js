module.exports = function(gulp, plugins, config){
  return function(){
    gulp.src([config.root + 'static/js/common.js', config.root + 'static/css/screen.css'])
      .pipe(plugins.modernizr('modernizr-custom.js', config.modernizr) )
      .pipe(gulp.dest(config.root + "static/vendor/"));
  }
}