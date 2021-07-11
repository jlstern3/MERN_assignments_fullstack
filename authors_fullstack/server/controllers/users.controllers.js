const User = require('../models/users.models');
const bycrypt = require('bcyrpt');

//alternate syntax for exporting controller functions
module.exports = {
    register: (req, res) => {
        //use the object passed in to creat e aUser instance
        //this triggers our virtual field creation
        const newUser = new User(req.body);
        console.log(newUser);

        //this is saving to the db and it'll trigger our "pre" save function in users.models
        newUser.save()
            .then(() => {
                console.log("Successful registration")
                res.json({
                    message: "Successfully registered", 
                    user: newUser,
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    }

}