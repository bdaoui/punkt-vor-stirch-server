const express = require("express");
const router = express.Router();

const Team = require("../models/Team.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");



// Edit Team

router.post("/team", (req, res) =>{
    const {name, position, linkedin, twitter} = req.body;

    ContactInfo.updateOne({}, {name, position, linkedin, twitter, image}, {new: true})
        .then(response => console.log(response))
        .catch(err => console.log(err))

})


// Get current Contact Info

router.get("/team", (req, res) =>{
    console.log("Request Team Info")

    Team.find()
        .then(response => {
            res.status(200).json(response[0])
        })
        .catch(err => console.log(err))
    })

module.exports = router;