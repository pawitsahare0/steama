const https = require('https');
const mp4Url = 'https://www.example.com/path/to/mp4Video.mp4';

app.get("/", (req, res) => {
    https.get(mp4Url, (stream) => {
        stream.pipe(res);
    });
});
