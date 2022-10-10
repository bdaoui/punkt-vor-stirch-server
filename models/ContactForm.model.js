const {Schema, model} = require("mongoose")

const contactFormSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
    status: {
        type: String,
        enum:["unread", "" ,"read","resolved","unresolved","important"],
        required: true,
        default: "unread"
    }
})

const ContactForm = model("ContactForm", contactFormSchema)
module.exports = ContactForm;