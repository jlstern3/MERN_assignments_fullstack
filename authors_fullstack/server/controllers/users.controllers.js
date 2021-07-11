const User = require('../models/users.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// alternate syntax for exporting controller functions
module.exports = {
	register: (req, res) => {
		// use the object passed in to create a User insance
		//		this triggers our virtual field creation
		const newUser = new User(req.body);
		console.log(newUser);

		// this is saving to the database and it will trigger our "pre" save function
		newUser.save()
			.then(() => {
				console.log("successful registration");
				res.json({
					message: "Successfully registered",
					user: newUser,
				})
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			})
	},

	login: (req, res) => {
		// find the email that they are trying to login with
		User.findOne({ email: req.body.email })
			.then((user) => {
				if(user === null) {
					// email address is not in mongo
					res.status(400).json({ message: "Invalid Login Attempt - 1" })
				} else {
					// found a valid use with that email address
					// verify the password is valid
					bcrypt.compare(req.body.password, user.password)
						.then((isPasswordValid) => {
							// successfully compared the values, but the boolean tells us if they match
							if(isPasswordValid === true) {
								// return a success WITH a cookie to prove they logged in successfully
								console.log("password is valid");
								// create a cookie object
								//		call it whatever you want!! - this is called "usertoken"
								res.cookie("usertoken", 
									jwt.sign({
										// we can save anything we want in this object and it will be a part of the JWT cookie
										_id: user._id,
										username: user.username,
										email: user.email
									},
									process.env.JWT_SECRET),
									{
										// options for this response cookie
										httpOnly: true,
										expires: new Date(Date.now() + 900000000)  // time until they have to log in again
									})
									// this is returned as res.data
									.json({
										message: "Successfully logged in",
										userLoggedIn: {
											// this can be saved to state if you want to say hello to the user by their name
											username: user.username,  
										}
									})
							} else {
								// password is not valid
								res.status(400).json({ message: "Invalid Login Attempt - 2" })
							}
						})
						.catch((err) => {
							res.status(400).json({ message: "Invalid Login Attempt - 3" })
						})
				}
			})
			.catch((err) => {
				// specific to errors while looking for the document
				// don't make these messages specific enough for a person to know what is wrong
				//		this is just to allow the developer to know which path the error came from
				res.status(400).json({ message: "Invalid Login Attempt - 4" })
			})

	},

	logout: (req, res) => {
		console.log("Logging out!");
		res.clearCookie("usertoken");
		res.json({ message: "You have successfully logged out of our system"});
	}
}