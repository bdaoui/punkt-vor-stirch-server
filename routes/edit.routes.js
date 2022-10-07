const express = require("express");
const router = express.Router();

const ContactInfo = require("../models/ContactInfo.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");



// Edit Contact Info

router.post("/info", (req, res) =>{
    const {email, phone, address} = req.body;

    ContactInfo.updateOne({}, {email, phone, address}, {new: true})
        .then(response => console.log(response))
        .catch(err => console.log(err))

})


// Get current Contact Info

router.get("/info", (req, res) =>{
    console.log("Request Contact Info List")

    ContactInfo.find()
        .then(response => {
            res.status(200).json(response[0])
        })
        .catch(err => console.log(err))
    })

module.exports = router;