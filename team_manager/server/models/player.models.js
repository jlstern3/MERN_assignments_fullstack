const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required."],
        minlength: [true, "Name must be at least two characters in length."]
    },
    position: {
        type: String,
        required: [true, "Position is required."],
        minlength: [true, "Position must be at least two characters in length."]
    },
    playerStatus: {
        type: String,
        required: [true, "Player status is required."],
        enum: [
            'Playing',
            'Not Playing',
            'Undecided'
        ]
    }
}, {timestamps: true});

module.export = mongoose.model("Player", PlayerSchema);