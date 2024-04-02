const express = require('express');
const port = 8000;
const cors = require('cors');
// Connecting the db
const db = require('./config/mongoose');

const app = express();

// Enable CORS for all routes
app.use(cors());


// Middleware to parse urlencoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/', require('./route'));

// Starting the server
app.listen(port, function(err) {
    if(err){
        console.log("Error in running the server")
    }
    console.log('Express server is running on port: ', port)
})
