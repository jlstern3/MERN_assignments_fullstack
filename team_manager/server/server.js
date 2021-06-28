const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


require('./config/mongoose.config');

// connect routes here

app.listen(port, ()=> { 
    console.log(`Server is actively listening on port ${port}`);
})