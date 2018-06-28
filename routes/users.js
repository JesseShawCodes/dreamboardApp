app.get('/user/:id', function(req, res) {
    var userId = req.params.id
    res.send(`
        <h1>${data[userId].username}</h1>
        <h2>${data[userId].first_name} ${data[userId].last_name}</h2>
    `)
})