// Loads the data.
const db = require('../db/db');
const fs = require('fs');
const toDosArray = require('../db/db');

// Routing
module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        const newToDo = req.body;
        console.log(newToDo);
        toDosArray.push(newToDo);
        res.json(newToDo);
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