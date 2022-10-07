const express = require("express");
const router = express.Router();

const ContactForm = require("../models/ContactForm.model");


router.post("/", (req, res) =>{
    console.log("Sending a Message")

    const { contactName,
        contactLastName,
        contactEmail,
        contactPhone,
        contactSubject,
        contactMessage} = req.body;

    ContactForm.create(     
        {
            name: contactName,
            lastName: contactLastName,
            email: contactEmail,
            phone: contactPhone,
            subject: contactSubject,
            message: contactMessage
        }
    )
    .then(response => res.status(200).json("Message Sent!"))
    .catch(err => console.log(err))
})


module.exports = router;