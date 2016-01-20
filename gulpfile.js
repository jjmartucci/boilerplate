var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var lazypipe = require('lazypipe');

// Until Gulp 4.0 releases, this is an easy way to run tasks sequentially.
var runSequence = require('run-sequence');

// These are non-gulp plugins used in tasks, so well add them to the plugin object created by gulp-load-plugins
plugins.autoprefixer = require('autoprefixer');
plugins.browserSync = require('browser-sync').create();

// Check for Node environment
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

var config = {
    author: 'Joe Martucci',
    root: 'src/',
    deploy: 'public/',

    notify: true, // Set to false if you don't want notifications.
    processors: [plugins.autoprefixer({browsers: ['last 2 versions']})],
    modernizr: {
        options: [
            'setClasses',
            'addTest',
            'html5printshiv',
            'testProp',
            'fnBind'
        ]
    },


    // options for sass build
    sass: {
        outputStyle: (process.env.NODE_ENV === 'production') ? 'compressed' : 'nested',
    },

    // options for uglify
    uglify: {
        mangle: true
    },

    // Options for imagemin
    imagemin: {

    },

    // options for browser sync
    browserSync: {
        proxy: '127.0.0.1' // URL browserSync should proxy.
    },

    webpack: {
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                }
            ]
        },
        output: {
            filename: 'common.pack.js',
        },
        resolve: {
            extensions: ["", ".js", ".jsx"],
            modulesDirectories: [
                "src/static/js",
                "node_modules"],
        },
    },

    // Array of file types for browserSync to watch. It will do a full reload if these change.
    markupFileType: ['public/*.html', 'public/*.twig']
};

function getDate(format) {
    var date = new Date();
    return date.toString(format);
}


function getTask(task) {
    return require('./gulp_tasks/' + task)(gulp, plugins, config);
}

plugins.uglifyAndRename = lazypipe()
    .pipe(plugins.uglify, config.uglify)
    .pipe(plugins.rename, 'common.min.js')
    .pipe(plugins.header, '/* ' + config.author + ' ' + getDate('yyyy-mm-dd') + '\n' +
        '* Copyright (c) ' + getDate('yyyy') + ' ' + config.author + ';*/ \n');

gulp.task('sass', getTask('sass'));
gulp.task('eslint', getTask('eslint'));
gulp.task('modernizr', getTask('modernizr'));
gulp.task('uglify', getTask('uglify'));
gulp.task('postcss', getTask('postcss'));
gulp.task('babel', getTask('babel'));
gulp.task('webpack', getTask('webpack'));


// Lint then uglify JavaScript, no Babel
gulp.task('js', function () {
    runSequence('eslint', 'uglify');
});

// Compile sass then run it through PostCSS.
gulp.task('css', function () {
    runSequence('sass', 'postcss');
});

// Lint then transpile JS using Babel, with uglify as part of Babel
gulp.task('js', function () {
    runSequence('eslint', 'babel');
});

// Fire up browsersync proxy server
gulp.task('serve', ['sass'], getTask('serve'));
