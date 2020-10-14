const del = require('del');
// Path
const {
  dist,
} = require('./config');

// Task
const clean = (done) => {
  del.sync(dist);
  done();
};

module.exports = {
  clean,
}