const express = require("express")
const mongoose = require("mongoose")
const cookieSession = require("cookie-session")
const passport = require("passport")
const { mongoURI, cookieKey } = require("./config/keys")
require("./models/User")
require("./services/passport")
const authRoutes = require("./routes/authRoutes")

const app = express()
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("running")
})
