const express = require('express');
const mongoose = require("mongoose");
const Blog = require('./models/course');

// express app
const app = express();

const dbURI = 'mongodb+srv://student:pass1234@cluster0.ieeefg9.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true});
module.exports = mongoose;

// login information:
// student: user- student   pass- pass1234
// Teacher user- teacher    teacher- pass1234

// register view engine
app.set('view engine', 'ejs')

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/courses', (req, res) => {
    res.render('courses');
});

// 404 page 
app.use((req, res) => {
    res.status(404).render('404');
})
