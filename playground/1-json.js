const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

data.name = 'Sean';
data.age = '32';

const newJSONFile = JSON.stringify(data);

fs.writeFileSync('1-json.json', newJSONFile);