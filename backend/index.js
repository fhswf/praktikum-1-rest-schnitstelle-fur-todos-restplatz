import express from 'express';

/** Zentrales Objekt für unsere Express-Applikation */
const app = express();
const port = 3000;
/**
 * Liste aller ToDos. 
 * Wird später durch Datenbank ersetzt!
 */
let TODOS = [
    {
        "id": 1671056616571,
        "title": "Übung 4 machen",
        "due": "2022-11-12T00:00:00.000Z",
        "status": 0
    },
    {
        "id": 1671087245763,
        "title": "Für die Klausur Webentwicklung lernen",
        "due": "2023-01-14T00:00:00.000Z",
        "status": 2
    },
];

// GET

app.get('/todos/', (req,res) => {
    res.send(TODOS);
})

app.get('/todos/:id', (req,res) => {
    const id = req.params.id;
    res.send(TODOS[id]);
    console.log(`Zeige TODOS mit der ID ${id} an`)
})

// Listener
app.listen(port, () => {
    console.log(`TODO App lauscht auf Port ${port}`)
  })