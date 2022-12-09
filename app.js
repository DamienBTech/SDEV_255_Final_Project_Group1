const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();
const Course = require('./models/course');

// express app
const app = express();

const dbURI = process.env.MONGO_DB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))
module.exports = mongoose;


// register view engine
app.set('view engine', 'ejs')

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

// temp to test databases
app.get('/add-course', (req, res) => {
    const course = new Course({
        name: 'SDEV-256',
        description: 'Node',
        teacher: 'New Teacher',
    });

    course.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});



app.get('/', (req, res) => {
    res.render('index', { title: 'Login' })
});

app.get('/shownCourses', (req, res) => {
    res.redirect('courses')
});

app.get('/addCourse', (req, res) => {
    res.render('addCourse', { title: 'Create Course' })
});

app.get('/courses', (req, res) => {
    Course.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('shownCourses', { title: 'Courses', courses: result })
        })
        .catch((err) => {
            console.log(err);
        });
})

app.post('/courses', (req, res) => {
    const course = new Course(req.body);
    course.save()
        .then((result) => {
            res.redirect('courses');
        })
        .catch((err) => {
            console.log(err);
        })
})

app.delete('/shownCourses', (req, res) => {
    console.log('hihihihi');
})


// 404 page 
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Page' });
})