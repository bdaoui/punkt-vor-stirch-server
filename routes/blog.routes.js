const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const uploadCloud = require("../config/cloudinary.config")

// Edit Contact Info
router.post("/", uploadCloud.single("image"), (req, res) =>{
    console.log("Creating New Blog Post")
    const 
        {author,
        message,
        subject} = req.body;

    const image = req.file.path;

    Blog.create({author, subject, message, image })
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

router.post("/edit", uploadCloud.single("image"), (req, res) =>{
        console.log("Editing Blog Post ")
        const 
            {author,
            message,
            subject,
            id} = req.body;
        
        const image = req.file ? req.file.path : ""

        // Needed to verify if we have data coming for that field, otherwise the field will be empty

        let verifiedImage, verifiedAuthor, verifiedMessage, verifiedSubject;


        if (image){ verifiedImage = image};
        if (author){ verifiedAuthor = author};
        if (message){ verifiedMessage = message};
        if (subject){ verifiedSubject = subject};


        Blog.findByIdAndUpdate({_id : id}, {author: verifiedAuthor, subject: verifiedSubject, message : verifiedMessage, image : verifiedImage })
            .then(response => {console.log(response)
            res.status(200).json("Blog Updated")})
            .catch(err => console.log(err))
    
    })

    router.delete("/:id", (req, res) =>{
        console.log("Deleting Blog Post ")
        const {id} = req.params

        Blog.findByIdAndDelete({_id : id})
            .then(response => {console.log(response)
            res.status(200).json("Blog Deleted")})
            .catch(err => console.log(err))
    
    })
module.exports = router;