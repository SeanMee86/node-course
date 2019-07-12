const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Sean.');

let appendedText = 'Text appended.';

fs.appendFileSync('notes.txt', `\n${appendedText}`, 'utf-8');