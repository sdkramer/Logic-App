const express = require('express')


const port = 4000

const server = express()

server.get('/welcome', (req, res) => {
  res.send('Welcome to the Logic App!')
})


server.listen(port, () => {
  console.log(`Server listening at localhost:${port}`)
})