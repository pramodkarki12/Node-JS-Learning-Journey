const fs = require('fs');

// creating a new file
// fs.writeFileSync('read.txt', "Hello programmer");


// fs.writeFileSync(
//   'read.txt',
//   'Will it replace the previous content inside the same file?'
// );

/** Appending the content on the same file. */
// fs.appendFileSync('read.txt', ' Yes it does.')



/** Reading a file */
// const buf_data = fs.readFileSync('read.txt') //here we get the data in binary form

// org_data = buf_data.toString();
// console.log(org_data);


/** Rename the file */
// fs.renameSync('read.txt', 'readWrite.txt');

/** Copy the file */
fs.copyFileSync('readWrite.txt', 'readWrite2.txt')
