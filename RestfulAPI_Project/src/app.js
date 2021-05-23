const express = require('express');
const app = express();
require('./db/conn');
const mensRanking = require('./models/mens');
const port = process.env.PORT || 8000;

app.use(express.json());

app.post('/mens', async (req, res) => {
  try {
    const addingMensRecords = new mensRanking(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/mens', async (req, res) => {
  try {
    const getMens = await mensRanking.find({});
    res.send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await mensRanking.findById(_id);
    res.send(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.patch('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await mensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMen);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteMen = await mensRanking.findByIdAndDelete(_id);
    res.send(deleteMen);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Connection established at ${port}`);
});
