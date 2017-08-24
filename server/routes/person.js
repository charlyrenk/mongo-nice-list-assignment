var express = require('express');
var router = express.Router();
// bring in our Mongoose model
var Person = require('../models/person.schema.js');

router.get('/', function(req, res) {
    res.send([{name: 'test', location: 'also test'}]);
});

router.post('/', function(req, res) {
    console.log('new person to store: ', req.body);

    // use model/constructor to make a Mongoose Object
    var personToSaveToTheCollection = new Person(req.body);

    // insert into our collection
    personToSaveToTheCollection.save(function(err, data) {
        console.log('saved to the collection: ', data);
        if(err) {
            console.log('save error: ', err);
            
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
        
    });
});


module.exports = router;