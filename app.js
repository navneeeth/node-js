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

// var http = require('http');
// var fs = require('fs');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// myReadStream.on('data', function(chunk) {
//   console.log('New chunk received!');
//   myWriteStream.write(chunk);
// });

//16
// var http = require('http');
// var fs = require('fs');
// // var myWriteStream = fs.createWriteStream(__dirname + '/writeMe2.txt');
// // var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// // myReadStream.pipe(myWriteStream);
//
// var server = http.createServer(function(req, res) {
//   console.log('Request was made: ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
//   //var myWriteStream = fs.createWriteStream(__dirname + '/writeMe3.txt');
//   //myReadStream.pipe(myWriteStream);
//   myReadStream.pipe(res);
//   //res.end('Hey ninjas!';)
// });
//
// server.listen(3000, '127.0.0.1');
// console.log("Yo dawgs, now listening to port 3000");

//17 Serving HTML Pages
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res) {
//   console.log('Request was made: ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
//   myReadStream.pipe(res);
// });
//
// server.listen(3000, '127.0.0.1');
// console.log("Yo dawgs, now listening to port 3000");

//18 Serving JSON data
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res) {
//   console.log('Request was made: ' + req.url);
//   res.writeHead(200, {'Content-Type': 'application/json'});
//   var myObj = {
//     name: 'Ryu',
//     job: 'Ninja',
//     age: 29
//   };
//   res.end(JSON.stringify(myObj));
// });
//
// server.listen(3000, '127.0.0.1');
// console.log("Yo dawgs, now listening to port 3000");

//19 basic routing
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res) {
//   console.log('Request was made: ' + req.url);
//   if(req.url === '/home' || req.url === '/') {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
//   } else if(req.url === '/contact-us') {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/contact.html').pipe(res);
//   } else if(req.url === '/api/ninjas') {
//     var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshiz', age: 33}];
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(ninjas));
//   } else {
//     res.writeHead(404, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(res);
//   }
// });
//
// server.listen(3000, '127.0.0.1');
// console.log("Yo dawgs, now listening to port 3000");

//23 Introduction to Express and 24
// var express = require('express');
// var app = express();
// app.get('/', function(req, res) {
//   res.send('this is the homepage');
// });
// app.get('/contact', function(req, res) {
//   res.send('This is the contact page');
// });
// app.get('/profile/:id', function(req, res) {
//   res.send('You requested to see a profile with the id of ' + req.params.id);
// });
// app.listen(3000);

//25 Template Engines
// var express = require('express');
// var app = express();
// //used to set the view engine to ejs.
// //Created a new folder called views with the dot ejs file
// //called as "profile".
// app.set('view engine', 'ejs');
// app.get('/', function(req, res) {
//   //app dot get single slash will now return the index file.
//   res.sendFile(__dirname + '/index.html');
// });
// app.get('/contact', function(req, res) {
//   //app dot get single slash and contact will now return the contact file.
//   res.sendFile(__dirname + '/contact.html');
// });
// app.get('/profile/:name', function(req, res) {
//   //retrieving the data through the response dot render function that takes
//   //an object as a parameter containing the values. The colon followed by
//   //identifier is collected as data and can be accessed from req.params.
//   //identifier which can be used to display from the ejs file.
//   var data = {age: 29, job: 'ninja'};
//   res.render('profile', {person: req.params.name, data: data});
// });
// app.listen(3000);

//26 Template Engines Part 2
var express = require('express');
var app = express();
//used to set the view engine to ejs.
//Created a new folder called views with the dot ejs file
//called as "profile".
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  //app dot get single slash will now return the index file.
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res) {
  //app dot get single slash and contact will now return the contact file.
  res.sendFile(__dirname + '/contact.html');
});
app.get('/profile/:name', function(req, res) {
  //retrieving the data through the response dot render function that takes
  //an object as a parameter containing the values. The colon followed by
  //identifier is collected as data and can be accessed from req.params.
  //identifier which can be used to display from the ejs file.
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fishing', 'reading']};
  res.render('profile', {person: req.params.name, data: data});
});
app.listen(3000);
