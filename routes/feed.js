app.get('/feed', function(req, res) {
    var info = '';
    console.log(data)
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