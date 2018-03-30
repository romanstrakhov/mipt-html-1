var gulp = require('gulp');
var pug = require('gulp-pug');
var pugBeautify = require('gulp-pug-beautify');

gulp.task('views', function buildHTML() {

  return gulp.src('views/*.pug')

  .pipe(pug({
	pretty: true
    // Your options in here.

  }))
  .pipe( pugBeautify({ omit_empty: true }) )
  .pipe( gulp.dest('dist/') );

});
