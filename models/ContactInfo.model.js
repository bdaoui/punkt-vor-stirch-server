const {Schema, model} = require("mongoose")

const contactInfoSchema = new Schema({
    email: String,
    phone: String,
    address: String
})

const ContactInfo = model("ContactInfo", contactInfoSchema)
module.exports = ContactInfo;