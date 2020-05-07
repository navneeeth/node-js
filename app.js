// var time = 0;
//
// var timer = setInterval(function() {
//   time += 2;
//   console.log(time + ' seconds have passed.');
//   if(time > 5) {
//     clearInterval(timer);
//   }
// }, 2000);
//
// console.log(__dirname);
// console.log(__filename);

//normal function statement
// function sayHi(){
//   console.log('Hi');
// }
//
// sayHi();

//function expresssion
// var sayBye = function(){
//   console.log('Bye');
// };
// sayBye();
//
// function callFunction(fun) {
//   fun();
// }
//
// callFunction(sayBye);

// var stuff = require('./stuff');

// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
// console.log(stuff.adder(5, 6));
// console.log(stuff.adder(stuff.pi, 5));

// var events = require('events');
//
// // var myEmitter = new events.EventEmitter();
// //
// // myEmitter.on('someEvent', function(msg) {
// //   console.log(msg);
// // });
// //
// // myEmitter.emit('someEvent', 'the event was emitted');
//
// var util = require('util');
//
//
// var Person = function(name) {
//   this.name = name;
// };
//
// util.inherits(Person, events.EventEmitter);
//
// var james = new Person('James');
// var mary = new Person('Mary');
// var ryu = new Person('Ryu');
// var people = [james, mary, ryu];
// people.forEach(function(person){
//   person.on('speak', function(msg){
//     console.log(person.name + ' said: '+msg);
//   });
// });
//
// james.emit('speak', 'hey dudes');
// ryu.emit('speak', 'I want a curry');
//reading from a file synchronously.
// var fs = require('fs');
// var readMe = fs.readFileSync('readme.txt', 'utf8');
// //the readFileSync method does not proceed until read is complete.
// console.log(readMe);
// //writing to a file synchronously.
// fs.writeFileSync('writeme.txt', readMe);
// //reading and writing asynchronously.
// fs.readFile('readme.txt', 'utf8', function(err, data) {
//   //console.log(data);
//   fs.writeFile('writeme2.txt', data, function(err, data) {
//     console.log(data);
//   });
// });
//var fs = require('fs');
// fs.unlink('writeme2.txt', function(err) {
//   if(err) throw err;
//   console.log('File deleted!');
// });
//synchronously
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');
//asynchronously
// fs.mkdir('stuff', function() {
//   fs.readFile('readMe.txt', function(err, data) {
//     fs.writeFile('./stuff/writeMe.txt', data, function(err, data){
//       if(err) throw err;
//       console.log("File written in new directory!");
//     });
//   });
// });
// fs.unlink('./stuff/writeMe.txt', function() {
//   fs.rmdir('stuff', function() {});
// });
// var http = require('http');
//
// var server = http.createServer(function(req, res) {
//   console.log("Request was made: " +req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hey ninjas!');
// });
//
// server.listen(3000, '127.0.0.1');
// console.log("Yo dawgs, now listening to port 3000!");
var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
myReadStream.on('data', function(chunk) {
  console.log('New chunk received:');
  console.log(chunk);
});
