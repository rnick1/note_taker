// Loads the data.
const db = require('../db/db');
const fs = require('fs');
const toDosArray = require('../db/db');
const uniqueID = require('uniqid');

// Routing
module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        const newToDo = req.body;
        newToDoID = uniqueID();
        console.log(newToDo);
        toDosArray.push(newToDo);
        res.json(newToDo);
    });

    app.delete('/api/notes', (req, res) => {
        toDosArray.delete

        res.json({ ok: true });
    });
};

// // Routing
// module.exports = (app) => {
//     app.get('/api/notes', (req, res) => {
//         fs.readFile('../db/db', function (err, data) {
//             if (err) return console.log(err);
//             res.json(data);
//         });
//     });