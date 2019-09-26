const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send({
        location: 'Huntington Beach',
        forecase: 'Clear'
    })
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});