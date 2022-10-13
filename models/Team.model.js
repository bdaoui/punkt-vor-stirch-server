const {Schema, model} = require("mongoose")

const TeamSchema = new Schema({
    name: String,
    position: String,
    image: String,
    linkedin: String,
    twitter: String
})

const Team = model("Team", TeamSchema)
module.exports = Team;