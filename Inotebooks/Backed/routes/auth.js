const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/User');
const JWT_SECRET = "YashKacha@#786"
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
// CREATE USER
//ROUTE1
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

      const salt = await bcrypt.genSalt(10)
      const securePass = await bcrypt.hash(req.body.password, salt)

      // CREATE USER
      user = await User.create({
        name: req.body.name,
        emailid: req.body.emailid,
        password: securePass
      });

      const data = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET)


      // RESPONSE
      res.json({
        success: true,
        message: "User added successfully",
        authToken: authToken
      });

    } catch (error) {

      console.log(error);
      res.status(500).send("Server Error");

    }
  }
);

//ROUTE 2
// Auth User using POST : /api/auth/login . No Login NEed
router.post(
  '/login',
  [

    body('emailid', 'Enter valid email').isEmail(),
    body('password', 'Password Cannot be blac').exists(),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { emailid, password } = req.body;
    try {
      let user = await User.findOne({ emailid });

      if (!user) {
        return res.status(400).json({
          error: "Please try to login currect credentaials"
        });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({
          error: "Please try to login currect credentaials"
        });
      }
      const payload = {
        user: {
          id: user.id
        }
      }

      const authToken = jwt.sign(payload, JWT_SECRET)
      res.json({
        success: true,
        authToken: authToken,
      });

    } catch (error) {

      console.log(error);
      res.status(500).send("Server Error");
    }
  })

// ROUTE 3 
// AUTH USER GET USER POST : /api/auth/getuser

router.post(
  '/getuser',
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { emailid, password } = req.body;
    try {
      const user = await User.findById(userId).select("-password")
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }

  })

module.exports = router;