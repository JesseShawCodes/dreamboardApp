app.get('/', function(req, res) {
    res.send(`
        <h1>Welcome to Jesse's DreamBoard App</h1>
        <p>${dummyParagraph}</p>
    `);
})

