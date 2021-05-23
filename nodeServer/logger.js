// var url = "https://myurl.com"

// function log(message) {
//     console.log(message);
// }


// module.exports.log = log;

// module.exports = log;
// exports.log = log;

// const path = require('path');
// var pathObj = path.parse(__filename);

// console.log(pathObj);


const EventEmitter = require('events');
// const emitter = new EventEmitter();

class Logger extends EventEmitter{
    log(message) {
        console.log(message);
        this.emit('messageloaded', {id:1, url: 'https://'});
    }
}

module.exports = Logger;