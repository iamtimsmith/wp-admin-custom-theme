const { task, series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

task('styles', function (done) {
  src('scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
  done();
});

task('minify', function (done) {
  src('css/*.css')
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('css'));
  done();
});

task('watch', function (done) {
  watch('scss/**/*.scss', series('styles', 'minify'));
  done();
});

task('default', series('styles', 'minify'));
