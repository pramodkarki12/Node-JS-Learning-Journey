const bioData = {
  name: 'Pramod',
  age: 20,
  sex: 'male',
};

/**
 The difference between Obj and JSON data are :
 * 1. In JSON data, we can see that the key has also double quotes(""), while Obj data lacks it.

 * 2. However, Obj data can be accessed through the dot ie.., bioData.name but in JSON data, if we perform the same action we gets error.
 */

/*
// convert the obj data into JSON
const jsonData = JSON.stringify(bioData);
console.log(jsonData.name);

// convert the JSON data into obj data
const objData = JSON.parse(jsonData);
console.log(objData.name);
*/

//! Task
// 1. Convert the above data into JSON
const jsonData = JSON.stringify(bioData);

// 2. Add the data into the another file
const fs = require('fs');

fs.writeFile('json1.json', jsonData, () => {
  console.log('Copying Done');
});

// 3. read that file
fs.readFile('json1.json', 'utf-8', (error, data) => {
  console.log(data);

  const orginal_data = JSON.parse(data);
  console.log(orginal_data);
});
