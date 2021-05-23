/**
     Challenge

 * 1. Create a folder named it with your surname
 * 2. Creae a file in it and named it as bio.txt and insert data into it.
 * 3. Add nore data into the file at the end of the existing data.
 * 4. Read the data without getting the buffer data at first.
 * 5. Rename the file name to mybio.txt
 * 6. Now delete the both file and the folder
 */

const fs = require('fs');

// creating a folder
// fs.mkdirSync('karki');
// creating a file
fs.writeFileSync('karki/bio.txt', 'My name is Pramod Karki.');

// appending the data
fs.appendFileSync('karki/bio.txt', 'Hello Programmer');

// read the data
const data = fs.readFileSync('karki/bio.txt', 'utf-8');
console.log(data);

// rename the file
fs.renameSync('karki/bio.txt', 'karki/mybio.txt');

// deleting the file and folder
fs.unlinkSync('karki/mybio.txt');
fs.rmdirSync('karki');
