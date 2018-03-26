console.log('starting app.js');

module.exports.age = 25;

module.exports.addNote = function(){
  console.log('Add note ');
  return 'new note';
}

module.exports.add = (a, b)  => {
  return a + b;
}