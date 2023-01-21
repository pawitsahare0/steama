const https = require('https');
const express = require('express');
const file = 'https://speed.hetzner.de/1GB.bin';
const app = express();

app.get("/file", (req, res) => {
    https.get(file, (stream) => {
        stream.pipe(res);
    });
});
app.listen(3000);
console.log('Lsunch Succesfully now enjoy yourself 🙏 ')
console.log('Lsunch Succesfully now enjoy yourself 🙏 ')
console.log('Lsunch Succesfully now enjoy yourself 🙏 ')


console.log('Lsunch Succesfully now enjoy yourself 🙏 ')


