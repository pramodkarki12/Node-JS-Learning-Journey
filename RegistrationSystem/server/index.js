const express = require('express');
require('./src/db/conn');
const path = require('path');
const hbs = require('hbs');

const user = require('./src/model/userRegistration');

const app = express();
const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, './public');
app.use(express.static(static_path));

const templates_path = path.join(__dirname, './src/templates/views');
const partials_path = path.join(__dirname, './src/templates/partials');

app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', async (req, res) => {
  try {
    const email = req.body.email;
    res.send(email);
    console.log(email);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server established at ${port}`);
});
