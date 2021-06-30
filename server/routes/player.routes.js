const PlayerController = require('../controllers/player.controllers');

module.exports = function(app){
    app.get('/players/list', PlayerController.getAllPlayers);

    app.post('/players/addplayer', PlayerController.createPlayer);

}