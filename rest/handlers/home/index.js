// const Play = require("../origami/Origami");

// module.exports = {
//   get: {
//     home(req, res) {
//       Play.find({})
//         .lean()
//         .then((play) => {
//           console.log(play)
//           res.render("home/home.hbs", {
//             isLoggedIn: req.user !== undefined,
//             username: req.user ? req.user.username : "",
//             play
//           });
//         });
//     },
//   },
//   post: {},
// };
