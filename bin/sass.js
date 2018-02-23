const gulp = require('gulp'),
    sass = require('gulp-sass'),
    glob = require('gulp-sass-glob'),
    gulpIf = require('gulp-if'),
    sourceMaps = require('gulp-sourcemaps');

module.exports = (toMinify) => {
    return gulp
        .src('./src/sass/main.scss')
        .pipe(gulpIf(toMinify, sourceMaps.init()))
        .pipe(glob())
        .pipe(
            gulpIf(toMinify, sass({ outputStyle: 'compressed' }), sass.sync())
        )
        .pipe(gulpIf(toMinify, sourceMaps.write()))
        .pipe(gulp.dest('./dist/css/'));
};
