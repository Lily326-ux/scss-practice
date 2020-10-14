// Path
const {
  src,
  watch
} = require('./config');

// Libs
const gulp = require('gulp');
const { browserSync } = require('./server');
const sass = require('gulp-sass');

// Compiler
sass.compiler = require('node-sass');

// Task
const scss = () => {
  return gulp.src(src.scss)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(watch.css))
    .pipe(browserSync.reload({ stream:true }))
}

module.exports = {
  scss,
}