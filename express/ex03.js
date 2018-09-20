const express = require('express')
const server = express()

server.use('/api', (req, res, next) => {
    console.log('inicio')
    next()
    console.log('fim')
})

server.use('/api', (req, res) => {
    console.log('resposta...')
    res.send('<h1>API</h1>')
})



const PORT = 3000

server.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`)
})