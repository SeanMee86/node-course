const chalk = require('chalk');

const getNotes = require('./notes.js');

const msg = getNotes();

const log = console.log;

const successMsg = chalk.green;

log(successMsg('Success!'));