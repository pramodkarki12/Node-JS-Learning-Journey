const os = require('os');

/** Check your system architecture */
console.log(os.arch());

/** Returns the amount of free system memory in bytes as an integer. */
const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024}`); //converts into Gigabytes.

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);

console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
console.log(os.tmpdir());
// console.log(os.constants);

