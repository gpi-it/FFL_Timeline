var express = require('express');
var mongoose = require('mongoose');

// Mongoose connection to MongoDB
mongoose.connect('mongodb://localhost:27017/ffl_calendar', function(error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var entryschema = new Schema({
    name: String,
    description: String,
    start: String,
    end: String,
    url: String
});


// Mongoose Model definition
var entry = mongoose.model('d0', entryschema);

// Bootstrap express
var app = express();

//API calls
app.get('/entry', function(req, res) {
    var time = String(new Date().getTime());
    //console.log("----------");
    entry.find({}, function(err, docs) {
      //console.log(docs);
      if (docs) {
        res.json(docs[0]);
      })
    }
});

app.post('/new', function(req, res) {
    var name = req.body.name,
        desc = req.body.desc,
        name = req.body.start,
        desc = req.body.end,
        url = req.body.url;
});

app.post('/edit', function(req, res) {
  //TBD
});

app.post('/delete', function(req, res) {
  //TBD
});
