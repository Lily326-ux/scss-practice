// Path
const {
  dist,
  src,
} = require('./config');

// Libs
const gulp = require('gulp');
const { browserSync } = require('./server');

// Task
const html = () => {
  return gulp.src(src.html)
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({ stream:true }))
}

module.exports = {
  html,
}