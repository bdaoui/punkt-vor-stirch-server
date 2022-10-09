const express = require("express");
const router = express.Router();

const ContactForm = require("../models/ContactForm.model");


router.get("/", (req, res) =>{
    
ContactForm.find()
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})


module.exports = router;