console.log('starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
const titleOptions={
  describe: "Title of note",
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs.command('add', 'Add a  new note', {
  title: titleOptions,
  body:bodyOptions

}).command('list', 'List all notes')
.command('read', 'read a note',{
  title: titleOptions
})
.command('remove', 'remove a note', {
  title: titleOptions
})
.help().argv;

var command = argv._[0];

if (command === 'add'){
  console.log('adding new note');
  var note = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log('Note created');
    notes.logNote(note);
  }
  else {
    console.log('Note title taken');

  }
}

else if(command === 'list') {
  var allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
}

else if(command === 'read') {
  var note = notes.getNote(argv.title);
  if(note){
    notes.logNote(note);
  } else {
    console.log('note not found')
  }
}

else if(command === 'remove') {
  noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'note not found'
  console.log(message);
}

else {
  console.log('Command not recognized');
}


// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

// console.log('Result:', notes.add(9,3));
// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
// console.log(user);

// fs.writeFile('greetings.txt', `Hello ${user.username}! and your age ${notes.age}`, function(e){
//   console.log(e);
// });