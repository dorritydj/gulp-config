var gulp = require('gulp'),
    clean = require('gulp-clean'),
    _ = require('lodash'),
    sass = require('./bin/sass');

//TODO: add yarg to consume arguments and dynamically feed filepath

gulp.task('clean', () => {
    return gulp.src('./dist', { read: false }).pipe(clean());
});

// Minification - CSS/JS
gulp.task('prod:build-sass', ['clean'], _.bind(sass, null, true));

// Concatination - CSS/JS

// Rollup build

// SASS build
gulp.task('dev:build-sass', ['clean'], _.bind(sass, null, false));

module.exports = gulp;
