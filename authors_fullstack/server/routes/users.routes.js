const UserController = require('../controllers/users.controllers');

module.exports = function (app) {
    //register user
    app.post("/api/users/register", UserController.register);
    //login user
    app.post("/api/users/login", UserController.login);
    //logout user
}