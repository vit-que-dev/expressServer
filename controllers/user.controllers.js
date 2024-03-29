var db = require('../db')
const shortid = require('shortid');


module.exports.index = function (req, res) {
    res.render('users/user', {
        users: db.get('users').value()
    })
};

module.exports.search = function (req, res) {
    var q = req.query.q;

    var mathedUsers = db.get('users').value().filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('users/user', {
        users: mathedUsers
    })
}

module.exports.create = function (req, res) {
    res.render('users/create');
}

module.exports.id = function (req, res) {
    var id = req.params.id;

    var user = db.get('users').find({
        id: id
    }).value();
    res.render('users/view', {
        user: user
    })
}
module.exports.POSTcreate = function (req, res) {
    req.body.id = shortid.generate();
    
    db.get('users').push(req.body).write();
    res.redirect('/users');
}


