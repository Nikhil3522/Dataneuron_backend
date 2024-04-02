const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://localhost/dataneuron");
mongoose.connect("mongodb+srv://nikhiljha3522:nikhil@cluster0.pedvwbc.mongodb.net/dataneuron");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function(){
    console.log('Successfuly connected to the datebase');
});