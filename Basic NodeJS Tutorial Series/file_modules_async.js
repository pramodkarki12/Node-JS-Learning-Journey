const fs = require('fs');

// creating a file

// fs.writeFile('async.txt', 'Awesome Day!!', (err) => {
//     console.log('File is created.');
//     console.log(err);
// });

// appending a file

// fs.appendFile('async.txt', "Great Job !!", (err) => {
//     console.log('task completed');
// })


// reading a file

fs.readFile('async.txt', 'utf-8', (err, data) => {
    if (err) console.log('Something went wrong');
    else console.log(data);
})
