const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const { googleClientID, googleClientSecret } = require("../config/keys")
const mongoose = require("mongoose")

//fetch User schema
const User = mongoose.model("users")

//serialize user and turn it into an id, stuff in the cookie
passport.serializeUser((user, done) => {
  done(null, user.id) // uses id generated by mongo
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})

//setup strategy with the name "google"
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser)
        } else {
          new User({ googleId: profile.id }).save().then(user => {
            done(null, user)
          })
        }
      })
    }
  )
)
