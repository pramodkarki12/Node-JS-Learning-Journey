const express = require('express');
const app = express();
const path = require('path');

const hbs = require('hbs');
const requests = require('requests');

const templatePath = path.join(__dirname, '../../templates/views');
const partialPath = path.join(__dirname, '../../templates/partials');

/** Now set the view engine */
app.set('view engine', 'hbs');
app.set('views', templatePath); //adding our own directory name, just instead of 'views'

/** For the partial files - means that the repetated content in most of the files such as header, footer and so on. */
hbs.registerPartials(partialPath);

/** Template Engine route */
app.get('/', (req, res) => {
  res.render('index', {
    PageName: 'About',
    name: 'Dynamic Content',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

/** Getting the data from the API  */
app.get('/weather', (req, res) => {
  requests(
    `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=7f89095eea4813d3a090d641dc3278c7`
  )
    .on('data', (chunk) => {
      const objData = JSON.parse(chunk);
      const arrData = [objData];

      console.log(
        `City name is ${arrData[0].name} and the temperature is ${arrData[0].main.temp}`
      );

      res.write(`<h1>${arrData[0].name}</h1>`);
    })
    .on('end', (err) => {
      if (err) console.log('Connection closed due to the error ', err);
      res.end();
    });
});

/** Error Page inside the about Page */
app.get('/about/*', (req, res) => {
  res.render('404', {
    errorcomment: 'Oops this about page could not found',
  });
});

/** Error Page */
app.get('*', (req, res) => {
  res.render('404', {
    errorcomment: 'Oops 404 Page Not Found',
  });
});

app.listen(8000, () => {
  console.log('Listening at port 8000');
});
