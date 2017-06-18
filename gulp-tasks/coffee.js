var gulp = require('gulp'),
coffee = require('gulp-coffee'),
concat = require('gulp-concat'),
gutil = require('gulp-util');

gulp.task('coffee', function() {
  return gulp.src('./app/coffee/*.coffee').pipe(coffee({
    bare: true
  }))
  .pipe(concat(parameters.app_main_file))
  .pipe(gulp.dest('./app/js'))
  .on('error', gutil.log);
});