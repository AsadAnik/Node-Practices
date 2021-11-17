const { User } = require('../models/user');

// the auth middleware..
const auth = function(req, res, next){
    let token = req.cookies.auth;

    User.findByToken(token, function(err, user){
        if (err) throw err;
        if (!user) return res.status(401).send('Access Denied!');

        req.token = token;
        next();
    });
}

module.exports = { auth };