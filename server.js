const http = require ('http'); //importation du package http

const server = http.createServer((req,res) => {
    res.end('Je répond à ta troisième requête!!'); 
})

server.listen(process.env.PORT || 3000); 
