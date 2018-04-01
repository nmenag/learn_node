console.log('starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

var filteredArray = _.uniq(['nicolas', 2])
// console.log(filteredArray);

const argv = yargs.argv;
var command = process.argv[2];

console.log('command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if (command === 'add'){
  console.log('adding new note');
  notes.addNote(argv.title, argv.body);
}
else if(command === 'list') {
  console.log('listing all notes');
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