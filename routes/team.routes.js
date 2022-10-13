const express = require("express");
const router = express.Router();

const Team = require("../models/Team.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const uploadCloud = require("../config/cloudinary.config")



// Edit Team

router.post("/team", uploadCloud.single("image"), (req, res) =>{
    console.log("Editing Personnel Team Info")

    const {name, position, linkedin, twitter} = req.body;
    const image = req.file.path;

    ContactInfo.updateOne({name}, {name, position, linkedin, twitter, image}, {new: true})
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