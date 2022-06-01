const authRouter = require('express').Router();
const User = require('../models/user');

authRouter.post('/checkCredentials', (req, res) => {
    const { email, password } = req.body;
    
    User.findByEmail(email)
    .then((user) => {
      if (!user) {
        res.status(401).send("Invalid credentials")
      } else {
        User.verifyPassword(password, user.hashedPassword).then((verification) => {
          if (verification) {
            res.status(200).send("You're login")
          } else {
            res.status(401).send("Invalid credentials")
          }
        })
      }
    })
});

module.exports = authRouter;