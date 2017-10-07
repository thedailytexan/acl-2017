var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('build/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('site/css'));
});
 
gulp.task('default', function () {
  gulp.watch('build/sass/**/*.scss', ['sass']);
});