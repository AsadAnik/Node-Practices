const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const Schema = mongoose.Schema;


// User Schema..
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: {unique: true}
  },
  password: {
    type: String,
    minlength: 7,
    required: true,
  },
  token: {
    type: String,
  }
});


// Using bcrypt with middleware..
// And there must need ES-5 Syntex..
userSchema.pre('save', function(next){
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // genarate a salt..
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);

    // hash the password by using our new salt..
    bcrypt.hash(user.password, salt, function (err, hash){
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});


// Schema method..
userSchema.methods.comparePassword = function (candidatePassword, cb){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if (err) return cb(err);
    cb(null, isMatch);
  });
}

// user token generate..
userSchema.methods.generateToken = function (cb){
  var user = this;
  const secret = "mysupersecret";
  const token = jwt.sign(user._id.toHexString(), secret);

  user.token = token;
  user.save(function(err, user){
    if (err) return cb(err);
    cb(null, user);
  });
}

// auth user with security..
userSchema.statics.findByToken = function (token, cb){
  var user = this;
  const secret = "mysupersecret";

  jwt.verify(token, secret, function(err, decode){
    user.findOne({_id: decode, token: token}, function(err, user){
      if (err) return cb(err);
      cb(null, user);
    });
  });
}


// User Model..
const User = mongoose.model('User', userSchema);

// Exports module..
module.exports = { User };
