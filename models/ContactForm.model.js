const {Schema, model} = require("mongoose")

const contactFormSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    phone: String,
    subject: String,
    message: String
})

const ContactForm = model("ContactForm", contactFormSchema)
module.exports = ContactForm;