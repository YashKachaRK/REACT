const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

  obj = {
    a : "!01"
  }
  res.json(obj)
})

router.get('/add', (req, res) => {

  obj = {
    a : "done"
  }
  res.json(obj)
})
module.exports = router