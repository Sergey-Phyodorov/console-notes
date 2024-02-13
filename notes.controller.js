const fs = require('fs/promises');
const path = require('path');

const notesPath = path.join(__dirname, 'db.json');

async function addNote(title) {
    const notes = await getNotes();

    const note = {
        id: Date.now().toString(),
        title,
    };

    notes.push(note);

    await fs.writeFile(notesPath, JSON.stringify(notes));
}
addNote('test');
async function getNotes() {
    const notes = await fs.readFile(notesPath, { encoding: 'utf-8' });
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

module.exports = { addNote, getNotes };
