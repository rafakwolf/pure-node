const http = require('http')

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Acho que é melhor usar o express, não!</h1>')
})

const PORT = 3456

server.listen(PORT, function(){
    console.log(`Escutando a porta ${PORT}`)
})