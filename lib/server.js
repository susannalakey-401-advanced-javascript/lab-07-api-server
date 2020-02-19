const express = require('express');
const craftData = require('../db.json');

const app = express();

app.use(express.json())

// get entries
app.get('/craftProjects', (req, res) => {
  // console.log('data', craftData.craftProjects)
  res.status(200).json(craftData.craftProjects)
})

// create new entry
app.post('/craftProjects', (req, res) => {
  // console.log('req.body', req.body)
  res.status(201).json(req.body)
})

// update entry
app.put('/craftProjects/:id', (req, res) => {
  res.status(200).json(req.body)
})

// delete entry
app.delete('/craftProjects/:id', (req, res) => {
  res.status(204).json(req.body)
})



app.get('/craftTypes', (req, res) => {
  res.status(200).json(craftData.craftTypes)
})

app.post('/craftTypes', (req, res) => {
  res.status(201).json(req.body)
})

app.put('/craftTypes/:id', (req, res) => {
  res.status(200).json(req.body)
})

app.delete('/craftTypes/:id', (req, res) => {
  res.status(204).json(req.body)
})



module.exports = {
  server: app,
  start: function (port) {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  }
}