const express = require('express')
const SExample = require('../models/simple_examples')

const router = express.Router()

router.get('/simple', async (req, res, next) => {
try {
const examples = await SExample.find()
res.json(examples)
} catch(err) {
  next(err)
}
})

module.exports = router