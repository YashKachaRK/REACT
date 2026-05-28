const express = require('express');
const router = express.Router();
const fatchuser = require('../middleware/fatchuser')
const Notes = require('../models/Notes');


// route 1  : get all notes using GET "/api/note/getallnotes"
router.get('/fatchallnotes',fatchuser, async (req, res) => {

  const notes  = await Notes.find({user: req.user.id})
  res.json(notes)
  

});


module.exports = router