// function sayName(name) {
//     console.log("Hello " + name)
// }

// // sayName("Pramod");
// console.log(window);


// let message = '';
// console.log(global.window);

// console.log(module);

/*
let logger = require('./logger');
// console.log(logger);
logger.log("Message sent")
*/

// if there is any error we can see this error with (jshint app_name) in terminal
// const logger = require('./logger');
// logger = 1;
// logger.log("message");


// let logger = require('./logger');
// logger("Message sent")


/*
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory : ${totalMemory}`);
console.log(`Free Memory : ${freeMemory}`);

*/

// FILE SYSTEM MODULES
// synchronous program
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

// asynchronous program

// const fs = require('fs');
// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error :', error);
//     else console.log('Result :', files);
// })




// /* Events */
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // register a listener

// // emitter.on('messageloaded', function(arg) { // arg is an event arguments
// //     console.log('Listener Called ...');
// //     console.log(`Args are : ${arg}`)

// // })




// // fire an event and you can also give your own data
// // emitter.emit('messageloaded', { id : 1, url : 'https://'});

// const Logger = require('./logger');
// const logger = new Logger();
// // using arrow function
// logger.on('messageloaded', arg => console.log(arg));

// logger.log("message");




// HTTP MODULE
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url == '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
});
// server.on("eventFire", (socket) => console.log("New Connection establishing ... "))

server.listen(3000);
console.log('Listening the server in port : 3000');
