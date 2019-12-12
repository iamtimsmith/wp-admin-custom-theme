const { task, series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

task('styles', function (done) {
  src('scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
  done();
});

task('minify', function (done) {
  src('css/admin.css')
    .pipe(autoprefixer({
      "overrideBrowserslist": [
        "> 1%",
        "last 2 versions",
        "ie >= 11"
      ]
    }))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('css'));

  src('css/frontend.css')
    .pipe(autoprefixer({
      "overrideBrowserslist": [
        "> 1%",
        "last 2 versions",
        "ie >= 11"
      ]
    }))
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
