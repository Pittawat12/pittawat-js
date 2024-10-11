const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('public')));

const indexpage = path.join(__dirname, 'index.html');
const about = path.join(__dirname, 'About_me.html');
const Experience = path.join(__dirname, 'Experience.html');
const Contact = path.join(__dirname, 'Contact.html');

app.get('/', (req, res) => {
    res.sendFile(indexpage);
});

app.get('/Contact', (req, res) => {
    res.sendFile(Contact)
});

app.get('/Experience', (req, res) => {
    res.sendFile(Experience)
});

app.get('/About_me', (req, res) => {
    res.sendFile(about);
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
  });