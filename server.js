const express = require('express');
const { pool } = require('./dbConfig');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

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
  res.render('dashboard', { user: 'Douglas' });
});

app.post('/users/register', (req, res) => {
  let { name, email, password, password2 } = req.body;

  console.log({
    name,
    email,
    password,
    password2
  });

  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({message:'Please enter all fields'});
  }

  if (password.length < 6) {
    errors.push({message:'Password should be at least 6 characters'});
  }

  if (password !== password2) {
    errors.push({message:'Passwords do not match'});
  }

  if(errors.length > 0) {
    res.render('register', { errors });
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port: ${PORT}. Ready to accept requests!`);
});