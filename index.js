const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.send({ message: 'Hello World!' })
});

const app = server.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

module.exports = app;