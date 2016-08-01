'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

gulp.task('clean', function () {
  return del([
    'stylesheet.css'
  ]);
});

gulp.task('sass', function () {
  return gulp.src('./src/stylesheet.scss')
    .pipe(sass({
      outputStyle: 'compact'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['clean', 'sass', 'sass:watch']);
gulp.task('build', ['clean', 'sass']);
