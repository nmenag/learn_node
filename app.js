console.log('starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['nicolas', 1, 'nicolas', 1, 2, 3, 4, 5])
console.log(filteredArray);

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