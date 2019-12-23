const express = require("express")
const mongoose = require("mongoose")
const cookieSession = require("cookie-session")
const passport = require("passport")
const bodyParser = require("body-parser")
const { mongoURI, cookieKey } = require("./config/keys")
require("./models/User")
require("./services/passport")
const authRoutes = require("./routes/authRoutes")
const billingRoutes = require("./routes/billingRoutes")

const app = express()

//whenever any POSt/PUT.. request comes in, parse the body and will be available on req.body property
app.use(bodyParser.json())

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)
billingRoutes(app)

mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })

if (process.env.NODE_ENV === "production") {
  //make sure express serves up JS/CSS assets
  app.use(express.static("client/build"))

  //make sure express serves up index.html file
  const path = require("path")
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("running")
})
