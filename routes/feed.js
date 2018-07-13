/* 
Route for News Feed
*/

var express = require('express');
var router = express.Router();

//Dummy Data
var data = require('../data/data.json')

router.get('/feed', function(req, res) {
    console.log("feed...")
    var info = '';
    data.forEach(function(item) {
        info += `
            <li>
                <h2>${item.username}</h2>
                <img src="${item.image_link}">
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
