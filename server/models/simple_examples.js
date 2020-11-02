const db = require('../config')

function find() {
  return db('simple_examples')
}

module.exports = {
  find,
}