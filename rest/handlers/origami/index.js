const Play = require("./Origami");
const User= require("../users/User");
const { play } = require("../../routes");

module.exports = {
  get: {
    create(req, res) {
      res.render("plays/create.hbs", {
        isLoggedIn: req.user !== undefined,
        username: req.user ? req.user.username : "",
      });
    },

    details(req, res){
        const { id } = req.params;
        console.log(id)

        Play.findById(id)
        .lean()
        .populate("likedPlays")
        .then((play) => {
      

          res.render("plays/details.hbs", {
            isLoggedIn: req.user !== undefined,
            username: req.user ? req.user.username : "",
            isTheCreator: JSON.stringify(req.user._id) === JSON.stringify(play.creator),
            play,
          });
        });
    },

    delete(req, res, next){

        const {id} = req.params;
        const userId = req.user._id
  
        Promise.all([
          Play.deleteOne({_id: id}),
          User.updateOne({_id: userId}, {$pull: {likedPlays: id}})
        ])
        .then(([updateCourses, updateUser])=>{
  
          res.redirect('/home/')
        })
    },
    edit(req, res){
        const {id} = req.params;

        Play.findById({_id: id}).lean()
        .then(play =>{
            res.render("plays/edit.hbs", {
                isLoggedIn: req.user !== undefined,
                username: req.user ? req.user.username : "",
                play,
             
            
              });
        })
    }
  },

  post: {
    create(req, res) {
      const { treaterName, description, imageUrl, checkBox } = req.body;


      Play.create({
        title: treaterName,
        description,
        imageUrl,
        isPublic: checkBox === "on" ? true : false,
        createdAt: new Date() + "",
        creator: req.user._id,
      }).then(() => {
        res.redirect("/home");
      });
    },
  },
};
