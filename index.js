const express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var userRoute = require('./routes/user.route')
var authRoute = require('./routes/auth.route')
var productRoute = require('./routes/prod.route')
var middleware = require('./middleware/auth.middleware')
const port = 3000

const app = express();


app.use(cookieParser('secret'))
app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.use(cookieParser())
app.set('view engine', 'pug')
app.set('views', './views')



app.get('/', function (req, res) {
    res.render('index.pug');
});

app.use('/users',middleware.requireAuth,userRoute);
app.use('/auth',authRoute);
app.use('/products',productRoute);
app.listen(port, () => console.log('Server is listening on port: ' + port));