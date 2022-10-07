const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Admin = require("../models/Admin.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");



router.post("/login", (req, res) => {
    const { identifier, password } = req.body;
   
    console.log("hi")
    console.log(req.body)
    console.log(req.params)

    if (identifier === "" || password === "") {
      res.status(400).json({ message: "Provide an identifier and password" });
      return;
    }
  
    Admin.findOne({ identifier })
      .then((loginUser) => {
        if (!loginUser) {
          res.status(400).json({ message: "User not found." });
          return;
        }
        const passedPassword = bcrypt.compareSync(password, loginUser.password);
        
        if (passedPassword) {
          const { _id, identifier } = loginUser;
          const payload = { _id, identifier };
          const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
            algorithm: "HS256",
            expiresIn: "2h",
          });
          res.status(200).json({ authToken: authToken });
        } else {
          res.status(401).json({ message: "Cannot authenticate the user" });
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Server Error" })
      );
  });

  
  
  router.get("/verify", isAuthenticated, (req, res) => {
    res.status(200).json(req.payload);
  });
  
  module.exports = router;