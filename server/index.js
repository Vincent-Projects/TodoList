const express = require("express");
const path = require('path');
const fs = require('path');
const PORT = process.env.PORT || 5000;

const server = express();

server.use(express.static(path.join(__dirname)));

server.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(PORT);