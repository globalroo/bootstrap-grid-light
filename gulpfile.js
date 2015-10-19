var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  return gulp.src('./bootstrap.css')
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
	.pipe(rename("bootstrap.min.css"))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-sourcemaps', function() {
  return gulp.src('./bootstrap.css')
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
	.pipe(rename("bootstrap.min.css"))
    .pipe(gulp.dest('dist'));
});