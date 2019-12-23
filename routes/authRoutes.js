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
  //passport middlewars takes over and passes request to arrow funcion (req, res)
  //and we can redirect user back to the react application
  app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect("/surveys")
  })

  //passport automatically puts the logged on user onto req.user
  //so this is why we have access to it
  app.get("/api/current_user", (req, res) => {
    res.send(req.user)
  })

  app.get("/api/logout", (req, res) => {
    req.logout()
    res.redirect("/")
  })
}
