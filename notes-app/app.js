const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describer: 'Remove Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.removeNote(argv.title);
    }
});

//Create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(){
        console.log('Listing the notes!')
    }
});

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    handler: function (){
        console.log('Reading Notes!')
    }
});

//add, remove, read, list

yargs.parse();

