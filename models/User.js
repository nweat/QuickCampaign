const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String
})

//load userSchema into users
mongoose.model("users", userSchema)
