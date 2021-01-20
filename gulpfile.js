const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')

gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist/scripts'))
})

sass.compiler = require('node-sass')

gulp.task('styles', function() {
  return gulp.src('src/stylesheets/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/stylesheets'))
})

gulp.task('watch', function() {
  gulp.watch('src/scripts/*.js', gulp.series('scripts'))
  gulp.watch('src/stylesheets/*.sass', gulp.series('styles'))
})
