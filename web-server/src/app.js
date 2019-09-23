const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send('<h1>Hello Express</h1>')
});

app.get('/help', (req, res) => {
    res.send('<h1>Help Page</h1>')
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
});

app.get('/weather', (req, res) => {
    res.send('<h1>Weather Page</h1>')
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});