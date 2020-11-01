const db = require('../config')

function find() {
  return db('kinds')
}

module.exports = {
  find,
}