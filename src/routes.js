const { Router } = require('express')

// Controllers
const GitController = require('./controllers/GitController')

// const FaceController = require('./controllers/FaceController')

const app = Router()

app.get('/api/curriculo/github', GitController.getGitHub)

// app.get('api/curriculo/facebook',FaceController.teste)


module.exports = app
