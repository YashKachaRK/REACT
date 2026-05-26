const express = require('express');
const router = express.Router();

const User = require('../models/User');

const { body, validationResult } = require('express-validator');

// CREATE USER
router.post(
  '/',
  [
    body('name', 'Minimum length is 4').isLength({ min: 4 }),
    body('emailid', 'Enter valid email').isEmail(),
    body('password', 'Minimum length is 8').isLength({ min: 8 })
  ],

  (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let user = User.findOne({email : req.body.email})
    if(user){
      return res.status(400).json({error : "Sorry User is alredy there "})
    }

    User.create({
      name: req.body.name,
      emailid: req.body.emailid,
      password: req.body.password
    })
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Server Error");
    });
  }
);

module.exports = router;