import fs from 'fs';
import chalk from 'chalk';
const getNotes =  function(){
    return 'Your notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);
    if(duplicateNotes.length === 0){
        console.log('Adding a new note...');
        notes.push({
            title: title,
            body: body
        });
    }
    else if(duplicateNotes.length > 0){
        console.log('Note title taken!');
        return;
    }

    console.log(notes);
    saveNotes(notes);
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = ()=>{
    try {
        let dataBuffer = fs.readFileSync('notes.json');
        let dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        console.error('Error reading notes file:', e.message);
        return [];
    }
}
const removeNote = (title)=>{
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);

    if(notes.length > notesToKeep.length){
        console.log(chalk.bgGreen('Note removed'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.bgRed('No note found'));
    }
}


export default {
    getNotes: getNotes,
    addNote: addNote,
    loadNotes: loadNotes,
    removeNote: removeNote
}