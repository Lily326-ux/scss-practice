// Path
const {
  src,
  watch
} = require('./config');

// Libs
const gulp = require('gulp');
const { browserSync } = require('./server');

// Task
const image = () => {
  return gulp.src(src.img)
        .pipe(gulp.dest(watch.img))
        .pipe(browserSync.reload({ stream:true }))
}

module.exports = {
  image,
}