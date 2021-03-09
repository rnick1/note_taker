// Loads the data.
const db = require('../db/db.json');
const fs = require('fs');
const uniqueID = require('uniqid');

// Routing
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('../db/db.json', function (err, data) {
            if (err) return console.log(err);
            res.json(data);
        });
    });

    app.post('/api/notes', (req, res) => {
        const newToDo = req.body;
        newToDoID = uniqueID();
        console.log(newToDo);
        db.push(newToDo);
        res.json(newToDo);
    });

    app.delete("/api/notes/:id", function (req, res) {
        notes.splice(req.params.id, 1);
        change();
        console.log("Deleted todo with id " + req.params.id);
    });

    function change() {
        fs.writeFile("db/db.json", JSON.stringify(db, '\t'), err => {
            if (err) throw err;
            return true;
        });
    }
};





// // Routing
// module.exports = (app) => {
//     app.get('/api/notes', (req, res) => res.json(db));