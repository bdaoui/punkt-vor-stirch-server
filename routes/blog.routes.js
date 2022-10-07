const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

// Edit Contact Info
router.post("/", (req, res) =>{
    console.log("Creating New Blog Post")
    const 
        {author,
        message,
        subject} = req.body;

    Blog.create({author, subject, message })
        .then(response => {console.log(response)
        res.status(200).json("New Blog Posted")})
        .catch(err => console.log(err))
})

// Get current Contact Info
router.get("/", (req, res) =>{
    console.log("Request All Blog Posts")

    Blog.find()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => console.log(err))
    })

    router.post("/edit", (req, res) =>{
        console.log("Editing Blog Post")
        const 
            {author,
            message,
            subject,
            id} = req.body;
          
    
        Blog.findByIdAndUpdate({_id : id}, {author, subject, message })
            .then(response => {console.log(response)
            res.status(200).json("Blog Updated")})
            .catch(err => console.log(err))
    
    })

    router.delete("/delete", (req, res) =>{
        console.log("Deleting Blog Post")
        const {id} = req.body
        console.log(req.body)
    
        Blog.findByIdAndDelete({_id : id})
            .then(response => {console.log(response)
            res.status(200).json("Blog Deleted")})
            .catch(err => console.log(err))
    
    })
module.exports = router;