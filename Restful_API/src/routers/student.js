const express = require('express');
const app = express();
const Student = require('../models/students');

/** create a new router */
const router = express.Router();
/** we need to define the router */
router.get('/about', (req, res) => {
  res.send('Hello Coders 😄 😄');
});
/** we need to register our router */
// app.use(router);

/** create a new student through 'POST' method and then/catch method */
// router.post('/students', (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

/** create a new student through 'POST' method and async method */
router.post('/students', async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

/** Read the data of registered student  */
router.get('/students', async (req, res) => {
  try {
    const getStudents = await Student.find();
    res.send(getStudents);
  } catch (e) {
    res.send(e);
  }
});

/** Read the individual student data using _id */
router.get('/students/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getStudent = await Student.findById({ _id: _id });

    if (!getStudent) {
      return res.status(404).send();
    } else {
      res.status(500).send(getStudent);
    }
  } catch (e) {
    res.send(e);
  }
});

/** Update the student by id */
router.patch('/students/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateStudent);
  } catch (error) {
    res.send(400).send(error);
  }
});

/** Delete the student */
router.delete('/students/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    if (!_id) {
      return res.status(400).send("Id doesn't provided");
    }
    const deleteStudent = await Student.findByIdAndDelete(_id);
    res.send(deleteStudent);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
