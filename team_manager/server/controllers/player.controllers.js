const Player = require('../models/player.models');

module.exports.createPlayer = (req, res) => {
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


// module.exports.getAllPlayers = (req, res) => {
//     console.log("inside getAllPlayers");
//     Player.find({})
//         .then((allPlayers) => {
//             console.log(allPlayers);
//             res.json(allPlayers);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json(err);
//         });
// }