const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
    },
    email: {
        type: String,
        required: [true, "Email is required."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    },
}, {timestamps: true});

//need to compare passwordd and confirm password and fail validation if they don't match
//we'll get the confirmPassword in req body and need to create "virtual space" to hold value while we compare things
//but not save them to the db

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);



UserSchema.pre("validate", function(next){
    if (this.password !== this.confirmPassword) {
        console.log(this.password);
        console.log(this.confirmPassword);
        this.invalidate("confirmPassword", "Passwords didn't match.  Please try again.");
    }
    // if passwords match, we can continue on to the "normal" validate steps
    next();
})

//must encrypt password BEFORE we save to the db
//this ensures no one has access to the user's real password 

UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            console.log("Password: " + this.passowrd);
            console.log("Hashed: " + hashedPassword);
            this.password = hashedPassword;
            next();
        })
        .catch
})


const User = mongoose.model("User", UserSchema);

module.exports = User;