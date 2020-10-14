// Libs
const gulp = require('gulp');
const { browserSync } = require('./server');

// Path
const {
  src,
  watch
} = require('./config');

// Task
const fonts = () => {
  return gulp.src(src.fonts)
        .pipe(gulp.dest(watch.fonts))
        .pipe(browserSync.reload({ stream:true }))
}

module.exports = {
  fonts,
}