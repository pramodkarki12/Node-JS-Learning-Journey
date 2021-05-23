/**
 Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
 */

 const EventEmitter = require('events');
 const event = new EventEmitter();

 /*
//Create an event handler and Assign the event handler to an event:
event.on('scream', () => {
    console.log('My name is Pramod Karki');
});

event.on('scream', () => {
  console.log('We can handle multiple tasks with the single events');
});

event.on('scream', () => {
  console.log('Yes you are right.');
});

//Fire the 'scream' event:
event.emit('scream');
*/

// Example 2: Registering for the event with the callback parameters
event.on('checkPage', (statusCode, msg) => {
    console.log(`Status Code is ${statusCode} and the page is ${msg}`);
})
event.emit('checkPage', 200, 'ok')
