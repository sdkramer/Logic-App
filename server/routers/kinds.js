const express = require('express')
const Kind = require('../models/kinds')

const router = express.Router()

router.get('/kinds', async (req, res, next) => {
try {
const kinds = await Kind.find()
res.json(kinds)
} catch(err) {
  next(err)
}
})

module.exports = router