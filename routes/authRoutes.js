const passport = require("passport")

module.exports = app => {
  //tell express we need to use google strategy auth flow to handle request
  //user is directed to google to get authenticate and get user permission
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    }),
    (req, res) => {}
  )

  //if user authenticated, user is redirected here
  //and we have access to a code from google
  // so we can get info from persons google profile
  app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
    res.send("hello")
  })

  app.get("/api/current_user", (req, res) => {
    res.send(req.user)
  })

  app.get("/api/logout", (req, res) => {
    req.logout()
    res.send(req.user)
  })
}
