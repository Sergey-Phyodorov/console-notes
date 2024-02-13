const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');

const notesPath = path.join(__dirname, 'db.json');

async function addNote(title) {
    const notes = await getNotes();

    const note = {
        id: Date.now().toString(),
        title,
    };

    notes.push(note);

    await fs.writeFile(notesPath, JSON.stringify(notes));
    console.log(chalk.greenBright('Note was added!'));
}

async function getNotes() {
    const notes = await fs.readFile(notesPath, { encoding: 'utf-8' });
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function printNotes() {
    const notes = await getNotes();

    console.log(chalk.bgBlueBright('List of notes:'));
    notes.forEach(notes => {
        console.log(chalk.blue(notes.title));
    });
}

module.exports = { addNote, printNotes };
