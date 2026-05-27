const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/User');
const JWT_SECRET ="YashKacha@#786"
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
// CREATE USER
router.post(
  '/',
  [
    body('name', 'Minimum length is 4').isLength({ min: 4 }),
    body('emailid', 'Enter valid email').isEmail(),
    body('password', 'Minimum length is 8').isLength({ min: 8 })
  ],

  async (req, res) => {

    try {

      // VALIDATION
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }

      // CHECK USER
      let user = await User.findOne({
        emailid: req.body.emailid
      });

      if (user) {
        return res.status(400).json({
          error: "Sorry User is already there"
        });
      }

      const salt =await  bcrypt.genSalt(10)
      const securePass = await bcrypt.hash(req.body.password , salt)

      // CREATE USER
      user = await User.create({
        name: req.body.name,
        emailid: req.body.emailid,
        password: securePass
      });

      const data = {
        user:{
          id: user.id
        }
      }
      const authToken = jwt.sign(data , JWT_SECRET)
    
      
      // RESPONSE
      res.json({
        success: true,
        message: "User added successfully",
        authToken : authToken
      });

    } catch (error) {

      console.log(error);
      res.status(500).send("Server Error");

    }
  }
);

module.exports = router;