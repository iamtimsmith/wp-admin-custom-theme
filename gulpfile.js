const { task, series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

task('styles', function (done) {
  src('scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
  done();
});

task('watch', function () {
  watch('scss/**/*.scss', series('styles'));
})
