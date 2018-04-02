console.log('starting app.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes  = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  }
  catch (e) {
  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('get all notes');
}

var getNote = (title) => {
  console.log('getting note', title);
}

var removeNote = (title) => {
  console.log('Removing note', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}