const express = require('express');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/users/register', (req, res) => {
  res.render('register');
});

app.get('/users/login', (req, res) => {
  res.render('login');
});

app.get('/users/dashboard', (req, res) => {
  res.render('dashboard', { user: 'Douglas'});
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port: ${PORT}. Ready to accept requests!`);
});