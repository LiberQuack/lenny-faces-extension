const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('default', function() {
    return gulp.src(['*','!node_modules','!.idea',''])
        .pipe(zip('lenny-faces.zip'))
        .pipe(gulp.dest('dist'));
});