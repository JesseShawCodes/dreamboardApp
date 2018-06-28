var express = require('express');
var app = express();

//Dummy Data
var data = require('./data/data.json')
var dummyParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies neque leo, at vehicula turpis finibus at. Donec fringilla fringilla dolor, id dignissim ex pellentesque quis. Vestibulum at fringilla tortor, at egestas lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque interdum porttitor dolor eu ultricies. Pellentesque iaculis nisl eu dolor lobortis rhoncus. Nullam volutpat et arcu posuere dictum. Integer vel finibus ipsum, a tempus dolor."


console.log(data[0].username)

app.set('port', process.env.PORT || 3000);





var server = app.listen(app.get('port'), function() {
    console.log("Listening on port 3000");
});