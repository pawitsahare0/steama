const https = require('https');
const express = require('express');
const file = 'https://speed.hetzner.de/1GB.bin';
const app = express();

app.get("/", (req, res) => {
    https.get(file, (stream) => {
        stream.pipe(res);
    });
});
app.listen(3000);
