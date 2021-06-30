const mongoose = require('mongoose');
const dbName = "player_db";

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established connection to the ${dbName} database.`))
    .catch(err => console.log(`Error establishing "${dbName}" connection`, err));  