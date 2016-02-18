const gulp = require('gulp');
const copy = require('gulp-copy');
const babel = require("gulp-babel");
const zip = require('gulp-zip');
const sequencer = require('gulp-run-sequence');


var sourceFiles = ['src/**/*','bower_components/**/*','manifest.json','!node_modules','!.idea','!.git'];

gulp.task('copy', function() {
  return gulp.src(sourceFiles)
    .pipe(copy('.tmp'));
});

gulp.task('es6', function() {
  return gulp.src('.tmp/src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('.tmp/src'));
});

gulp.task('zip', function() {
  return gulp.src('.tmp/**/*')
        .pipe(zip('lenny-faces.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
  sequencer('copy','es6','zip');
});