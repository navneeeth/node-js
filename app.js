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

var counter = require('./count');

console.log(counter(['shaun', 'crystal', 'ryu']));
