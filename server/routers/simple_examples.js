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

router.post('/simple', async (req, res, next) => {
 try {
const newEx = await SExample.add(req.body)
console.log(newEx)
res.status(201).json(newEx)
 } catch(err){
   next(err)
 }
})

router.delete('/simple/:id', async (req, res, next) => {
  try {
await SExample.remove(req.params.id)
  } catch(err) {
    next(err)
  }
})

module.exports = router