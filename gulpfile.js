'use strict';

const gulp = require('gulp');

// Path
const { src } = require('./gulp-tasks/config');

// Tasks
const { serve } = require('./gulp-tasks/server');
const { clean } = require('./gulp-tasks/clean');
const { fonts } = require('./gulp-tasks/fonts');
const { html } = require('./gulp-tasks/html');
const { image } = require('./gulp-tasks/image');
const { scss } = require('./gulp-tasks/scss');

// Build
gulp.task('build', gulp.series(clean, [html, scss, image, fonts]))

// Watch
gulp.task('watch', (done) => {
  gulp.watch(src.scss, gulp.series([scss]));
  gulp.watch(src.html, gulp.series([html]));
  gulp.watch(src.img, gulp.series([image]));
  gulp.watch(src.fonts, gulp.series([fonts]));
  done();
});

// Default
gulp.task('default', gulp.series(clean, 'build', gulp.parallel(serve, 'watch')));