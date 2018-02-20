const express = require('express')
const server = express()

server.route('/clientes')
    .get((req, res) => res.send('Lista de clientes'))
    .post((req, res) => res.send('Novo cliente'))
    .put((req, res) => res.send('Altera cliente'))
    .delete((req, res) => res.send('Excluir cliente'))

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`)
})