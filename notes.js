console.log('starting app.js');


var addNote = (title, body) => {
  console.log('adding note', title, body);
}

module.exports = {
  addNote
}

// module.exports.age = 25;

// module.exports.addNote = function(){
//   console.log('Add note ');
//   return 'new note';
// }

// module.exports.add = (a, b)  => {
//   return a + b;
// }