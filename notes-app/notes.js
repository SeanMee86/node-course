const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicatNote = notes.find(note => note.title === title);

    debugger
    if(!duplicatNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added!'));
    }else {
        console.log(chalk.red.inverse('Note Title Taken!'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter(note => note.title !== title);
    console.log(notes.length === newNotes.length ? chalk.bgRed('No such title found') : chalk.bgGreen('List updated'));
    saveNotes(newNotes);
};

const listNotes = () => {
    notes = loadNotes();

    console.log(chalk.green.underline('Your Notes'));

    notes.forEach(note => {
        console.log(note.title);
    })
};

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find(note => note.title === title);
    if(noteToRead) {
        console.log(`${chalk.bgGreen(noteToRead.title)}\n${noteToRead.body}`);
    }else {
        console.log(chalk.bgRed('No note found'))
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
};

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
};