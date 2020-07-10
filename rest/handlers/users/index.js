const User = require("./User");
const jwt = require("../../utils/jwt");
const { cookie } = require("../../config/config");

module.exports = {
  get: {
    // login(req, res, next) {
    //   res.render("users/login.hbs");
    // },
    // register(req, res, next) {
    //   res.render("users/register.hbs");
    // },
    // logout(req, res, next) {
    //   req.user = null;
    //   res.clearCookie(cookie).redirect("/home/");
    // },
  },
  post: {
    login(req, res, next) {
      const { username, password } = req.body;

      User.findOne({ username })
        .then((user) => {
          return Promise.all([user.matchPassword(password), user]);
        })
        .then(([match, user]) => {
          if (!match) {
            next(err);
            return;
          }
          const token = jwt.createToken(user);

          res
            .status(201)
            .cookie(cookie, token, { maxAge: 360000 })
            .redirect("/home/");
        })
        .catch((err) => {
          res.render("users/login.hbs", {
            isLoggedIn: req.user !== undefined,
            username: req.user ? req.user.username : "",
            message: "Wrong password or email!",
          });
        });
    },
    register(req, res, next) {
      const { username, password } = req.body;

      User.create({
        username,
        password,
      })
        .then((cretedUser) => res.send(cretedUser))
        .catch(next);
    },
  },
};
