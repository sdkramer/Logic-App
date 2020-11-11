const db = require('../config')

function find() {
  return db('simple_examples')
}

function add(example) {
  return db('simple_examples')
  .insert(example)
}

function remove(id) {
  return db(simple_examples).where(id).del()
}

module.exports = {
  find,
  add,
  remove
}