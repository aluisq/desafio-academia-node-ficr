const express = require('express');

const http = require('http')

const port = 3000

const app = express();

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Estou rodando na porta: ${port}`)
})


app.get('/', (req, res) =>
    res.json({ "Desafio": "Academia - Accenture" }))


module.exports = {
  app
}
