const db = require('../config')

function find() {
  return db('simple_examples')
}

function add(example) {
  return db('simple_examples')
  .insert(example)
}

module.exports = {
  find,
  add
}