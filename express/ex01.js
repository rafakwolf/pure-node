const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Index</h1>')
})

server.all('/teste', (req, res) => {
    res.send('<h1>Teste</h1>')
})

// usando regex
server.get(/api/, (req, res)=>{
    res.send('<h1>API</h1>')  
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`)
})