module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src(config.root + 'images/*')
            .pipe(plugins.imagemin(config.imagemin))
            .pipe(gulp.dest(config.deploy + 'images/'));
    }
}