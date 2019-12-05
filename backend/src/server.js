const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect("mongodb+srv://OmniStack9:admin@aircnc-3d6ir.mongodb.net/AirCnC?retryWrites=true&w=majority",
{
    useNewUrlParser : true,
    useUnifiedTopology: true    
});
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);
