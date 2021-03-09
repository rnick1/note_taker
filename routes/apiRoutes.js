// Loads the data.
const db = require('../db/db.json');
const uniqueID = require('uniqid');

// Routing
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(db);
    });

    app.post('/api/notes', (req, res) => {
        const newToDo = req.body;
        newToDo.id = uniqueID();
        console.log(newToDo);
        db.push(newToDo);
        res.json(newToDo);
    });

    app.delete("/api/notes/:id", function (req, res) {
        db.forEach(function (element, index) {
            if (element.id === req.params.id) {
                db.splice(index, 1)
                res.json(db)
            }
        })
    });
}