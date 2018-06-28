var express = require('express');
var app = express();
var dataFile = require('./data/data.json')

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile)

app.use(express.static('./public/index.css'))
app.use(require('./routes/index'))
app.use(require('./routes/feed'))
app.use(require('./routes/users'))


var server = app.listen(app.get('port'), function() {
    console.log("Listening on port 3000");
});