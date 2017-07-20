const express = require('express');
const router = express.Router();
var TodoItem = require('../models/TodoItem')
const testTodo = new TodoItem({
  task: "test task"
});

testTodo.save()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  })

router.post('/add', (req, res) => {
  new TodoItem({
    task:req.body
  })
  res.send('Hello');
});

module.exports = router;
