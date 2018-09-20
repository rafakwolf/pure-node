const express = require('express')
const server = express()

server.get('/', (req, res, next) => {
    console.log('inicio')
    next()
    console.log('fim')
})

server.get('/', (req, res) => {
    console.log('resposta...')
    res.send('<h1>Olá Express</h1>')
})



const PORT = 3000

server.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`)
})