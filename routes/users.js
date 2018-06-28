var express = require('express');
var router = express.Router();
var app = express();

var router = express.Router();

//Dummy Data
var data = require('../data/data.json')
var dummyParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies neque leo, at vehicula turpis finibus at. Donec fringilla fringilla dolor, id dignissim ex pellentesque quis. Vestibulum at fringilla tortor, at egestas lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque interdum porttitor dolor eu ultricies. Pellentesque iaculis nisl eu dolor lobortis rhoncus. Nullam volutpat et arcu posuere dictum. Integer vel finibus ipsum, a tempus dolor."

router.get('/user/:id', function(req, res) {
    var userId = req.params.id
    res.send(`
        <h1>${data[userId].username}</h1>
        <h2>${data[userId].first_name} ${data[userId].last_name}</h2>
    `)
})

module.exports = router;
