const Player = require('../models/player.models');

module.exports.createPlayer = (req, res) => {
    console.log("inside createPlayer");
    console.log(req.data);
    Player.create(req.body)
        .then((newPlayer) => {
            console.log(newPlayer);
            res.json(newPlayer);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}


module.exports.getAllPlayers = (req, res) => {
    console.log("inside getAllPlayers");
    Player.find({})
        .then((allPlayers) => {
            console.log(allPlayers);
            res.json(allPlayers);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

module.exports.deletePlayer = (req, res) => {
    console.log('inside deletePlayer');
    Player.findByIdAndDelete(req.params.id)
        .then((deletedPlayer)=> {
            console.log(deletedPlayer);
            res.json(deletedPlayer)
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}