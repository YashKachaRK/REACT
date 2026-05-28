const express = require('express');
const router = express.Router();
const fatchuser = require('../middleware/fatchuser')
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');


// route 1  : get all notes using GET "/api/note/getallnotes"
router.get('/fatchallnotes', fatchuser, async (req, res) => {

  const notes = await Notes.find({ user: req.user.id })
  res.json(notes)


});

// route 2 :  add notes POST : "/api/note/addnotes"

router.post('/addnote',
  fatchuser,
  [
    body('title', 'Minimum length is 5').isLength({ min: 5 }),
    body('description', 'Atleast one word need').exists(),
    body('tag', 'Minimum length is 4').isLength({ min: 4 })
  ],
  async (req, res) => {
    try {

      const { title, description, tag } = req.body
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }


      // create new note

      const note = new Notes({
        title, description, tag, user: req.user.id
      })

      const saveNotes = await note.save()
      res.json(saveNotes)
    } catch (error) {
      // VALIDATION
      console.log(error);
      res.status(500).send("Server Error");
    }
  })


module.exports = router