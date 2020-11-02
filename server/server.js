const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const kindsRouter = require('./routers/kinds')
const examplesRouter = require('./routers/simple_examples')

const token = 'ahuBHejkJJiMDhmODZhZi0zNWRhLTQ4Zj'


const port = 4000

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use(kindsRouter)
server.use(examplesRouter)

server.get('/welcome', (req, res) => {
  res.send('Welcome to the Logic App!')
})


function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next()
  } else {
    res.status(403).json({ error: 'User must be logged in to access Private Pages.'})
  }
}

server.post('/login', (req, res) => {
  const {username, password} = req.body;
  if (username === 'Duane' && password === 'Berquist') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    })
  } else {
    res.status(403).json({ error: 'Incorrect username or password.'})
  }
})



server.listen(port, () => {
  console.log(`Server listening at localhost:${port}`)
})