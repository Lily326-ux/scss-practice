// Path
const {
  dist,
  src,
} = require('./config');

// Libs
const gulp = require('gulp');
const { browserSync } = require('./server');
const rigger = require('gulp-rigger');

// Task
const html = () => {
  return gulp.src(src.html)
        .pipe(rigger())
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({ stream:true }))
}

module.exports = {
  html,
}