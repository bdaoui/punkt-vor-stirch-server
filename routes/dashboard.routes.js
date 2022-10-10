const express = require("express");
const router = express.Router();

const ContactForm = require("../models/ContactForm.model");

// router.get("/", (req, res) => {
//   ContactForm.find()
//     .then((response) => res.status(200).json(response))
//     .catch((err) => console.log(err));
// });


router.get("/", (req, res) => {
    const unread = []
    const read= []
    const resolved = []
    const unresolved = []
    const important = []

    ContactForm.find()
    .then(response => response.map( item => {
        switch (item.status){
            case "unread" : 
            unread.push(item)
            break
            case "" : 
            unread.push(item)
            break
            case "read" : 
            read.push(item)
            break
            case "resolved" : 
            resolved.push(item)
            break
            case "unresolved" : 
            unresolved.push(item)
            break
            case "important" : 
            important.push(item)
            break
            default : 
            console.log('Something isnt working')
        }
    }))

    .then(() => res.status(200).json([unread, read, resolved, unresolved, important]))
    .catch((err) => console.log(err));
  });

router.post("/edit", (req, res) => {
  const { id, targetValueEdit } = req.body;
  console.log("body", req.body);
  ContactForm.findByIdAndUpdate(
    { _id: id },
    { status: targetValueEdit },
    { new: true }
  )
    .then((response) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
