const express = require('express')
var bodyParser = require('body-parser')

var userRoute = require('./routes/user.route')

const port = 3000

const app = express()
app.set('view engine', 'pug')
app.set('views', './views')


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug')
app.set('views', './views')


app.get('/', function (req, res) {
    res.render('index');
});

app.use('/users',userRoute);
// app.get('/users', function (req, res) {
//     res.render('users/user', {
//         users: db.get('users').value()
//     })
// });



// app.get('/users/search', function (req, res) {
//     var q = req.query.q;

//     var mathedUsers = db.get('users').value().filter(function(user) {
//         return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
//     });

//     console.mathedUser;
//     res.render('users/user', {
//         users: mathedUsers
//     })
// })

// app.get('/users/create', function (req, res) {
//     res.render('users/create');
// })


// app.get('/users/:id', function (req, res) {
//     var id = req.params.id;

//     var user = db.get('users').find({
//         id: id
//     }).value();
//     res.render('users/view', {
//         user: user
//     })
// })

// app.post('/users/create', function (req, res) {
//     req.body.id = shortid.generate();
//     db.get('users').push(req.body).write();
//     res.redirect('/users');
// })

app.listen(port, () => console.log('Server is listening on port: ' + port));