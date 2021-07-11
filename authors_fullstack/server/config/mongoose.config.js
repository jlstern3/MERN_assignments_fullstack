const mongoose = require('mongoose');
const dbName = process.env.DB_NAME;

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established connect to the " + process.env.DB_NAME + " database"))
    .catch(err => console.log("Error establishing " + process.env.DB_NAME +  "connection", err));   