import express from 'express';

/** Zentrales Objekt für unsere Express-Applikation */
const app = express();
const port = 3000


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





// Your code here
app.get('/', (req, res) => {
    res.send('nix los')
  })


app.get('/todos', (req, res) => {
    res.send(TODOS)
})

app.get('/todos/:id', (req, res) => {
    let itm = TODOS.find(item => {return item.id == req.params.id})
    res.send(itm)
})

app.delete('/todos'), (req, res) => {
    let idx = TODOS.findIndex(itm => itm.id == req.params.id)
    if(idx <0){
        return
    }
    TODOS.delete(idx)
}

app.put('/todos')
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


