const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const challengeRoute = require('./routes/challenge');

//conexion a mongo db
const MONGODB_URI = 'mongodb+srv://juver:juver1995@cluster0.0p4zz.mongodb.net/challengeDb?retryWrites=true&w=majority'


const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use(express.json());

app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });
        
app.use('/api', challengeRoute);

//mongoDb connection
mongoose.connect(MONGODB_URI)
        .then(() => console.log('conexion a tu base de datos mongoDB atlas'))
        .catch((error) => console.log(error))

app.listen(port, () => console.log(`server running on port ${port}`));