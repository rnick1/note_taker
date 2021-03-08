// Loads the data.
const notes = require('../db/db.json');
const fs = require('fs');

// Routing
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('../db/db.json', function (err, data) {
            if (err) return console.log(err);
            res.json(data)
        })
    });
    app.post('/data/todos', (req, res) => {
        // if (tableData.length < 5) {
        //     tableData.push(req.body);
        //     res.json(true);
        // } else {
        //     waitListData.push(req.body);
        //     res.json(false);
        // }
    });
    app.post('/api/clear', (req, res) => {
        tableData.length = 0;
        waitListData.length = 0;

        res.json({ ok: true });
    });
};