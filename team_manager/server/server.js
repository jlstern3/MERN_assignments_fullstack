const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

require('./config/mongoose.config');


require('./routes/player.routes')(app);

app.listen(port, ()=> { 
    console.log(`Server is actively listening on port ${port}`);
})