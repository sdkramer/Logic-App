const express = require('express')
const helmet = require('helmet')
const kindsRouter = require('./routers/kinds')


const port = 4000

const server = express()

server.use(helmet())
server.use(express.json())

server.use(kindsRouter)

server.get('/welcome', (req, res) => {
  res.send('Welcome to the Logic App!')
})




server.listen(port, () => {
  console.log(`Server listening at localhost:${port}`)
})