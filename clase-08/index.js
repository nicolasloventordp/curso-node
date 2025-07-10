//Servidor web Node Nativo
/*const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    console.log(req.method, req.url);
    res.end("OK");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));*/

import express from "express"
const app = express()

const PORT = 3000

app.get("/", (req, res) => {
    res.send("Hola mundo")
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))