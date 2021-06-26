const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

require('./config/mongoose.config');

require('./routes/authors.routes') (app);

app.listen(port, () => console.log(`Server is listening on Port ${port}`));