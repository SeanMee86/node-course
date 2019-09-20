const https = require('https');

const url = `https://api.darksky.net/forecast/1d0d2f715fdf13c5f2bacd423967bd08/40,-75`;

const request = https.request(url, (res) => {

    let data = '';

    res.on('data', (chunk) => {
        data += chunk.toString();
    });

    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (err) => {
    console.log('an error', err);
});

request.end();
