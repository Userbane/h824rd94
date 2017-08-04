const path = require('path');
const express = require("express");
const mongoClient    = require('mongodb').MongoClient;
const bodyParser = require("body-parser");
const app = express();
const db = require('./config/db');
// app.use(express.static('weatherApp'));
app.use(express.static(path.join(__dirname, 'website')));
// app.use(express.static('files'));

app.use(bodyParser.urlencoded({extended: true}));
// require('./app/routes')(app, {});

mongoClient.connect(db.url, (err, database) => {
    if (err)
         return console.log(err);
require('./app/routes')(app, database);
    


const port = 8000;
app.listen(port, function(){
    console.log("Server has started on port:" +" "+port);
})
})