/*
Home Page
*/

var express = require('express');
var router = express.Router();

//Dummy Data
var dummyParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies neque leo, at vehicula turpis finibus at. Donec fringilla fringilla dolor, id dignissim ex pellentesque quis. Vestibulum at fringilla tortor, at egestas lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque interdum porttitor dolor eu ultricies. Pellentesque iaculis nisl eu dolor lobortis rhoncus. Nullam volutpat et arcu posuere dictum. Integer vel finibus ipsum, a tempus dolor."

router.get('/index', function(req, res) {
    console.log("index...")
    res.send(`
        <h1>Welcome to Jesse's DreamBoard App</h1>
        <p>${dummyParagraph}</p>
    `);
})

module.exports = router;

