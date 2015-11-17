
module.exports = function (gulp, plugins, config) {
  return function () {
    gulp.src(config.root + 'static/js/common.js')
      .pipe(plugins.uglify(config.uglify))
      .pipe(plugins.rename("common.min.js"))
      .pipe(plugins.header("/* " + config.author + ' ' + getDate('yyyy-mm-dd') + "\n" +
        "* Copyright (c) " + getDate('yyyy') + ' ' + config.author + ";*/ \n"))
      .pipe(gulp.dest(config.deploy + 'static/js'));
  }
}