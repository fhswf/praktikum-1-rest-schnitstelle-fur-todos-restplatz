import express from 'express';


import { fileURLToPath } from 'url';
import path from 'path';


/** Zentrales Objekt für unsere Express-Applikation */
const app = express();

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

const port = 3000

//Read aller ToDos

app.get('/todos', (req, res) => {
  res.send(TODOS)
})

// Connect to frontend

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../frontend/todo.html');
  res.sendFile(filePath);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Create zum Anlegen eines ToDos

app.post('/todos', (req, res) => {
    const todo = req.body;
    console.log(todo);
    // Generiere eine neue ID für das ToDo
    const newId = Date.now();
    // Erstelle ein neues ToDo-Objekt mit der neuen ID
    const newTodo = {
          id: newId,
          title: todo.title,
          due: todo.due,
          status: todo.status
      };
      // Füge das neue ToDo dem Array TODOS hinzu
      TODOS.push(newTodo);
  res.status(201).send("ToDo wurde erfolgreich angelegt.");
});


//Read eines einzelnen ToDos

app.get('/todos/:id', (req,res) => {
    
    const idi = parseInt(req.params.id);
    console.log(idi)
    let todo = TODOS.find(todo => todo.id === idi);   
    res.send(todo);
});


//Update eines ToDos

app.put('/todos/:id', (req, res) => { 
    const idi = parseInt(req.params.id);
    console.log(idi)
    let todo = TODOS.find(todo => todo.id === idi);
    todo.title = req.body.title;
    todo.due = req.body.due;
    todo.status = req.body.status;
    res.status(200).send("ToDo wurde erfolgreich geändert.");
});



//Delete eines ToDos

app.delete('/todos/:id', (req, res) => {
    const idi = parseInt(req.params.id);
    console.log(idi)
    let todo = TODOS.find(todo => todo.id === idi);
    TODOS = TODOS.filter(todo => todo.id !== idi);
    res.status(200).send("ToDo wurde erfolgreich gelöscht.");
});

// Starte den Server

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
