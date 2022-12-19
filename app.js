const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();
const Course = require('./models/course');
const User = require('./models/user');
const ShoppingCart = require('./models/cart');
const Schedule = require('./models/schedule');

// express app
const app = express();

const dbURI = process.env.MONGO_DB_URI;
mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))
module.exports = mongoose;


// register view engine
app.set('view engine', 'ejs')

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}))


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Login'
    })
});

// new account creation
app.post('/', (req, res) => {
    // it should DEFINITELY be encrypted, which Cam can take care of
    const user = new User(req.body);
    user.save()
        .then((result) => {
            res.redirect('courses');
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/courses', (req, res) => {
    Course.find().sort({
            createdAt: -1
        })
        .then((result) => {
            res.render('shownCourses', {
                title: 'Courses',
                courses: result
            })
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

app.get('/shownCourses', (req, res) => {
    res.redirect('courses')
});

app.get('/addCourse', (req, res) => {
    res.render('addCourse', {
        title: 'Create Course'
    })
});

app.get('/checkout', (req, res) => {
    ShoppingCart.find().sort({
            createdAt: -1
        })
        .then((result) => {
            res.render('checkOut', {
                title: 'Check Out',
                carts: result
            })
        })
        .catch((err) => {
            console.log(err)
        })
});

app.post('/checkout', (req, res) => {
    const cart = new ShoppingCart(req.body);
    cart.save()
        .then((result) => {
            res.redirect('checkout');
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/schedule', (req, res) => {
    Schedule.find().sort({
            createdAt: -1
        })
        .then((result) => {
            res.render('schedule', {
                title: 'Schedule',
                schedules: result
            })
        })
        .catch((err) => {
            console.log(err)
        })
});

<<<<<<< HEAD
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

app.post('/carts', (req, res) => {
    const cart = new ShoppingCart(req.body)
    cart.save()
        .then((result) => {
            res.redirect('/checkout');
        })
        .catch((err) => {
            console.log(err);
        })
})

=======
>>>>>>> aa0b1912978c128f4df1059639297f2bac63f822
app.post('/schedule', (req, res) => {
    const schedule = new Schedule(req.body);
    schedule.save()
        .then((result) => {
            res.redirect('schedule');
        })
        .catch((err) => {
            console.log(err);
        })
})





// NOT a post request below
app.post('/login', (req, res) => {
    console.log("LOGIN");
    console.log(req.body);
    console.log("run a check against the current database entries");
    // if it does not match, give the user information that either the username or password does not match
})

app.get('/signUp', (req, res) => {
    res.render('signUp', {
        title: 'Sign Up'
    })
})



app.get('/courses/:id', (req, res) => {
    console.log("got-it-1");
    const id = req.params.id;
    Course.findById(id)
        .then(result => {
            res.render('details', {
                course: result,
                title: "Course Details"
            })
        })
        .catch(err => {
            console.log(err);
        })
});

app.put('/:id', (req, res) => {
    console.log("got-it-2");
    console.log(req.body);
    // res.send(req.body)
});


app.delete('/courses/:id', (req, res) => {
    console.log("got-it-3");
    const id = req.params.id;

    Course.findByIdAndDelete(id)
        .then(result => {
            res.json({
                redirect: '/shownCourses'
            })
        })
        .catch(err => {
            console.log(err);
        })
})


// 404 page 
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404 Page'
    });
})