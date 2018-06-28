var express = require('express');
var app = express();

app.use(require('./routes/index'))
app.use(require('./routes/feed'))
app.use(require('./routes/users'))

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log("Listening on port 3000");
});