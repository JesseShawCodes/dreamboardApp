/* 
Route for News Feed
*/

var express = require('express');
var router = express.Router();
var app = express();

var router = express.Router();

//Dummy Data
var data = require('../data/data.json')

router.get('/feed', function(req, res) {
    var info = '';
    data.forEach(function(item) {
        info += `
            <li>
                <h2>${item.username}</h2>
                <p>${item.Paragraphs}</p>
            </li>
        `;
    })
    res.send(`
        <h1>Dream Board App</h1>
        ${info}
    `)
})

module.exports = router;
