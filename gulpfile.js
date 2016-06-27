var gulp = require('gulp');
var mimimize = require('gulp-uglify');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('jsConcat', function() {
  return gulp.src(['./src/js/form.js' ,'./src/js/ui.js'])
   .pipe(concat('allConcat.js'))
   .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['jsConcat'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('jsMin', ['jsBrowserify'], function() {
  return gulp.src('./dist/js/app.js')
    .pipe(mimimize())
    .pipe(gulp.dest('./dist/js'));
});
