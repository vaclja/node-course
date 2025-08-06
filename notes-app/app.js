import notes from './notes.js';
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: false,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
       notes.addNote(argv.title, argv.body);
    }
})
.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
    }
})
.command({  command: 'list',
    describe: 'List your notes',

    handler: function() {
        console.log('Listing all notes...');
    }
})
.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note...');
    }
})
.parse();