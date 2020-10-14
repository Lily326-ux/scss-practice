// Libs
const browserSync = require('browser-sync').create();

// Path
const {
  dist,
} = require('./config');

// Config
const serveConfig = {
  server: {
    baseDir: dist,
  },
  notify: false,
}

// Task
const serve = () => {
  browserSync.init(serveConfig);
};

module.exports = {
  serve,
  browserSync,
};