const {Schema, model} = require("mongoose")

const blogSchema = new Schema({
    author: String,
    subject: String,
    message: String,
    image: String
})

const Blog = model("Blog", blogSchema)
module.exports = Blog;