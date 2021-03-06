//load up all of our keys and values from the .env file into memory
//we can access this through an object called process.env
require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const socketio = require('socket.io');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(cors({
	credentials: true,
	origin: "http://localhost:3000",
}));
app.use(cookieParser());

require('./config/mongoose.config');
require('./routes/authors.routes') (app);
require('./routes/users.routes')(app);

const server = app.listen(process.env.MY_PORT, () => console.log("Server is listening on Port " + process.env.MY_PORT));
// app.listen(port, () => console.log(`Server is listening on Port ${port}`)); 

const io = socketio(server, {
    cors: {
        // if we make origin an asterick, it's letting anyone and everyone to talk to our server
        // security issue
        origin: 'http://localhost:3000', 
        methods: ['GET', 'POST'],
        credentials: true,
        // not secure, can define who can talk and how 
        allowedHeaders: ['*']
    }
});

// start listening ('on') for clients wanting to connect
//so this is saying: I'm listening for a conversation from the client called connection (must call it this)
//when someone wants to connect, they'll pass into me a socket object
//with that socket object (code whatever you want)

io.on("connection", (socket) => {
    //socket is an object so it has keys you can access
    console.log('Server side of socket id:' + socket.id);
    socket.on("added_author", (data) => {
        console.log(data);
//emits an event to all clients other than the one that sent the original message
        socket.broadcast.emit("author_added", data);
    })

});

