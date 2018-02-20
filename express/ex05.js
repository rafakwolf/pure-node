const express = require('express')
const server = express()
const routes = require('./ex05_routes')

server.use('/api', routes)

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`)
})